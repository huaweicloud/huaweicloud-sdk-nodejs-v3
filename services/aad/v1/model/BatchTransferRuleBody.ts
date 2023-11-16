import { TransferRuleBody } from './TransferRuleBody';


export class BatchTransferRuleBody {
    public rules?: Array<TransferRuleBody>;
    public constructor() { 
    }
    public withRules(rules: Array<TransferRuleBody>): BatchTransferRuleBody {
        this['rules'] = rules;
        return this;
    }
}