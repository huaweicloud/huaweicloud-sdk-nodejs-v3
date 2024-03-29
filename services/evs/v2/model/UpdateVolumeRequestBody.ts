import { UpdateVolumeOption } from './UpdateVolumeOption';


export class UpdateVolumeRequestBody {
    public volume?: UpdateVolumeOption;
    public constructor(volume?: UpdateVolumeOption) { 
        this['volume'] = volume;
    }
    public withVolume(volume: UpdateVolumeOption): UpdateVolumeRequestBody {
        this['volume'] = volume;
        return this;
    }
}