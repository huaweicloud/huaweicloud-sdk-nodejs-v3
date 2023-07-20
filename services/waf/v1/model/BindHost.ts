

export class BindHost {
    public id?: string;
    public hostname?: string;
    private 'waf_type'?: string;
    public mode?: string;
    public constructor() { 
    }
    public withId(id: string): BindHost {
        this['id'] = id;
        return this;
    }
    public withHostname(hostname: string): BindHost {
        this['hostname'] = hostname;
        return this;
    }
    public withWafType(wafType: string): BindHost {
        this['waf_type'] = wafType;
        return this;
    }
    public set wafType(wafType: string  | undefined) {
        this['waf_type'] = wafType;
    }
    public get wafType(): string | undefined {
        return this['waf_type'];
    }
    public withMode(mode: string): BindHost {
        this['mode'] = mode;
        return this;
    }
}