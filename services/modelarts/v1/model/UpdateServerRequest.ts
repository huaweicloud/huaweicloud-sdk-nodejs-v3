

export class UpdateServerRequest {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): UpdateServerRequest {
        this['name'] = name;
        return this;
    }
}