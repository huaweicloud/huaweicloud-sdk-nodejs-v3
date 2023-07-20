

export class DetailsBody {
    private 'old_capacity'?: string;
    private 'new_capacity'?: string;
    private 'enable_public_ip'?: boolean;
    private 'public_ip_id'?: string;
    private 'public_ip_address'?: string;
    private 'enable_ssl'?: boolean;
    private 'old_cache_mode'?: string;
    private 'new_cache_mode'?: string;
    public constructor() { 
    }
    public withOldCapacity(oldCapacity: string): DetailsBody {
        this['old_capacity'] = oldCapacity;
        return this;
    }
    public set oldCapacity(oldCapacity: string  | undefined) {
        this['old_capacity'] = oldCapacity;
    }
    public get oldCapacity(): string | undefined {
        return this['old_capacity'];
    }
    public withNewCapacity(newCapacity: string): DetailsBody {
        this['new_capacity'] = newCapacity;
        return this;
    }
    public set newCapacity(newCapacity: string  | undefined) {
        this['new_capacity'] = newCapacity;
    }
    public get newCapacity(): string | undefined {
        return this['new_capacity'];
    }
    public withEnablePublicIp(enablePublicIp: boolean): DetailsBody {
        this['enable_public_ip'] = enablePublicIp;
        return this;
    }
    public set enablePublicIp(enablePublicIp: boolean  | undefined) {
        this['enable_public_ip'] = enablePublicIp;
    }
    public get enablePublicIp(): boolean | undefined {
        return this['enable_public_ip'];
    }
    public withPublicIpId(publicIpId: string): DetailsBody {
        this['public_ip_id'] = publicIpId;
        return this;
    }
    public set publicIpId(publicIpId: string  | undefined) {
        this['public_ip_id'] = publicIpId;
    }
    public get publicIpId(): string | undefined {
        return this['public_ip_id'];
    }
    public withPublicIpAddress(publicIpAddress: string): DetailsBody {
        this['public_ip_address'] = publicIpAddress;
        return this;
    }
    public set publicIpAddress(publicIpAddress: string  | undefined) {
        this['public_ip_address'] = publicIpAddress;
    }
    public get publicIpAddress(): string | undefined {
        return this['public_ip_address'];
    }
    public withEnableSsl(enableSsl: boolean): DetailsBody {
        this['enable_ssl'] = enableSsl;
        return this;
    }
    public set enableSsl(enableSsl: boolean  | undefined) {
        this['enable_ssl'] = enableSsl;
    }
    public get enableSsl(): boolean | undefined {
        return this['enable_ssl'];
    }
    public withOldCacheMode(oldCacheMode: string): DetailsBody {
        this['old_cache_mode'] = oldCacheMode;
        return this;
    }
    public set oldCacheMode(oldCacheMode: string  | undefined) {
        this['old_cache_mode'] = oldCacheMode;
    }
    public get oldCacheMode(): string | undefined {
        return this['old_cache_mode'];
    }
    public withNewCacheMode(newCacheMode: string): DetailsBody {
        this['new_cache_mode'] = newCacheMode;
        return this;
    }
    public set newCacheMode(newCacheMode: string  | undefined) {
        this['new_cache_mode'] = newCacheMode;
    }
    public get newCacheMode(): string | undefined {
        return this['new_cache_mode'];
    }
}