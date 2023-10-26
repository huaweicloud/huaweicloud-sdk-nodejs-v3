import { CreatePermRulesRequestBody } from './CreatePermRulesRequestBody';


export class CreatePermRuleRequest {
    private 'share_id'?: string;
    public body?: CreatePermRulesRequestBody;
    public constructor(shareId?: string) { 
        this['share_id'] = shareId;
    }
    public withShareId(shareId: string): CreatePermRuleRequest {
        this['share_id'] = shareId;
        return this;
    }
    public set shareId(shareId: string  | undefined) {
        this['share_id'] = shareId;
    }
    public get shareId(): string | undefined {
        return this['share_id'];
    }
    public withBody(body: CreatePermRulesRequestBody): CreatePermRuleRequest {
        this['body'] = body;
        return this;
    }
}