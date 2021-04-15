import { UpdatePrePaidBandwidthExtendParamOption } from './UpdatePrePaidBandwidthExtendParamOption';
import { UpdatePrePaidBandwidthOption } from './UpdatePrePaidBandwidthOption';


export class UpdatePrePaidBandwidthRequestBody {
    public bandwidth: UpdatePrePaidBandwidthOption;
    public extendParam?: UpdatePrePaidBandwidthExtendParamOption;
    public constructor(bandwidth?: any) { 
        this['bandwidth'] = bandwidth;
    }
    public withBandwidth(bandwidth: UpdatePrePaidBandwidthOption): UpdatePrePaidBandwidthRequestBody {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withExtendParam(extendParam: UpdatePrePaidBandwidthExtendParamOption): UpdatePrePaidBandwidthRequestBody {
        this['extendParam'] = extendParam;
        return this;
    }
}