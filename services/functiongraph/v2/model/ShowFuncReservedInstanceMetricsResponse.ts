import { SlaReportsValue } from './SlaReportsValue';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFuncReservedInstanceMetricsResponse extends SdkResponse {
    public instanceNum?: Array<SlaReportsValue>;
    public reservedInstanceNum?: Array<SlaReportsValue>;
    public constructor() { 
        super();
    }
    public withInstanceNum(instanceNum: Array<SlaReportsValue>): ShowFuncReservedInstanceMetricsResponse {
        this['instanceNum'] = instanceNum;
        return this;
    }
    public withReservedInstanceNum(reservedInstanceNum: Array<SlaReportsValue>): ShowFuncReservedInstanceMetricsResponse {
        this['reservedInstanceNum'] = reservedInstanceNum;
        return this;
    }
}