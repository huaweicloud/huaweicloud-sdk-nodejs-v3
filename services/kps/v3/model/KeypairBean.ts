

export class KeypairBean {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): KeypairBean {
        this['name'] = name;
        return this;
    }
}