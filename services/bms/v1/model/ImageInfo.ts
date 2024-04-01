

export class ImageInfo {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): ImageInfo {
        this['id'] = id;
        return this;
    }
}