

export class CreateUserRelatedLogicDbV3 {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateUserRelatedLogicDbV3 {
        this['name'] = name;
        return this;
    }
}