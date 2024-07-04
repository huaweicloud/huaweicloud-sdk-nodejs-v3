

export class UpdatePrimaryRegionRequestBody {
    private 'key_id'?: string;
    private 'primary_region'?: string;
    public constructor(keyId?: string, primaryRegion?: string) { 
        this['key_id'] = keyId;
        this['primary_region'] = primaryRegion;
    }
    public withKeyId(keyId: string): UpdatePrimaryRegionRequestBody {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withPrimaryRegion(primaryRegion: string): UpdatePrimaryRegionRequestBody {
        this['primary_region'] = primaryRegion;
        return this;
    }
    public set primaryRegion(primaryRegion: string  | undefined) {
        this['primary_region'] = primaryRegion;
    }
    public get primaryRegion(): string | undefined {
        return this['primary_region'];
    }
}