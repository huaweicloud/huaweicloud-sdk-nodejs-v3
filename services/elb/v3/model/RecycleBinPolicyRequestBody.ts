import { RecycleBinPolicy } from './RecycleBinPolicy';


export class RecycleBinPolicyRequestBody {
    public policy?: RecycleBinPolicy;
    public constructor() { 
    }
    public withPolicy(policy: RecycleBinPolicy): RecycleBinPolicyRequestBody {
        this['policy'] = policy;
        return this;
    }
}