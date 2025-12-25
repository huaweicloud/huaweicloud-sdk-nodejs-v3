
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCloudLogTenantWhitelistResponse extends SdkResponse {
    private 'domain_id'?: string;
    private 'dw_region'?: string;
    public enable?: boolean;
    private 'project_id'?: string;
    public constructor() { 
        super();
    }
    public withDomainId(domainId: string): ShowCloudLogTenantWhitelistResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withDwRegion(dwRegion: string): ShowCloudLogTenantWhitelistResponse {
        this['dw_region'] = dwRegion;
        return this;
    }
    public set dwRegion(dwRegion: string  | undefined) {
        this['dw_region'] = dwRegion;
    }
    public get dwRegion(): string | undefined {
        return this['dw_region'];
    }
    public withEnable(enable: boolean): ShowCloudLogTenantWhitelistResponse {
        this['enable'] = enable;
        return this;
    }
    public withProjectId(projectId: string): ShowCloudLogTenantWhitelistResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}