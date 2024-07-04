import { ParamGroupParameterDifferences } from './ParamGroupParameterDifferences';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckStarrocksParamsResponse extends SdkResponse {
    private 'check_starrocks_params_responce'?: Array<ParamGroupParameterDifferences>;
    public constructor() { 
        super();
    }
    public withCheckStarrocksParamsResponce(checkStarrocksParamsResponce: Array<ParamGroupParameterDifferences>): CheckStarrocksParamsResponse {
        this['check_starrocks_params_responce'] = checkStarrocksParamsResponce;
        return this;
    }
    public set checkStarrocksParamsResponce(checkStarrocksParamsResponce: Array<ParamGroupParameterDifferences>  | undefined) {
        this['check_starrocks_params_responce'] = checkStarrocksParamsResponce;
    }
    public get checkStarrocksParamsResponce(): Array<ParamGroupParameterDifferences> | undefined {
        return this['check_starrocks_params_responce'];
    }
}