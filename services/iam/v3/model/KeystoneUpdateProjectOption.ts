

export class KeystoneUpdateProjectOption {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): KeystoneUpdateProjectOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): KeystoneUpdateProjectOption {
        this['description'] = description;
        return this;
    }
}