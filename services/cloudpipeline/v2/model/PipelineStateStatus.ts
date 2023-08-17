

export class PipelineStateStatus {
    public id?: string;
    public name?: string;
    public type?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'elapsed_time'?: string;
    public status?: string;
    public outcome?: string;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public children?: Array<PipelineStateStatus>;
    private 'detail_url'?: string;
    public constructor(id?: string, name?: string, type?: string, startTime?: string, endTime?: string, elapsedTime?: string, status?: string, outcome?: string, errorCode?: string, errorMsg?: string, children?: Array<PipelineStateStatus>, detailUrl?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['type'] = type;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['elapsed_time'] = elapsedTime;
        this['status'] = status;
        this['outcome'] = outcome;
        this['error_code'] = errorCode;
        this['error_msg'] = errorMsg;
        this['children'] = children;
        this['detail_url'] = detailUrl;
    }
    public withId(id: string): PipelineStateStatus {
        this['id'] = id;
        return this;
    }
    public withName(name: string): PipelineStateStatus {
        this['name'] = name;
        return this;
    }
    public withType(type: string): PipelineStateStatus {
        this['type'] = type;
        return this;
    }
    public withStartTime(startTime: string): PipelineStateStatus {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): PipelineStateStatus {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withElapsedTime(elapsedTime: string): PipelineStateStatus {
        this['elapsed_time'] = elapsedTime;
        return this;
    }
    public set elapsedTime(elapsedTime: string  | undefined) {
        this['elapsed_time'] = elapsedTime;
    }
    public get elapsedTime(): string | undefined {
        return this['elapsed_time'];
    }
    public withStatus(status: string): PipelineStateStatus {
        this['status'] = status;
        return this;
    }
    public withOutcome(outcome: string): PipelineStateStatus {
        this['outcome'] = outcome;
        return this;
    }
    public withErrorCode(errorCode: string): PipelineStateStatus {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): PipelineStateStatus {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withChildren(children: Array<PipelineStateStatus>): PipelineStateStatus {
        this['children'] = children;
        return this;
    }
    public withDetailUrl(detailUrl: string): PipelineStateStatus {
        this['detail_url'] = detailUrl;
        return this;
    }
    public set detailUrl(detailUrl: string  | undefined) {
        this['detail_url'] = detailUrl;
    }
    public get detailUrl(): string | undefined {
        return this['detail_url'];
    }
}