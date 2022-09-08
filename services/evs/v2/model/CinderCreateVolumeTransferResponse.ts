import { CreateVolumeTransferDetail } from './CreateVolumeTransferDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CinderCreateVolumeTransferResponse extends SdkResponse {
    public transfer?: CreateVolumeTransferDetail;
    public constructor() { 
        super();
    }
    public withTransfer(transfer: CreateVolumeTransferDetail): CinderCreateVolumeTransferResponse {
        this['transfer'] = transfer;
        return this;
    }
}