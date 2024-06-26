import React, { useState } from 'react';
import imageCompression from 'browser-image-compression';
import { useToast } from "@/components/ui/use-toast";

const ImageCompressor: React.FC = () => {
    const [compressedImage, setCompressedImage] = useState<string | null>(null);
    const [imageInfo, setImageInfo] = useState<{
        fileName: string;
        originalSize: string;
        compressedSize: string;
        reduction: string;
    } | null>(null);
    const { toast } = useToast();

    const formatFileSize = (bytes: number): string => {
        if (bytes < 1024) return bytes + ' octets';
        else if (bytes < 1048576) return (bytes / 1024).toFixed(2) + ' Ko';
        else return (bytes / 1048576).toFixed(2) + ' Mo';
    };

    const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const options = {
                maxSizeMB: 1,
                maxWidthOrHeight: 800,
                useWebWorker: true
            };
            try {
                const compressedFile = await imageCompression(file, options);
                const compressedFileUrl = URL.createObjectURL(compressedFile);
                const originalSize = file.size;
                const compressedSize = compressedFile.size;
                const reduction = ((originalSize - compressedSize) / originalSize * 100).toFixed(2) + '%';
                setCompressedImage(compressedFileUrl);
                setImageInfo({
                    fileName: file.name,
                    originalSize: formatFileSize(originalSize),
                    compressedSize: formatFileSize(compressedSize),
                    reduction: reduction,
                });
            } catch (error) {
                console.error('Error compressing image:', error);
            }
        }
    };

    const handleDownload = () => {
        if (compressedImage) {
            const link = document.createElement('a');
            link.href = compressedImage;
            link.download = "compressed-image.jpg";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            toast({
                title: "Téléchargement réussi",
                description: "L'image compressée a été téléchargée avec succès.",
                duration: 3000,
            });
        } else {
            toast({
                title: "Erreur de téléchargement",
                description: "Il y a eu un problème lors du téléchargement de l'image.",
                variant: "destructive",
                duration: 3000,
            });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <label className="mb-4 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                <span>Choisir un fichier</span>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                />
            </label>
            {compressedImage && imageInfo && (
                <div className="flex flex-col md:flex-row items-center md:items-start w-full max-w-4xl">
                    <img src={compressedImage} alt="Compressed" className="mb-4 md:mb-0 md:mr-8 max-w-full md:max-w-md h-auto" />
                    <div className="flex flex-col my-auto w-full md:w-auto">
                        <h2 className="text-xl font-bold mb-2">Informations sur l'image</h2>
                        <p><strong>Nom du fichier :</strong> {imageInfo.fileName}</p>
                        <p><strong>Taille originale :</strong> {imageInfo.originalSize}</p>
                        <p><strong>Taille compressée :</strong> {imageInfo.compressedSize}</p>
                        <p><strong>Réduction :</strong> {imageInfo.reduction}</p>
                        <button
                            onClick={handleDownload}
                            className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 mt-4 text-center w-full md:w-auto"
                        >
                            Télécharger
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageCompressor;