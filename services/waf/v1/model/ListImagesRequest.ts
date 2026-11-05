

export class ListImagesRequest {
    private 'Content-Type'?: string;
    private 'atlas_id'?: string;
    public offset?: number;
    public limit?: number;
    public name?: string;
    public constructor(atlasId?: string) { 
        this['atlas_id'] = atlasId;
    }
    public withContentType(contentType: string): ListImagesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withAtlasId(atlasId: string): ListImagesRequest {
        this['atlas_id'] = atlasId;
        return this;
    }
    public set atlasId(atlasId: string  | undefined) {
        this['atlas_id'] = atlasId;
    }
    public get atlasId(): string | undefined {
        return this['atlas_id'];
    }
    public withOffset(offset: number): ListImagesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListImagesRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListImagesRequest {
        this['name'] = name;
        return this;
    }
}