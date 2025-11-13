import { AttachmentUploadingAddress } from './AttachmentUploadingAddress';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUserReviewAttachmentUploadingAddressResponse extends SdkResponse {
    public addresses?: Array<AttachmentUploadingAddress>;
    public constructor() { 
        super();
    }
    public withAddresses(addresses: Array<AttachmentUploadingAddress>): ShowUserReviewAttachmentUploadingAddressResponse {
        this['addresses'] = addresses;
        return this;
    }
}