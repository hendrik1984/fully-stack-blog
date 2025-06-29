import { Image } from '@imagekit/react';

function IkImage({ source, className, w, h, alt}) { 
    
    return (
        <Image
            urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
            src={source}
            className={className}
            alt={alt}
            loading="lazy"
            lqip={{ active: true, quality: 20}}
            width={w}
            height={h}
        />
    );
}

export default IkImage
