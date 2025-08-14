

export class SecurityConfigDto {
    public ttl?: string;
    public constructor(ttl?: string) { 
        this['ttl'] = ttl;
    }
    public withTtl(ttl: string): SecurityConfigDto {
        this['ttl'] = ttl;
        return this;
    }
}