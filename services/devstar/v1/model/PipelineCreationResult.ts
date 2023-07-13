import { PipelineBasic } from './PipelineBasic';


export class PipelineCreationResult {
    public pipeline?: PipelineBasic;
    private 'task_id'?: string | undefined;
    public status?: PipelineCreationResultStatusEnum;
    private 'failure_reason'?: string | undefined;
    public constructor() { 
    }
    public withPipeline(pipeline: PipelineBasic): PipelineCreationResult {
        this['pipeline'] = pipeline;
        return this;
    }
    public withTaskId(taskId: string): PipelineCreationResult {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withStatus(status: PipelineCreationResultStatusEnum): PipelineCreationResult {
        this['status'] = status;
        return this;
    }
    public withFailureReason(failureReason: string): PipelineCreationResult {
        this['failure_reason'] = failureReason;
        return this;
    }
    public set failureReason(failureReason: string | undefined) {
        this['failure_reason'] = failureReason;
    }
    public get failureReason() {
        return this['failure_reason'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PipelineCreationResultStatusEnum {
    SUCCESS = 'success',
    FAILED = 'failed',
    CREATING = 'creating',
    CANCEL = 'cancel',
    PENDING = 'pending'
}
