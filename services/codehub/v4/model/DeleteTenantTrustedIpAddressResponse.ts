
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteTenantTrustedIpAddressResponse extends SdkResponse {
    public status?: DeleteTenantTrustedIpAddressResponseStatusEnum | string;
    public constructor() { 
        super();
    }
    public withStatus(status: DeleteTenantTrustedIpAddressResponseStatusEnum | string): DeleteTenantTrustedIpAddressResponse {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteTenantTrustedIpAddressResponseStatusEnum {
    SUCCESS = 'success',
    FAIL = 'fail'
}
