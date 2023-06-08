

export class UpdatePrivateZoneInfoReq {
    public description?: string;
    public email?: string;
    public ttl?: number;
    public constructor() { 
    }
    public withDescription(description: string): UpdatePrivateZoneInfoReq {
        this['description'] = description;
        return this;
    }
    public withEmail(email: string): UpdatePrivateZoneInfoReq {
        this['email'] = email;
        return this;
    }
    public withTtl(ttl: number): UpdatePrivateZoneInfoReq {
        this['ttl'] = ttl;
        return this;
    }
}