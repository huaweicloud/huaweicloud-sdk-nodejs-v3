import { CreateVolumeTransferOption } from './CreateVolumeTransferOption';


export class CinderCreateVolumeTransferRequestBody {
    public transfer: CreateVolumeTransferOption;
    public constructor(transfer?: any) { 
        this['transfer'] = transfer;
    }
    public withTransfer(transfer: CreateVolumeTransferOption): CinderCreateVolumeTransferRequestBody {
        this['transfer'] = transfer;
        return this;
    }
}