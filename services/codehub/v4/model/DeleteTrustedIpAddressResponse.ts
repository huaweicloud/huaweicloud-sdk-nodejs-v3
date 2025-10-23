
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteTrustedIpAddressResponse extends SdkResponse {
    public status?: DeleteTrustedIpAddressResponseStatusEnum | string;
    public constructor() { 
        super();
    }
    public withStatus(status: DeleteTrustedIpAddressResponseStatusEnum | string): DeleteTrustedIpAddressResponse {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteTrustedIpAddressResponseStatusEnum {
    SUCCESS = 'success',
    FAIL = 'fail'
}
