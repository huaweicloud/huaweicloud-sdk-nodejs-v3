

export class CreateVpnUserGroupRequestBodyContent {
    public name?: string;
    public description?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateVpnUserGroupRequestBodyContent {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateVpnUserGroupRequestBodyContent {
        this['description'] = description;
        return this;
    }
}