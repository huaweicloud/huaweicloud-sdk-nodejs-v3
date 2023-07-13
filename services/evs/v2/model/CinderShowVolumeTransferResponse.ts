import { VolumeTransfer } from './VolumeTransfer';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CinderShowVolumeTransferResponse extends SdkResponse {
    public transfer?: VolumeTransfer;
    public constructor() { 
        super();
    }
    public withTransfer(transfer: VolumeTransfer): CinderShowVolumeTransferResponse {
        this['transfer'] = transfer;
        return this;
    }
}