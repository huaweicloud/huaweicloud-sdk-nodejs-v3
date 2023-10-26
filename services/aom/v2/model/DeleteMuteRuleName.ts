

export class DeleteMuteRuleName {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): DeleteMuteRuleName {
        this['name'] = name;
        return this;
    }
}