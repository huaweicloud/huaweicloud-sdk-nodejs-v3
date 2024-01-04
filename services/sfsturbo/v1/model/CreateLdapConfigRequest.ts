import { CreateLdapConfigRequestBody } from './CreateLdapConfigRequestBody';


export class CreateLdapConfigRequest {
    private 'share_id'?: string;
    public body?: CreateLdapConfigRequestBody;
    public constructor(shareId?: string) { 
        this['share_id'] = shareId;
    }
    public withShareId(shareId: string): CreateLdapConfigRequest {
        this['share_id'] = shareId;
        return this;
    }
    public set shareId(shareId: string  | undefined) {
        this['share_id'] = shareId;
    }
    public get shareId(): string | undefined {
        return this['share_id'];
    }
    public withBody(body: CreateLdapConfigRequestBody): CreateLdapConfigRequest {
        this['body'] = body;
        return this;
    }
}