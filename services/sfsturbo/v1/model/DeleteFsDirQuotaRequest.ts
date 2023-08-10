import { DeleteFsDirQuotaRequestBody } from './DeleteFsDirQuotaRequestBody';


export class DeleteFsDirQuotaRequest {
    private 'share_id'?: string;
    public body?: DeleteFsDirQuotaRequestBody;
    public constructor(shareId?: string) { 
        this['share_id'] = shareId;
    }
    public withShareId(shareId: string): DeleteFsDirQuotaRequest {
        this['share_id'] = shareId;
        return this;
    }
    public set shareId(shareId: string  | undefined) {
        this['share_id'] = shareId;
    }
    public get shareId(): string | undefined {
        return this['share_id'];
    }
    public withBody(body: DeleteFsDirQuotaRequestBody): DeleteFsDirQuotaRequest {
        this['body'] = body;
        return this;
    }
}