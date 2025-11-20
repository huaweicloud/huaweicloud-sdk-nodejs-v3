import { FindingPrincipal } from './FindingPrincipal';


export class PrivilegeEscalationStep {
    public principal?: FindingPrincipal;
    public resources?: Array<string>;
    public action?: string;
    public constructor(principal?: FindingPrincipal, resources?: Array<string>, action?: string) { 
        this['principal'] = principal;
        this['resources'] = resources;
        this['action'] = action;
    }
    public withPrincipal(principal: FindingPrincipal): PrivilegeEscalationStep {
        this['principal'] = principal;
        return this;
    }
    public withResources(resources: Array<string>): PrivilegeEscalationStep {
        this['resources'] = resources;
        return this;
    }
    public withAction(action: string): PrivilegeEscalationStep {
        this['action'] = action;
        return this;
    }
}