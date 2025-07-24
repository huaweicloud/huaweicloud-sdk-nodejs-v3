import { UpdateActiveDirectoryDomainRequestBody } from './UpdateActiveDirectoryDomainRequestBody';


export class UpdateActiveDirectoryDomainRequest {
    private 'share_id'?: string;
    public body?: UpdateActiveDirectoryDomainRequestBody;
    public constructor(shareId?: string) { 
        this['share_id'] = shareId;
    }
    public withShareId(shareId: string): UpdateActiveDirectoryDomainRequest {
        this['share_id'] = shareId;
        return this;
    }
    public set shareId(shareId: string  | undefined) {
        this['share_id'] = shareId;
    }
    public get shareId(): string | undefined {
        return this['share_id'];
    }
    public withBody(body: UpdateActiveDirectoryDomainRequestBody): UpdateActiveDirectoryDomainRequest {
        this['body'] = body;
        return this;
    }
}