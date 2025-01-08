export function isValidImageUrl(url: string) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);  // Image loaded successfully
        img.onerror = () => resolve(false); // Error occurred while loading
        img.src = url;
    });
}
export async function validateImage(urls: string[]|null) {
  try{
    if(urls===null) return [];
    const validatedImages = await Promise.all(urls?.map(validateOneImage));
    return (validatedImages.filter((url) => url !== null) as string[]);

  }catch(err){
    return null;
  }

}

const validateOneImage = async (url: string) => {
    try {

        const isValid = await isValidImageUrl(url);
        if (isValid) {
            return url
        }
        return null;

    } catch (error) {
        return null;


    }

}