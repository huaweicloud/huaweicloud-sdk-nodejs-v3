

export class CreateGroupResp {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): CreateGroupResp {
        this['name'] = name;
        return this;
    }
}