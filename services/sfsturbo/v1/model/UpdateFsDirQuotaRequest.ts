import { UpdateFsDirQuotaRequestBody } from './UpdateFsDirQuotaRequestBody';


export class UpdateFsDirQuotaRequest {
    private 'share_id'?: string;
    public body?: UpdateFsDirQuotaRequestBody;
    public constructor(shareId?: string) { 
        this['share_id'] = shareId;
    }
    public withShareId(shareId: string): UpdateFsDirQuotaRequest {
        this['share_id'] = shareId;
        return this;
    }
    public set shareId(shareId: string  | undefined) {
        this['share_id'] = shareId;
    }
    public get shareId(): string | undefined {
        return this['share_id'];
    }
    public withBody(body: UpdateFsDirQuotaRequestBody): UpdateFsDirQuotaRequest {
        this['body'] = body;
        return this;
    }
}