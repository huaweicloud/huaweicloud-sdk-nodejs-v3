import { UpdateRecycleBinPolicyOption } from './UpdateRecycleBinPolicyOption';


export class UpdateRecycleBinPolicyReq {
    public policy?: UpdateRecycleBinPolicyOption;
    public constructor(policy?: UpdateRecycleBinPolicyOption) { 
        this['policy'] = policy;
    }
    public withPolicy(policy: UpdateRecycleBinPolicyOption): UpdateRecycleBinPolicyReq {
        this['policy'] = policy;
        return this;
    }
}