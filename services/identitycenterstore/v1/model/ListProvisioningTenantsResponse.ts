import { ProvisioningTenant } from './ProvisioningTenant';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProvisioningTenantsResponse extends SdkResponse {
    private 'provisioning_tenants'?: Array<ProvisioningTenant>;
    public constructor() { 
        super();
    }
    public withProvisioningTenants(provisioningTenants: Array<ProvisioningTenant>): ListProvisioningTenantsResponse {
        this['provisioning_tenants'] = provisioningTenants;
        return this;
    }
    public set provisioningTenants(provisioningTenants: Array<ProvisioningTenant>  | undefined) {
        this['provisioning_tenants'] = provisioningTenants;
    }
    public get provisioningTenants(): Array<ProvisioningTenant> | undefined {
        return this['provisioning_tenants'];
    }
}