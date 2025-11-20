import { FindingPrincipal } from './FindingPrincipal';
import { PrivilegeEscalationStep } from './PrivilegeEscalationStep';


export class PrivilegeEscalationDetails {
    public actions?: Array<string>;
    public resource?: string;
    public principal?: FindingPrincipal;
    private 'active_action'?: string;
    public path?: Array<PrivilegeEscalationStep>;
    public constructor(actions?: Array<string>, resource?: string, principal?: FindingPrincipal, activeAction?: string, path?: Array<PrivilegeEscalationStep>) { 
        this['actions'] = actions;
        this['resource'] = resource;
        this['principal'] = principal;
        this['active_action'] = activeAction;
        this['path'] = path;
    }
    public withActions(actions: Array<string>): PrivilegeEscalationDetails {
        this['actions'] = actions;
        return this;
    }
    public withResource(resource: string): PrivilegeEscalationDetails {
        this['resource'] = resource;
        return this;
    }
    public withPrincipal(principal: FindingPrincipal): PrivilegeEscalationDetails {
        this['principal'] = principal;
        return this;
    }
    public withActiveAction(activeAction: string): PrivilegeEscalationDetails {
        this['active_action'] = activeAction;
        return this;
    }
    public set activeAction(activeAction: string  | undefined) {
        this['active_action'] = activeAction;
    }
    public get activeAction(): string | undefined {
        return this['active_action'];
    }
    public withPath(path: Array<PrivilegeEscalationStep>): PrivilegeEscalationDetails {
        this['path'] = path;
        return this;
    }
}