import { CreatePrePaidPublicipExtendParamOption } from './CreatePrePaidPublicipExtendParamOption';


export class BwChangeToPeriodReq {
    private 'bandwidth_ids'?: Array<string>;
    public extendParam?: CreatePrePaidPublicipExtendParamOption;
    public constructor(bandwidthIds?: Array<string>, extendParam?: CreatePrePaidPublicipExtendParamOption) { 
        this['bandwidth_ids'] = bandwidthIds;
        this['extendParam'] = extendParam;
    }
    public withBandwidthIds(bandwidthIds: Array<string>): BwChangeToPeriodReq {
        this['bandwidth_ids'] = bandwidthIds;
        return this;
    }
    public set bandwidthIds(bandwidthIds: Array<string>  | undefined) {
        this['bandwidth_ids'] = bandwidthIds;
    }
    public get bandwidthIds(): Array<string> | undefined {
        return this['bandwidth_ids'];
    }
    public withExtendParam(extendParam: CreatePrePaidPublicipExtendParamOption): BwChangeToPeriodReq {
        this['extendParam'] = extendParam;
        return this;
    }
}