import { AiguardAtlasUpdateBody } from './AiguardAtlasUpdateBody';


export class UpdateAtlasRequest {
    private 'Content-Type'?: string;
    private 'atlas_id'?: string;
    public body?: AiguardAtlasUpdateBody;
    public constructor(contentType?: string, atlasId?: string) { 
        this['Content-Type'] = contentType;
        this['atlas_id'] = atlasId;
    }
    public withContentType(contentType: string): UpdateAtlasRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withAtlasId(atlasId: string): UpdateAtlasRequest {
        this['atlas_id'] = atlasId;
        return this;
    }
    public set atlasId(atlasId: string  | undefined) {
        this['atlas_id'] = atlasId;
    }
    public get atlasId(): string | undefined {
        return this['atlas_id'];
    }
    public withBody(body: AiguardAtlasUpdateBody): UpdateAtlasRequest {
        this['body'] = body;
        return this;
    }
}