import { ServerlessJobInfo } from './ServerlessJobInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListK8sJobsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'last_update_time'?: number;
    private 'job_info_list'?: Array<ServerlessJobInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListK8sJobsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withLastUpdateTime(lastUpdateTime: number): ListK8sJobsResponse {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: number  | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime(): number | undefined {
        return this['last_update_time'];
    }
    public withJobInfoList(jobInfoList: Array<ServerlessJobInfo>): ListK8sJobsResponse {
        this['job_info_list'] = jobInfoList;
        return this;
    }
    public set jobInfoList(jobInfoList: Array<ServerlessJobInfo>  | undefined) {
        this['job_info_list'] = jobInfoList;
    }
    public get jobInfoList(): Array<ServerlessJobInfo> | undefined {
        return this['job_info_list'];
    }
}