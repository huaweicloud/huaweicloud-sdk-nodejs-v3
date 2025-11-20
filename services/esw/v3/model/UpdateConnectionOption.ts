

export class UpdateConnectionOption {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): UpdateConnectionOption {
        this['name'] = name;
        return this;
    }
}