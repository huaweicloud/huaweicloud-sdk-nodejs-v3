

export class UpdatePublicZoneInfo {
    public description?: string;
    public email?: string;
    public ttl?: number;
    public constructor() { 
    }
    public withDescription(description: string): UpdatePublicZoneInfo {
        this['description'] = description;
        return this;
    }
    public withEmail(email: string): UpdatePublicZoneInfo {
        this['email'] = email;
        return this;
    }
    public withTtl(ttl: number): UpdatePublicZoneInfo {
        this['ttl'] = ttl;
        return this;
    }
}