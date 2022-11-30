

export class ImageDescriptionResponseResult {
    public description?: string;
    public constructor() { 
    }
    public withDescription(description: string): ImageDescriptionResponseResult {
        this['description'] = description;
        return this;
    }
}