import { RepositoryBasicInfo } from './RepositoryBasicInfo';


export class RepositoryCreationResult {
    public repository?: RepositoryBasicInfo;
    private 'task_id'?: string | undefined;
    public status?: RepositoryCreationResultStatusEnum;
    private 'failure_reason'?: string | undefined;
    public constructor() { 
    }
    public withRepository(repository: RepositoryBasicInfo): RepositoryCreationResult {
        this['repository'] = repository;
        return this;
    }
    public withTaskId(taskId: string): RepositoryCreationResult {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withStatus(status: RepositoryCreationResultStatusEnum): RepositoryCreationResult {
        this['status'] = status;
        return this;
    }
    public withFailureReason(failureReason: string): RepositoryCreationResult {
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
export enum RepositoryCreationResultStatusEnum {
    SUCCESS = 'success',
    FAILED = 'failed',
    CREATING = 'creating'
}
