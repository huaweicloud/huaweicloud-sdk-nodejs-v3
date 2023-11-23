import { CreateBussinessScene } from './CreateBussinessScene';
import { GovPolicyDetailPolicies } from './GovPolicyDetailPolicies';


export class GovPolicyDetail {
    public matchGroup?: CreateBussinessScene;
    public policies?: Array<GovPolicyDetailPolicies>;
    public constructor() { 
    }
    public withMatchGroup(matchGroup: CreateBussinessScene): GovPolicyDetail {
        this['matchGroup'] = matchGroup;
        return this;
    }
    public withPolicies(policies: Array<GovPolicyDetailPolicies>): GovPolicyDetail {
        this['policies'] = policies;
        return this;
    }
}