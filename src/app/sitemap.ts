import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://quimonteabord.com.com',
            lastModified: new Date(),
        },
    ];
}
