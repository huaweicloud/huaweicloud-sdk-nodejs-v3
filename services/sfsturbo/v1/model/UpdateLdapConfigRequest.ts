import { UpdateLdapConfigRequestBody } from './UpdateLdapConfigRequestBody';


export class UpdateLdapConfigRequest {
    private 'share_id'?: string;
    public body?: UpdateLdapConfigRequestBody;
    public constructor(shareId?: string) { 
        this['share_id'] = shareId;
    }
    public withShareId(shareId: string): UpdateLdapConfigRequest {
        this['share_id'] = shareId;
        return this;
    }
    public set shareId(shareId: string  | undefined) {
        this['share_id'] = shareId;
    }
    public get shareId(): string | undefined {
        return this['share_id'];
    }
    public withBody(body: UpdateLdapConfigRequestBody): UpdateLdapConfigRequest {
        this['body'] = body;
        return this;
    }
}