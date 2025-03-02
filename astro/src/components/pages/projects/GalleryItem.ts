import type { ImageMetadata } from "astro";


export class GalleryItem {
    data: ImageMetadata;
    alt: string
    mobile: boolean

    constructor(data: ImageMetadata, alt: string, mobile: boolean = false) {
        this.data = data;
        this.alt = alt
        this.mobile = mobile
    }
}