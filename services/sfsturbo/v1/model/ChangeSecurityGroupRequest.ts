import { ChangeSecurityGroupRequestBody } from './ChangeSecurityGroupRequestBody';


export class ChangeSecurityGroupRequest {
    private 'share_id'?: string;
    public body?: ChangeSecurityGroupRequestBody;
    public constructor(shareId?: string) { 
        this['share_id'] = shareId;
    }
    public withShareId(shareId: string): ChangeSecurityGroupRequest {
        this['share_id'] = shareId;
        return this;
    }
    public set shareId(shareId: string  | undefined) {
        this['share_id'] = shareId;
    }
    public get shareId(): string | undefined {
        return this['share_id'];
    }
    public withBody(body: ChangeSecurityGroupRequestBody): ChangeSecurityGroupRequest {
        this['body'] = body;
        return this;
    }
}