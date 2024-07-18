

export class VpnUserInGroup {
    public id?: string;
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withId(id: string): VpnUserInGroup {
        this['id'] = id;
        return this;
    }
    public withName(name: string): VpnUserInGroup {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): VpnUserInGroup {
        this['description'] = description;
        return this;
    }
}