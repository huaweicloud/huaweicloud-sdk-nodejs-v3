import { CreateNoticeRuleReq } from './CreateNoticeRuleReq';


export class CreateNoticeRuleRequest {
    private 'X-Enterprise-Project-ID'?: string;
    public body?: CreateNoticeRuleReq;
    public constructor() { 
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): CreateNoticeRuleRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string  | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID(): string | undefined {
        return this['X-Enterprise-Project-ID'];
    }
    public withBody(body: CreateNoticeRuleReq): CreateNoticeRuleRequest {
        this['body'] = body;
        return this;
    }
}