

export class ImageInfo {
    public id?: string;
    public source?: string;
    private 'swr_path'?: string;
    public category?: string;
    public constructor(source?: string, swrPath?: string) { 
        this['source'] = source;
        this['swr_path'] = swrPath;
    }
    public withId(id: string): ImageInfo {
        this['id'] = id;
        return this;
    }
    public withSource(source: string): ImageInfo {
        this['source'] = source;
        return this;
    }
    public withSwrPath(swrPath: string): ImageInfo {
        this['swr_path'] = swrPath;
        return this;
    }
    public set swrPath(swrPath: string  | undefined) {
        this['swr_path'] = swrPath;
    }
    public get swrPath(): string | undefined {
        return this['swr_path'];
    }
    public withCategory(category: string): ImageInfo {
        this['category'] = category;
        return this;
    }
}