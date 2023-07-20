

export class ShowResourcesDetailResponseBody {
    public type?: string;
    public mode?: string;
    public quota?: number;
    public used?: number;
    public constructor(type?: string, mode?: string, quota?: number, used?: number) { 
        this['type'] = type;
        this['mode'] = mode;
        this['quota'] = quota;
        this['used'] = used;
    }
    public withType(type: string): ShowResourcesDetailResponseBody {
        this['type'] = type;
        return this;
    }
    public withMode(mode: string): ShowResourcesDetailResponseBody {
        this['mode'] = mode;
        return this;
    }
    public withQuota(quota: number): ShowResourcesDetailResponseBody {
        this['quota'] = quota;
        return this;
    }
    public withUsed(used: number): ShowResourcesDetailResponseBody {
        this['used'] = used;
        return this;
    }
}