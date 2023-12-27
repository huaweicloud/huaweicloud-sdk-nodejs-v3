

export class ShowMavenInfoRequest {
    public policy?: string;
    public access?: string;
    private 'default'?: string;
    public ids?: string;
    public constructor() { 
    }
    public withPolicy(policy: string): ShowMavenInfoRequest {
        this['policy'] = policy;
        return this;
    }
    public withAccess(access: string): ShowMavenInfoRequest {
        this['access'] = access;
        return this;
    }
    public withDefault(_default: string): ShowMavenInfoRequest {
        this['default'] = _default;
        return this;
    }
    public set _default(_default: string  | undefined) {
        this['default'] = _default;
    }
    public get _default(): string | undefined {
        return this['default'];
    }
    public withIds(ids: string): ShowMavenInfoRequest {
        this['ids'] = ids;
        return this;
    }
}