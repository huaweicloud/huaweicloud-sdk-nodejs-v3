import { TransferPolicyParam } from './TransferPolicyParam';


export class SetTransferPolicyRequestBody {
    public policy?: Array<TransferPolicyParam>;
    public constructor() { 
    }
    public withPolicy(policy: Array<TransferPolicyParam>): SetTransferPolicyRequestBody {
        this['policy'] = policy;
        return this;
    }
}