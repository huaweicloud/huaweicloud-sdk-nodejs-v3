

export class CreateVhostBody {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateVhostBody {
        this['name'] = name;
        return this;
    }
}