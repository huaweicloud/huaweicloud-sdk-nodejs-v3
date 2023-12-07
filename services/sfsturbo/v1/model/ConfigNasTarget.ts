

export class ConfigNasTarget {
    public name?: string;
    public type?: string;
    public url?: string;
    public constructor(name?: string, type?: string, url?: string) { 
        this['name'] = name;
        this['type'] = type;
        this['url'] = url;
    }
    public withName(name: string): ConfigNasTarget {
        this['name'] = name;
        return this;
    }
    public withType(type: string): ConfigNasTarget {
        this['type'] = type;
        return this;
    }
    public withUrl(url: string): ConfigNasTarget {
        this['url'] = url;
        return this;
    }
}