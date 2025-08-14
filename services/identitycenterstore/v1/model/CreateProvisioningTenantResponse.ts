
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateProvisioningTenantResponse extends SdkResponse {
    private 'creation_time'?: number;
    private 'scim_endpoint'?: string;
    private 'tenant_id'?: string;
    public constructor() { 
        super();
    }
    public withCreationTime(creationTime: number): CreateProvisioningTenantResponse {
        this['creation_time'] = creationTime;
        return this;
    }
    public set creationTime(creationTime: number  | undefined) {
        this['creation_time'] = creationTime;
    }
    public get creationTime(): number | undefined {
        return this['creation_time'];
    }
    public withScimEndpoint(scimEndpoint: string): CreateProvisioningTenantResponse {
        this['scim_endpoint'] = scimEndpoint;
        return this;
    }
    public set scimEndpoint(scimEndpoint: string  | undefined) {
        this['scim_endpoint'] = scimEndpoint;
    }
    public get scimEndpoint(): string | undefined {
        return this['scim_endpoint'];
    }
    public withTenantId(tenantId: string): CreateProvisioningTenantResponse {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
}