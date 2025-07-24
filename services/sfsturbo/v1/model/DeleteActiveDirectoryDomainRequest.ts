import { DeleteActiveDirectoryDomainRequestBody } from './DeleteActiveDirectoryDomainRequestBody';


export class DeleteActiveDirectoryDomainRequest {
    private 'share_id'?: string;
    public body?: DeleteActiveDirectoryDomainRequestBody;
    public constructor(shareId?: string) { 
        this['share_id'] = shareId;
    }
    public withShareId(shareId: string): DeleteActiveDirectoryDomainRequest {
        this['share_id'] = shareId;
        return this;
    }
    public set shareId(shareId: string  | undefined) {
        this['share_id'] = shareId;
    }
    public get shareId(): string | undefined {
        return this['share_id'];
    }
    public withBody(body: DeleteActiveDirectoryDomainRequestBody): DeleteActiveDirectoryDomainRequest {
        this['body'] = body;
        return this;
    }
}