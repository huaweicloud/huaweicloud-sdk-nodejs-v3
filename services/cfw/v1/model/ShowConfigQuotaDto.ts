import { ItemInfo } from './ItemInfo';


export class ShowConfigQuotaDto {
    private 'item_info'?: ItemInfo;
    private 'max_quota'?: number;
    private 'quota_type'?: string;
    private 'used_quota'?: number;
    public constructor() { 
    }
    public withItemInfo(itemInfo: ItemInfo): ShowConfigQuotaDto {
        this['item_info'] = itemInfo;
        return this;
    }
    public set itemInfo(itemInfo: ItemInfo  | undefined) {
        this['item_info'] = itemInfo;
    }
    public get itemInfo(): ItemInfo | undefined {
        return this['item_info'];
    }
    public withMaxQuota(maxQuota: number): ShowConfigQuotaDto {
        this['max_quota'] = maxQuota;
        return this;
    }
    public set maxQuota(maxQuota: number  | undefined) {
        this['max_quota'] = maxQuota;
    }
    public get maxQuota(): number | undefined {
        return this['max_quota'];
    }
    public withQuotaType(quotaType: string): ShowConfigQuotaDto {
        this['quota_type'] = quotaType;
        return this;
    }
    public set quotaType(quotaType: string  | undefined) {
        this['quota_type'] = quotaType;
    }
    public get quotaType(): string | undefined {
        return this['quota_type'];
    }
    public withUsedQuota(usedQuota: number): ShowConfigQuotaDto {
        this['used_quota'] = usedQuota;
        return this;
    }
    public set usedQuota(usedQuota: number  | undefined) {
        this['used_quota'] = usedQuota;
    }
    public get usedQuota(): number | undefined {
        return this['used_quota'];
    }
}