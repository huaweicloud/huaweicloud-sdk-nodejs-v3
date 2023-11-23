import { GovSelector } from './GovSelector';


export class GovPolicyDetailPolicies {
    public id?: string;
    public name?: string;
    public kind?: string;
    public status?: string;
    public selector?: GovSelector;
    public spec?: object;
    public constructor() { 
    }
    public withId(id: string): GovPolicyDetailPolicies {
        this['id'] = id;
        return this;
    }
    public withName(name: string): GovPolicyDetailPolicies {
        this['name'] = name;
        return this;
    }
    public withKind(kind: string): GovPolicyDetailPolicies {
        this['kind'] = kind;
        return this;
    }
    public withStatus(status: string): GovPolicyDetailPolicies {
        this['status'] = status;
        return this;
    }
    public withSelector(selector: GovSelector): GovPolicyDetailPolicies {
        this['selector'] = selector;
        return this;
    }
    public withSpec(spec: object): GovPolicyDetailPolicies {
        this['spec'] = spec;
        return this;
    }
}