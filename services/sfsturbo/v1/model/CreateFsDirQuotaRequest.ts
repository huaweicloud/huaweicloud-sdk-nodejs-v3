import { CreateFsDirQuotaRequestBody } from './CreateFsDirQuotaRequestBody';


export class CreateFsDirQuotaRequest {
    private 'share_id'?: string;
    public body?: CreateFsDirQuotaRequestBody;
    public constructor(shareId?: string) { 
        this['share_id'] = shareId;
    }
    public withShareId(shareId: string): CreateFsDirQuotaRequest {
        this['share_id'] = shareId;
        return this;
    }
    public set shareId(shareId: string  | undefined) {
        this['share_id'] = shareId;
    }
    public get shareId(): string | undefined {
        return this['share_id'];
    }
    public withBody(body: CreateFsDirQuotaRequestBody): CreateFsDirQuotaRequest {
        this['body'] = body;
        return this;
    }
}