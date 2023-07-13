import { QueryDbParamsResp } from './QueryDbParamsResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchShowParamsResponse extends SdkResponse {
    private 'params_list'?: Array<QueryDbParamsResp> | undefined;
    public count?: number;
    public constructor() { 
        super();
    }
    public withParamsList(paramsList: Array<QueryDbParamsResp>): BatchShowParamsResponse {
        this['params_list'] = paramsList;
        return this;
    }
    public set paramsList(paramsList: Array<QueryDbParamsResp> | undefined) {
        this['params_list'] = paramsList;
    }
    public get paramsList() {
        return this['params_list'];
    }
    public withCount(count: number): BatchShowParamsResponse {
        this['count'] = count;
        return this;
    }
}