import { ServiceSharedConfig } from './ServiceSharedConfig';
import { SubAccountControlConfig } from './SubAccountControlConfig';
import { TenantLogConfig } from './TenantLogConfig';


export class TenantServiceConfigsInfo {
    private 'service_shared_config'?: ServiceSharedConfig;
    private 'tenant_log_config'?: TenantLogConfig;
    private 'sub_account_control_config'?: SubAccountControlConfig;
    private 'is_ai_mark_on'?: boolean;
    public constructor() { 
    }
    public withServiceSharedConfig(serviceSharedConfig: ServiceSharedConfig): TenantServiceConfigsInfo {
        this['service_shared_config'] = serviceSharedConfig;
        return this;
    }
    public set serviceSharedConfig(serviceSharedConfig: ServiceSharedConfig  | undefined) {
        this['service_shared_config'] = serviceSharedConfig;
    }
    public get serviceSharedConfig(): ServiceSharedConfig | undefined {
        return this['service_shared_config'];
    }
    public withTenantLogConfig(tenantLogConfig: TenantLogConfig): TenantServiceConfigsInfo {
        this['tenant_log_config'] = tenantLogConfig;
        return this;
    }
    public set tenantLogConfig(tenantLogConfig: TenantLogConfig  | undefined) {
        this['tenant_log_config'] = tenantLogConfig;
    }
    public get tenantLogConfig(): TenantLogConfig | undefined {
        return this['tenant_log_config'];
    }
    public withSubAccountControlConfig(subAccountControlConfig: SubAccountControlConfig): TenantServiceConfigsInfo {
        this['sub_account_control_config'] = subAccountControlConfig;
        return this;
    }
    public set subAccountControlConfig(subAccountControlConfig: SubAccountControlConfig  | undefined) {
        this['sub_account_control_config'] = subAccountControlConfig;
    }
    public get subAccountControlConfig(): SubAccountControlConfig | undefined {
        return this['sub_account_control_config'];
    }
    public withIsAiMarkOn(isAiMarkOn: boolean): TenantServiceConfigsInfo {
        this['is_ai_mark_on'] = isAiMarkOn;
        return this;
    }
    public set isAiMarkOn(isAiMarkOn: boolean  | undefined) {
        this['is_ai_mark_on'] = isAiMarkOn;
    }
    public get isAiMarkOn(): boolean | undefined {
        return this['is_ai_mark_on'];
    }
}