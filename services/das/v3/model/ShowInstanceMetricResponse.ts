import { DasMetricInfo } from './DasMetricInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceMetricResponse extends SdkResponse {
    private 'das_metric_infos'?: Array<DasMetricInfo>;
    public constructor() { 
        super();
    }
    public withDasMetricInfos(dasMetricInfos: Array<DasMetricInfo>): ShowInstanceMetricResponse {
        this['das_metric_infos'] = dasMetricInfos;
        return this;
    }
    public set dasMetricInfos(dasMetricInfos: Array<DasMetricInfo>  | undefined) {
        this['das_metric_infos'] = dasMetricInfos;
    }
    public get dasMetricInfos(): Array<DasMetricInfo> | undefined {
        return this['das_metric_infos'];
    }
}