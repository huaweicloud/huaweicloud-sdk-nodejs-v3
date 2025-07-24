import { AddActiveDirectoryDomainRequestBody } from './AddActiveDirectoryDomainRequestBody';


export class AddActiveDirectoryDomainRequest {
    private 'share_id'?: string;
    public body?: AddActiveDirectoryDomainRequestBody;
    public constructor(shareId?: string) { 
        this['share_id'] = shareId;
    }
    public withShareId(shareId: string): AddActiveDirectoryDomainRequest {
        this['share_id'] = shareId;
        return this;
    }
    public set shareId(shareId: string  | undefined) {
        this['share_id'] = shareId;
    }
    public get shareId(): string | undefined {
        return this['share_id'];
    }
    public withBody(body: AddActiveDirectoryDomainRequestBody): AddActiveDirectoryDomainRequest {
        this['body'] = body;
        return this;
    }
}