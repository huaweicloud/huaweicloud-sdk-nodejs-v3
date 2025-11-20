import { ServiceSharedConfig } from './ServiceSharedConfig';
import { SubAccountControlConfig } from './SubAccountControlConfig';
import { TenantLogConfig } from './TenantLogConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTenantServiceConfigsResponse extends SdkResponse {
    private 'service_shared_config'?: ServiceSharedConfig;
    private 'tenant_log_config'?: TenantLogConfig;
    private 'sub_account_control_config'?: SubAccountControlConfig;
    private 'is_ai_mark_on'?: boolean;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withServiceSharedConfig(serviceSharedConfig: ServiceSharedConfig): ShowTenantServiceConfigsResponse {
        this['service_shared_config'] = serviceSharedConfig;
        return this;
    }
    public set serviceSharedConfig(serviceSharedConfig: ServiceSharedConfig  | undefined) {
        this['service_shared_config'] = serviceSharedConfig;
    }
    public get serviceSharedConfig(): ServiceSharedConfig | undefined {
        return this['service_shared_config'];
    }
    public withTenantLogConfig(tenantLogConfig: TenantLogConfig): ShowTenantServiceConfigsResponse {
        this['tenant_log_config'] = tenantLogConfig;
        return this;
    }
    public set tenantLogConfig(tenantLogConfig: TenantLogConfig  | undefined) {
        this['tenant_log_config'] = tenantLogConfig;
    }
    public get tenantLogConfig(): TenantLogConfig | undefined {
        return this['tenant_log_config'];
    }
    public withSubAccountControlConfig(subAccountControlConfig: SubAccountControlConfig): ShowTenantServiceConfigsResponse {
        this['sub_account_control_config'] = subAccountControlConfig;
        return this;
    }
    public set subAccountControlConfig(subAccountControlConfig: SubAccountControlConfig  | undefined) {
        this['sub_account_control_config'] = subAccountControlConfig;
    }
    public get subAccountControlConfig(): SubAccountControlConfig | undefined {
        return this['sub_account_control_config'];
    }
    public withIsAiMarkOn(isAiMarkOn: boolean): ShowTenantServiceConfigsResponse {
        this['is_ai_mark_on'] = isAiMarkOn;
        return this;
    }
    public set isAiMarkOn(isAiMarkOn: boolean  | undefined) {
        this['is_ai_mark_on'] = isAiMarkOn;
    }
    public get isAiMarkOn(): boolean | undefined {
        return this['is_ai_mark_on'];
    }
    public withXRequestId(xRequestId: string): ShowTenantServiceConfigsResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}