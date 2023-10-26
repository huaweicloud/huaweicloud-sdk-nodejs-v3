import { SubStepDetail } from './SubStepDetail';


export class StepDetail {
    private 'step_id'?: string;
    private 'step_name'?: string;
    private 'step_status'?: StepDetailStepStatusEnum | string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    private 'error_code'?: string;
    private 'sub_step_details'?: Array<SubStepDetail>;
    public constructor() { 
    }
    public withStepId(stepId: string): StepDetail {
        this['step_id'] = stepId;
        return this;
    }
    public set stepId(stepId: string  | undefined) {
        this['step_id'] = stepId;
    }
    public get stepId(): string | undefined {
        return this['step_id'];
    }
    public withStepName(stepName: string): StepDetail {
        this['step_name'] = stepName;
        return this;
    }
    public set stepName(stepName: string  | undefined) {
        this['step_name'] = stepName;
    }
    public get stepName(): string | undefined {
        return this['step_name'];
    }
    public withStepStatus(stepStatus: StepDetailStepStatusEnum | string): StepDetail {
        this['step_status'] = stepStatus;
        return this;
    }
    public set stepStatus(stepStatus: StepDetailStepStatusEnum | string  | undefined) {
        this['step_status'] = stepStatus;
    }
    public get stepStatus(): StepDetailStepStatusEnum | string | undefined {
        return this['step_status'];
    }
    public withBeginTime(beginTime: string): StepDetail {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): StepDetail {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withErrorCode(errorCode: string): StepDetail {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withSubStepDetails(subStepDetails: Array<SubStepDetail>): StepDetail {
        this['sub_step_details'] = subStepDetails;
        return this;
    }
    public set subStepDetails(subStepDetails: Array<SubStepDetail>  | undefined) {
        this['sub_step_details'] = subStepDetails;
    }
    public get subStepDetails(): Array<SubStepDetail> | undefined {
        return this['sub_step_details'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StepDetailStepStatusEnum {
    FINISH = 'FINISH',
    FAILED = 'FAILED',
    EXECUTING = 'EXECUTING',
    WAITING = 'WAITING'
}
