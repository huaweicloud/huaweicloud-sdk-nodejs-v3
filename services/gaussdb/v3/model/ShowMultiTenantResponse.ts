
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMultiTenantResponse extends SdkResponse {
    private 'multi_tenant_switch'?: boolean;
    public constructor() { 
        super();
    }
    public withMultiTenantSwitch(multiTenantSwitch: boolean): ShowMultiTenantResponse {
        this['multi_tenant_switch'] = multiTenantSwitch;
        return this;
    }
    public set multiTenantSwitch(multiTenantSwitch: boolean  | undefined) {
        this['multi_tenant_switch'] = multiTenantSwitch;
    }
    public get multiTenantSwitch(): boolean | undefined {
        return this['multi_tenant_switch'];
    }
}