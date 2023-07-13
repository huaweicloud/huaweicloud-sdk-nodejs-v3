
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBandwidthCalcResponse extends SdkResponse {
    private 'bandwidth_calc'?: { [key: string]: object; } | undefined;
    public constructor() { 
        super();
    }
    public withBandwidthCalc(bandwidthCalc: { [key: string]: object; }): ShowBandwidthCalcResponse {
        this['bandwidth_calc'] = bandwidthCalc;
        return this;
    }
    public set bandwidthCalc(bandwidthCalc: { [key: string]: object; } | undefined) {
        this['bandwidth_calc'] = bandwidthCalc;
    }
    public get bandwidthCalc() {
        return this['bandwidth_calc'];
    }
}