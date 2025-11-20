import { ServiceSharedConfig } from './ServiceSharedConfig';
import { SubAccountControlConfig } from './SubAccountControlConfig';
import { TenantLogConfig } from './TenantLogConfig';
import { TenantServiceConfigsInfo } from './TenantServiceConfigsInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateTenantServiceConfigsResponse extends SdkResponse {
    private 'service_shared_config'?: ServiceSharedConfig;
    private 'tenant_log_config'?: TenantLogConfig;
    private 'sub_account_control_config'?: SubAccountControlConfig;
    private 'is_ai_mark_on'?: boolean;
    private 'tenant_id'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withServiceSharedConfig(serviceSharedConfig: ServiceSharedConfig): UpdateTenantServiceConfigsResponse {
        this['service_shared_config'] = serviceSharedConfig;
        return this;
    }
    public set serviceSharedConfig(serviceSharedConfig: ServiceSharedConfig  | undefined) {
        this['service_shared_config'] = serviceSharedConfig;
    }
    public get serviceSharedConfig(): ServiceSharedConfig | undefined {
        return this['service_shared_config'];
    }
    public withTenantLogConfig(tenantLogConfig: TenantLogConfig): UpdateTenantServiceConfigsResponse {
        this['tenant_log_config'] = tenantLogConfig;
        return this;
    }
    public set tenantLogConfig(tenantLogConfig: TenantLogConfig  | undefined) {
        this['tenant_log_config'] = tenantLogConfig;
    }
    public get tenantLogConfig(): TenantLogConfig | undefined {
        return this['tenant_log_config'];
    }
    public withSubAccountControlConfig(subAccountControlConfig: SubAccountControlConfig): UpdateTenantServiceConfigsResponse {
        this['sub_account_control_config'] = subAccountControlConfig;
        return this;
    }
    public set subAccountControlConfig(subAccountControlConfig: SubAccountControlConfig  | undefined) {
        this['sub_account_control_config'] = subAccountControlConfig;
    }
    public get subAccountControlConfig(): SubAccountControlConfig | undefined {
        return this['sub_account_control_config'];
    }
    public withIsAiMarkOn(isAiMarkOn: boolean): UpdateTenantServiceConfigsResponse {
        this['is_ai_mark_on'] = isAiMarkOn;
        return this;
    }
    public set isAiMarkOn(isAiMarkOn: boolean  | undefined) {
        this['is_ai_mark_on'] = isAiMarkOn;
    }
    public get isAiMarkOn(): boolean | undefined {
        return this['is_ai_mark_on'];
    }
    public withTenantId(tenantId: string): UpdateTenantServiceConfigsResponse {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withXRequestId(xRequestId: string): UpdateTenantServiceConfigsResponse {
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