import { ModifyBandwidthOption } from './ModifyBandwidthOption';


export class ModifyBandwidthRequestBody {
    public bandwidths?: Array<ModifyBandwidthOption>;
    public constructor(bandwidths?: Array<ModifyBandwidthOption>) { 
        this['bandwidths'] = bandwidths;
    }
    public withBandwidths(bandwidths: Array<ModifyBandwidthOption>): ModifyBandwidthRequestBody {
        this['bandwidths'] = bandwidths;
        return this;
    }
}