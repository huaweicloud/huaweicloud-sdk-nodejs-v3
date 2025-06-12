import { PrepaidParamForBatchResizeVolume } from './PrepaidParamForBatchResizeVolume';
import { VolumesForBatchResizeVolume } from './VolumesForBatchResizeVolume';


export class BatchResizeVolumeRequestBody {
    public volumes?: Array<VolumesForBatchResizeVolume>;
    private 'bss_param'?: PrepaidParamForBatchResizeVolume;
    public constructor(volumes?: Array<VolumesForBatchResizeVolume>) { 
        this['volumes'] = volumes;
    }
    public withVolumes(volumes: Array<VolumesForBatchResizeVolume>): BatchResizeVolumeRequestBody {
        this['volumes'] = volumes;
        return this;
    }
    public withBssParam(bssParam: PrepaidParamForBatchResizeVolume): BatchResizeVolumeRequestBody {
        this['bss_param'] = bssParam;
        return this;
    }
    public set bssParam(bssParam: PrepaidParamForBatchResizeVolume  | undefined) {
        this['bss_param'] = bssParam;
    }
    public get bssParam(): PrepaidParamForBatchResizeVolume | undefined {
        return this['bss_param'];
    }
}