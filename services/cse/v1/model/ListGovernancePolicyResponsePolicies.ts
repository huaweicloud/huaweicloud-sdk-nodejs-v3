import { GovSelector } from './GovSelector';


export class ListGovernancePolicyResponsePolicies {
    public id?: string;
    public name?: string;
    public kind?: string;
    public status?: string;
    public selector?: GovSelector;
    public spec?: object;
    public constructor() { 
    }
    public withId(id: string): ListGovernancePolicyResponsePolicies {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListGovernancePolicyResponsePolicies {
        this['name'] = name;
        return this;
    }
    public withKind(kind: string): ListGovernancePolicyResponsePolicies {
        this['kind'] = kind;
        return this;
    }
    public withStatus(status: string): ListGovernancePolicyResponsePolicies {
        this['status'] = status;
        return this;
    }
    public withSelector(selector: GovSelector): ListGovernancePolicyResponsePolicies {
        this['selector'] = selector;
        return this;
    }
    public withSpec(spec: object): ListGovernancePolicyResponsePolicies {
        this['spec'] = spec;
        return this;
    }
}