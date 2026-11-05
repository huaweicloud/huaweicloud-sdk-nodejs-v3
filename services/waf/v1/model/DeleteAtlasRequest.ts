

export class DeleteAtlasRequest {
    private 'Content-Type'?: string;
    private 'atlas_id'?: string;
    public constructor(atlasId?: string) { 
        this['atlas_id'] = atlasId;
    }
    public withContentType(contentType: string): DeleteAtlasRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withAtlasId(atlasId: string): DeleteAtlasRequest {
        this['atlas_id'] = atlasId;
        return this;
    }
    public set atlasId(atlasId: string  | undefined) {
        this['atlas_id'] = atlasId;
    }
    public get atlasId(): string | undefined {
        return this['atlas_id'];
    }
}