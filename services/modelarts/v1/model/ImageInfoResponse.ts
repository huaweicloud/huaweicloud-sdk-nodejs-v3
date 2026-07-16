

export class ImageInfoResponse {
    public id?: string;
    public source?: string;
    private 'swr_path'?: string;
    public category?: string;
    public constructor(id?: string, source?: string, swrPath?: string) { 
        this['id'] = id;
        this['source'] = source;
        this['swr_path'] = swrPath;
    }
    public withId(id: string): ImageInfoResponse {
        this['id'] = id;
        return this;
    }
    public withSource(source: string): ImageInfoResponse {
        this['source'] = source;
        return this;
    }
    public withSwrPath(swrPath: string): ImageInfoResponse {
        this['swr_path'] = swrPath;
        return this;
    }
    public set swrPath(swrPath: string  | undefined) {
        this['swr_path'] = swrPath;
    }
    public get swrPath(): string | undefined {
        return this['swr_path'];
    }
    public withCategory(category: string): ImageInfoResponse {
        this['category'] = category;
        return this;
    }
}