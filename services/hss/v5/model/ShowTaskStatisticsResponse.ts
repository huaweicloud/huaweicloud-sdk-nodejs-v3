
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTaskStatisticsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'running_num'?: number;
    private 'last_task_start_time'?: number;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ShowTaskStatisticsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withRunningNum(runningNum: number): ShowTaskStatisticsResponse {
        this['running_num'] = runningNum;
        return this;
    }
    public set runningNum(runningNum: number  | undefined) {
        this['running_num'] = runningNum;
    }
    public get runningNum(): number | undefined {
        return this['running_num'];
    }
    public withLastTaskStartTime(lastTaskStartTime: number): ShowTaskStatisticsResponse {
        this['last_task_start_time'] = lastTaskStartTime;
        return this;
    }
    public set lastTaskStartTime(lastTaskStartTime: number  | undefined) {
        this['last_task_start_time'] = lastTaskStartTime;
    }
    public get lastTaskStartTime(): number | undefined {
        return this['last_task_start_time'];
    }
}