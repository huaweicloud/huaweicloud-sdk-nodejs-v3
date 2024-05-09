import { ObjectsHealthCompareOverviewInfo } from './ObjectsHealthCompareOverviewInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHealthObjectCompareJobOverviewResponse extends SdkResponse {
    private 'compare_result'?: Array<ObjectsHealthCompareOverviewInfo>;
    public constructor() { 
        super();
    }
    public withCompareResult(compareResult: Array<ObjectsHealthCompareOverviewInfo>): ShowHealthObjectCompareJobOverviewResponse {
        this['compare_result'] = compareResult;
        return this;
    }
    public set compareResult(compareResult: Array<ObjectsHealthCompareOverviewInfo>  | undefined) {
        this['compare_result'] = compareResult;
    }
    public get compareResult(): Array<ObjectsHealthCompareOverviewInfo> | undefined {
        return this['compare_result'];
    }
}