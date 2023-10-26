

export class ConfigObsTarget {
    public name?: string;
    public type?: string;
    public url?: string;
    public bucket?: string;
    public constructor(name?: string, type?: string, url?: string, bucket?: string) { 
        this['name'] = name;
        this['type'] = type;
        this['url'] = url;
        this['bucket'] = bucket;
    }
    public withName(name: string): ConfigObsTarget {
        this['name'] = name;
        return this;
    }
    public withType(type: string): ConfigObsTarget {
        this['type'] = type;
        return this;
    }
    public withUrl(url: string): ConfigObsTarget {
        this['url'] = url;
        return this;
    }
    public withBucket(bucket: string): ConfigObsTarget {
        this['bucket'] = bucket;
        return this;
    }
}