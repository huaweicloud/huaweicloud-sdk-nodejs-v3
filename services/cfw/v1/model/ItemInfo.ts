

export class ItemInfo {
    private 'max_quota'?: number;
    private 'used_quota'?: number;
    private 'extras_info'?: { [key: string]: string; };
    public constructor() { 
    }
    public withMaxQuota(maxQuota: number): ItemInfo {
        this['max_quota'] = maxQuota;
        return this;
    }
    public set maxQuota(maxQuota: number  | undefined) {
        this['max_quota'] = maxQuota;
    }
    public get maxQuota(): number | undefined {
        return this['max_quota'];
    }
    public withUsedQuota(usedQuota: number): ItemInfo {
        this['used_quota'] = usedQuota;
        return this;
    }
    public set usedQuota(usedQuota: number  | undefined) {
        this['used_quota'] = usedQuota;
    }
    public get usedQuota(): number | undefined {
        return this['used_quota'];
    }
    public withExtrasInfo(extrasInfo: { [key: string]: string; }): ItemInfo {
        this['extras_info'] = extrasInfo;
        return this;
    }
    public set extrasInfo(extrasInfo: { [key: string]: string; }  | undefined) {
        this['extras_info'] = extrasInfo;
    }
    public get extrasInfo(): { [key: string]: string; } | undefined {
        return this['extras_info'];
    }
}