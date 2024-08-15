

export class WarRoomTenantInfoImpactedApplication {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): WarRoomTenantInfoImpactedApplication {
        this['id'] = id;
        return this;
    }
    public withName(name: string): WarRoomTenantInfoImpactedApplication {
        this['name'] = name;
        return this;
    }
}