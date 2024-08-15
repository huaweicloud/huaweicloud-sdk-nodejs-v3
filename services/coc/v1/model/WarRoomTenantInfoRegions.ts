

export class WarRoomTenantInfoRegions {
    public code?: string;
    public name?: string;
    public constructor() { 
    }
    public withCode(code: string): WarRoomTenantInfoRegions {
        this['code'] = code;
        return this;
    }
    public withName(name: string): WarRoomTenantInfoRegions {
        this['name'] = name;
        return this;
    }
}