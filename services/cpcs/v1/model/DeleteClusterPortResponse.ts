
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteClusterPortResponse extends SdkResponse {
    private 'delete_tenant_resource'?: string;
    public constructor() { 
        super();
    }
    public withDeleteTenantResource(deleteTenantResource: string): DeleteClusterPortResponse {
        this['delete_tenant_resource'] = deleteTenantResource;
        return this;
    }
    public set deleteTenantResource(deleteTenantResource: string  | undefined) {
        this['delete_tenant_resource'] = deleteTenantResource;
    }
    public get deleteTenantResource(): string | undefined {
        return this['delete_tenant_resource'];
    }
}