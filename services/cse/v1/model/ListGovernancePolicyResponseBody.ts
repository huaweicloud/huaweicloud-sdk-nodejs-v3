import { CreateBussinessScene } from './CreateBussinessScene';
import { ListGovernancePolicyResponsePolicies } from './ListGovernancePolicyResponsePolicies';


export class ListGovernancePolicyResponseBody {
    public matchGroup?: CreateBussinessScene;
    public policies?: Array<ListGovernancePolicyResponsePolicies>;
    public constructor() { 
    }
    public withMatchGroup(matchGroup: CreateBussinessScene): ListGovernancePolicyResponseBody {
        this['matchGroup'] = matchGroup;
        return this;
    }
    public withPolicies(policies: Array<ListGovernancePolicyResponsePolicies>): ListGovernancePolicyResponseBody {
        this['policies'] = policies;
        return this;
    }
}