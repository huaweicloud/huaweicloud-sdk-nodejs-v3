

export class VulHandleTaskResponseInfo {
    public id?: string;
    private 'handle_type'?: string;
    public status?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'vul_types'?: Array<string>;
    private 'ready_num'?: number;
    private 'running_num'?: number;
    private 'success_num'?: number;
    private 'failed_num'?: number;
    private 'estimated_time'?: number;
    public constructor() { 
    }
    public withId(id: string): VulHandleTaskResponseInfo {
        this['id'] = id;
        return this;
    }
    public withHandleType(handleType: string): VulHandleTaskResponseInfo {
        this['handle_type'] = handleType;
        return this;
    }
    public set handleType(handleType: string  | undefined) {
        this['handle_type'] = handleType;
    }
    public get handleType(): string | undefined {
        return this['handle_type'];
    }
    public withStatus(status: string): VulHandleTaskResponseInfo {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: number): VulHandleTaskResponseInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): VulHandleTaskResponseInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withVulTypes(vulTypes: Array<string>): VulHandleTaskResponseInfo {
        this['vul_types'] = vulTypes;
        return this;
    }
    public set vulTypes(vulTypes: Array<string>  | undefined) {
        this['vul_types'] = vulTypes;
    }
    public get vulTypes(): Array<string> | undefined {
        return this['vul_types'];
    }
    public withReadyNum(readyNum: number): VulHandleTaskResponseInfo {
        this['ready_num'] = readyNum;
        return this;
    }
    public set readyNum(readyNum: number  | undefined) {
        this['ready_num'] = readyNum;
    }
    public get readyNum(): number | undefined {
        return this['ready_num'];
    }
    public withRunningNum(runningNum: number): VulHandleTaskResponseInfo {
        this['running_num'] = runningNum;
        return this;
    }
    public set runningNum(runningNum: number  | undefined) {
        this['running_num'] = runningNum;
    }
    public get runningNum(): number | undefined {
        return this['running_num'];
    }
    public withSuccessNum(successNum: number): VulHandleTaskResponseInfo {
        this['success_num'] = successNum;
        return this;
    }
    public set successNum(successNum: number  | undefined) {
        this['success_num'] = successNum;
    }
    public get successNum(): number | undefined {
        return this['success_num'];
    }
    public withFailedNum(failedNum: number): VulHandleTaskResponseInfo {
        this['failed_num'] = failedNum;
        return this;
    }
    public set failedNum(failedNum: number  | undefined) {
        this['failed_num'] = failedNum;
    }
    public get failedNum(): number | undefined {
        return this['failed_num'];
    }
    public withEstimatedTime(estimatedTime: number): VulHandleTaskResponseInfo {
        this['estimated_time'] = estimatedTime;
        return this;
    }
    public set estimatedTime(estimatedTime: number  | undefined) {
        this['estimated_time'] = estimatedTime;
    }
    public get estimatedTime(): number | undefined {
        return this['estimated_time'];
    }
}