

export class WiseEye {
    public enable?: string;
    public level?: string;
    private 'region_key'?: string;
    private 'scope_id'?: string;
    private 'scope_name'?: string;
    public constructor() { 
    }
    public withEnable(enable: string): WiseEye {
        this['enable'] = enable;
        return this;
    }
    public withLevel(level: string): WiseEye {
        this['level'] = level;
        return this;
    }
    public withRegionKey(regionKey: string): WiseEye {
        this['region_key'] = regionKey;
        return this;
    }
    public set regionKey(regionKey: string  | undefined) {
        this['region_key'] = regionKey;
    }
    public get regionKey(): string | undefined {
        return this['region_key'];
    }
    public withScopeId(scopeId: string): WiseEye {
        this['scope_id'] = scopeId;
        return this;
    }
    public set scopeId(scopeId: string  | undefined) {
        this['scope_id'] = scopeId;
    }
    public get scopeId(): string | undefined {
        return this['scope_id'];
    }
    public withScopeName(scopeName: string): WiseEye {
        this['scope_name'] = scopeName;
        return this;
    }
    public set scopeName(scopeName: string  | undefined) {
        this['scope_name'] = scopeName;
    }
    public get scopeName(): string | undefined {
        return this['scope_name'];
    }
}