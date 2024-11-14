import { ObsDataRepositoryPolicy } from './ObsDataRepositoryPolicy';


export class UpdateObsTargetPolicyRequestBody {
    public policy?: ObsDataRepositoryPolicy;
    public constructor(policy?: ObsDataRepositoryPolicy) { 
        this['policy'] = policy;
    }
    public withPolicy(policy: ObsDataRepositoryPolicy): UpdateObsTargetPolicyRequestBody {
        this['policy'] = policy;
        return this;
    }
}