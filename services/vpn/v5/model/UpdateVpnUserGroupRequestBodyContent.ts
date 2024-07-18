

export class UpdateVpnUserGroupRequestBodyContent {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateVpnUserGroupRequestBodyContent {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateVpnUserGroupRequestBodyContent {
        this['description'] = description;
        return this;
    }
}