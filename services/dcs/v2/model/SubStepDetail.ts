

export class SubStepDetail {
    private 'sub_step_id'?: string;
    private 'sub_step_name'?: string;
    private 'sub_step_status'?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public detail?: string;
    private 'error_code'?: string;
    public constructor() { 
    }
    public withSubStepId(subStepId: string): SubStepDetail {
        this['sub_step_id'] = subStepId;
        return this;
    }
    public set subStepId(subStepId: string  | undefined) {
        this['sub_step_id'] = subStepId;
    }
    public get subStepId(): string | undefined {
        return this['sub_step_id'];
    }
    public withSubStepName(subStepName: string): SubStepDetail {
        this['sub_step_name'] = subStepName;
        return this;
    }
    public set subStepName(subStepName: string  | undefined) {
        this['sub_step_name'] = subStepName;
    }
    public get subStepName(): string | undefined {
        return this['sub_step_name'];
    }
    public withSubStepStatus(subStepStatus: string): SubStepDetail {
        this['sub_step_status'] = subStepStatus;
        return this;
    }
    public set subStepStatus(subStepStatus: string  | undefined) {
        this['sub_step_status'] = subStepStatus;
    }
    public get subStepStatus(): string | undefined {
        return this['sub_step_status'];
    }
    public withBeginTime(beginTime: string): SubStepDetail {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): SubStepDetail {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withDetail(detail: string): SubStepDetail {
        this['detail'] = detail;
        return this;
    }
    public withErrorCode(errorCode: string): SubStepDetail {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
}