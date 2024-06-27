import { UserQos } from './UserQos';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNetworkQualityResponse extends SdkResponse {
    public returnCode?: number;
    public returnDesc?: string;
    public qosList?: Array<UserQos>;
    public constructor() { 
        super();
    }
    public withReturnCode(returnCode: number): ListNetworkQualityResponse {
        this['returnCode'] = returnCode;
        return this;
    }
    public withReturnDesc(returnDesc: string): ListNetworkQualityResponse {
        this['returnDesc'] = returnDesc;
        return this;
    }
    public withQosList(qosList: Array<UserQos>): ListNetworkQualityResponse {
        this['qosList'] = qosList;
        return this;
    }
}