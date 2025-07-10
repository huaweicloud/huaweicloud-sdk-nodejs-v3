
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteTenantTrustedIpAddressResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): DeleteTenantTrustedIpAddressResponse {
        this['status'] = status;
        return this;
    }
}