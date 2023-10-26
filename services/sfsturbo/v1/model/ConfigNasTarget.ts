

export class ConfigNasTarget {
    public name?: string;
    public type?: object;
    public url?: object;
    public constructor(name?: string, type?: object, url?: object) { 
        this['name'] = name;
        this['type'] = type;
        this['url'] = url;
    }
    public withName(name: string): ConfigNasTarget {
        this['name'] = name;
        return this;
    }
    public withType(type: object): ConfigNasTarget {
        this['type'] = type;
        return this;
    }
    public withUrl(url: object): ConfigNasTarget {
        this['url'] = url;
        return this;
    }
}