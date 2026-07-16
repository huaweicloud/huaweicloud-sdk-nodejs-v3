

export class PoolStatusScope {
    public scopeType?: string;
    public state?: string;
    public constructor(scopeType?: string, state?: string) { 
        this['scopeType'] = scopeType;
        this['state'] = state;
    }
    public withScopeType(scopeType: string): PoolStatusScope {
        this['scopeType'] = scopeType;
        return this;
    }
    public withState(state: string): PoolStatusScope {
        this['state'] = state;
        return this;
    }
}