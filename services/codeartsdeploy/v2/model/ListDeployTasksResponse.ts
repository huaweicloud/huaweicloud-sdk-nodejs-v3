import { TaskInfo } from './TaskInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDeployTasksResponse extends SdkResponse {
    private 'total_num'?: number | undefined;
    public result?: Array<TaskInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListDeployTasksResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum() {
        return this['total_num'];
    }
    public withResult(result: Array<TaskInfo>): ListDeployTasksResponse {
        this['result'] = result;
        return this;
    }
}