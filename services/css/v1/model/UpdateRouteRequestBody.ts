

export class UpdateRouteRequestBody {
    public configtype?: string;
    public configkey?: string;
    public configvalue?: string;
    public constructor(configtype?: string, configkey?: string, configvalue?: string) { 
        this['configtype'] = configtype;
        this['configkey'] = configkey;
        this['configvalue'] = configvalue;
    }
    public withConfigtype(configtype: string): UpdateRouteRequestBody {
        this['configtype'] = configtype;
        return this;
    }
    public withConfigkey(configkey: string): UpdateRouteRequestBody {
        this['configkey'] = configkey;
        return this;
    }
    public withConfigvalue(configvalue: string): UpdateRouteRequestBody {
        this['configvalue'] = configvalue;
        return this;
    }
}