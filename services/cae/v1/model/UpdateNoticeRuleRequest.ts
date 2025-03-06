import { UpdateNoticeRuleReq } from './UpdateNoticeRuleReq';


export class UpdateNoticeRuleRequest {
    private 'X-Enterprise-Project-ID'?: string;
    private 'rule_id'?: string;
    public body?: UpdateNoticeRuleReq;
    public constructor(ruleId?: string) { 
        this['rule_id'] = ruleId;
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): UpdateNoticeRuleRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string  | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID(): string | undefined {
        return this['X-Enterprise-Project-ID'];
    }
    public withRuleId(ruleId: string): UpdateNoticeRuleRequest {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withBody(body: UpdateNoticeRuleReq): UpdateNoticeRuleRequest {
        this['body'] = body;
        return this;
    }
}