
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTenantKmsGrantResponse extends SdkResponse {
    private 'tenant_id'?: string;
    public assumed?: boolean;
    public constructor() { 
        super();
    }
    public withTenantId(tenantId: string): ShowTenantKmsGrantResponse {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withAssumed(assumed: boolean): ShowTenantKmsGrantResponse {
        this['assumed'] = assumed;
        return this;
    }
}