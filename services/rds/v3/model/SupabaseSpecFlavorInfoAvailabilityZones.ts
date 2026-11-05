

export class SupabaseSpecFlavorInfoAvailabilityZones {
    public code?: string;
    public status?: string;
    public constructor() { 
    }
    public withCode(code: string): SupabaseSpecFlavorInfoAvailabilityZones {
        this['code'] = code;
        return this;
    }
    public withStatus(status: string): SupabaseSpecFlavorInfoAvailabilityZones {
        this['status'] = status;
        return this;
    }
}