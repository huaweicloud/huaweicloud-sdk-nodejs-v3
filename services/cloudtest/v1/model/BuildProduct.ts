

export class BuildProduct {
    public name?: string;
    public url?: string;
    public constructor() { 
    }
    public withName(name: string): BuildProduct {
        this['name'] = name;
        return this;
    }
    public withUrl(url: string): BuildProduct {
        this['url'] = url;
        return this;
    }
}