import { BatchDeleteRuleInfo } from './BatchDeleteRuleInfo';


export class BatchDeleteAclRulesResponseData {
    public responseDatas?: Array<BatchDeleteRuleInfo>;
    public constructor() { 
    }
    public withResponseDatas(responseDatas: Array<BatchDeleteRuleInfo>): BatchDeleteAclRulesResponseData {
        this['responseDatas'] = responseDatas;
        return this;
    }
}