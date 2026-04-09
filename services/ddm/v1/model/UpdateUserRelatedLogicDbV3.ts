

export class UpdateUserRelatedLogicDbV3 {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): UpdateUserRelatedLogicDbV3 {
        this['name'] = name;
        return this;
    }
}