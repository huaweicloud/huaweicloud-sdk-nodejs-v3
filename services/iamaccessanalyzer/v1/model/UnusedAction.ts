

export class UnusedAction {
    public action?: string;
    private 'last_accessed'?: Date;
    private 'role_sources'?: Array<string>;
    private 'identity_policy_sources'?: Array<string>;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: string): UnusedAction {
        this['action'] = action;
        return this;
    }
    public withLastAccessed(lastAccessed: Date): UnusedAction {
        this['last_accessed'] = lastAccessed;
        return this;
    }
    public set lastAccessed(lastAccessed: Date  | undefined) {
        this['last_accessed'] = lastAccessed;
    }
    public get lastAccessed(): Date | undefined {
        return this['last_accessed'];
    }
    public withRoleSources(roleSources: Array<string>): UnusedAction {
        this['role_sources'] = roleSources;
        return this;
    }
    public set roleSources(roleSources: Array<string>  | undefined) {
        this['role_sources'] = roleSources;
    }
    public get roleSources(): Array<string> | undefined {
        return this['role_sources'];
    }
    public withIdentityPolicySources(identityPolicySources: Array<string>): UnusedAction {
        this['identity_policy_sources'] = identityPolicySources;
        return this;
    }
    public set identityPolicySources(identityPolicySources: Array<string>  | undefined) {
        this['identity_policy_sources'] = identityPolicySources;
    }
    public get identityPolicySources(): Array<string> | undefined {
        return this['identity_policy_sources'];
    }
}