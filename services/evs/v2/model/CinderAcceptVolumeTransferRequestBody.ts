import { CinderAcceptVolumeTransferOption } from './CinderAcceptVolumeTransferOption';


export class CinderAcceptVolumeTransferRequestBody {
    public accept?: CinderAcceptVolumeTransferOption;
    public constructor(accept?: CinderAcceptVolumeTransferOption) { 
        this['accept'] = accept;
    }
    public withAccept(accept: CinderAcceptVolumeTransferOption): CinderAcceptVolumeTransferRequestBody {
        this['accept'] = accept;
        return this;
    }
}