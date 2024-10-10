import { ParamGroupParameterDifferences } from './ParamGroupParameterDifferences';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckStarrocksParamsResponse extends SdkResponse {
    public differences?: Array<ParamGroupParameterDifferences>;
    public constructor() { 
        super();
    }
    public withDifferences(differences: Array<ParamGroupParameterDifferences>): CheckStarrocksParamsResponse {
        this['differences'] = differences;
        return this;
    }
}