

export class AssetModelResp {
    public id?: string;
    public name?: string;
    public code?: string;
    public version?: string;
    public location?: string;
    public desc?: string;
    public series?: string;
    public type?: string;
    public constructor(name?: string, version?: string, type?: string) { 
        this['name'] = name;
        this['version'] = version;
        this['type'] = type;
    }
    public withId(id: string): AssetModelResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AssetModelResp {
        this['name'] = name;
        return this;
    }
    public withCode(code: string): AssetModelResp {
        this['code'] = code;
        return this;
    }
    public withVersion(version: string): AssetModelResp {
        this['version'] = version;
        return this;
    }
    public withLocation(location: string): AssetModelResp {
        this['location'] = location;
        return this;
    }
    public withDesc(desc: string): AssetModelResp {
        this['desc'] = desc;
        return this;
    }
    public withSeries(series: string): AssetModelResp {
        this['series'] = series;
        return this;
    }
    public withType(type: string): AssetModelResp {
        this['type'] = type;
        return this;
    }
}