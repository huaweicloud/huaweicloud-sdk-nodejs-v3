

export class ShareName {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): ShareName {
        this['name'] = name;
        return this;
    }
}