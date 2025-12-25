
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPlatformManagedResponse extends SdkResponse {
    private 'create_time'?: number;
    private 'dw_region'?: string;
    private 'platform_managed_domain_id'?: string;
    private 'publish_status'?: ShowPlatformManagedResponsePublishStatusEnum | string;
    private 'tenant_managed_domain_id'?: string;
    private 'update_time'?: number;
    public whitelist?: boolean;
    public constructor() { 
        super();
    }
    public withCreateTime(createTime: number): ShowPlatformManagedResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withDwRegion(dwRegion: string): ShowPlatformManagedResponse {
        this['dw_region'] = dwRegion;
        return this;
    }
    public set dwRegion(dwRegion: string  | undefined) {
        this['dw_region'] = dwRegion;
    }
    public get dwRegion(): string | undefined {
        return this['dw_region'];
    }
    public withPlatformManagedDomainId(platformManagedDomainId: string): ShowPlatformManagedResponse {
        this['platform_managed_domain_id'] = platformManagedDomainId;
        return this;
    }
    public set platformManagedDomainId(platformManagedDomainId: string  | undefined) {
        this['platform_managed_domain_id'] = platformManagedDomainId;
    }
    public get platformManagedDomainId(): string | undefined {
        return this['platform_managed_domain_id'];
    }
    public withPublishStatus(publishStatus: ShowPlatformManagedResponsePublishStatusEnum | string): ShowPlatformManagedResponse {
        this['publish_status'] = publishStatus;
        return this;
    }
    public set publishStatus(publishStatus: ShowPlatformManagedResponsePublishStatusEnum | string  | undefined) {
        this['publish_status'] = publishStatus;
    }
    public get publishStatus(): ShowPlatformManagedResponsePublishStatusEnum | string | undefined {
        return this['publish_status'];
    }
    public withTenantManagedDomainId(tenantManagedDomainId: string): ShowPlatformManagedResponse {
        this['tenant_managed_domain_id'] = tenantManagedDomainId;
        return this;
    }
    public set tenantManagedDomainId(tenantManagedDomainId: string  | undefined) {
        this['tenant_managed_domain_id'] = tenantManagedDomainId;
    }
    public get tenantManagedDomainId(): string | undefined {
        return this['tenant_managed_domain_id'];
    }
    public withUpdateTime(updateTime: number): ShowPlatformManagedResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withWhitelist(whitelist: boolean): ShowPlatformManagedResponse {
        this['whitelist'] = whitelist;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowPlatformManagedResponsePublishStatusEnum {
    DISABLE = 'DISABLE',
    PROD = 'PROD',
    GRAY = 'GRAY'
}
