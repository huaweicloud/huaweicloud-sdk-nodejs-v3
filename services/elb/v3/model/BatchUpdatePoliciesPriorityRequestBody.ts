import { BatchUpdatePriorityRequestBody } from './BatchUpdatePriorityRequestBody';


export class BatchUpdatePoliciesPriorityRequestBody {
    public l7policies?: Array<BatchUpdatePriorityRequestBody>;
    public constructor() { 
    }
    public withL7policies(l7policies: Array<BatchUpdatePriorityRequestBody>): BatchUpdatePoliciesPriorityRequestBody {
        this['l7policies'] = l7policies;
        return this;
    }
}