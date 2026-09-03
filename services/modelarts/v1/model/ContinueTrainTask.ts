

export class ContinueTrainTask {
    private 'checkpoint_id'?: string;
    private 'continue_task_id'?: string;
    private 'continue_task_name'?: string;
    private 'continue_train_type'?: string;
    private 'skipped_steps'?: number;
    private 'restore_training'?: number;
    private 'create_time'?: string;
    private 'checkpoint_config'?: string;
    public constructor() { 
    }
    public withCheckpointId(checkpointId: string): ContinueTrainTask {
        this['checkpoint_id'] = checkpointId;
        return this;
    }
    public set checkpointId(checkpointId: string  | undefined) {
        this['checkpoint_id'] = checkpointId;
    }
    public get checkpointId(): string | undefined {
        return this['checkpoint_id'];
    }
    public withContinueTaskId(continueTaskId: string): ContinueTrainTask {
        this['continue_task_id'] = continueTaskId;
        return this;
    }
    public set continueTaskId(continueTaskId: string  | undefined) {
        this['continue_task_id'] = continueTaskId;
    }
    public get continueTaskId(): string | undefined {
        return this['continue_task_id'];
    }
    public withContinueTaskName(continueTaskName: string): ContinueTrainTask {
        this['continue_task_name'] = continueTaskName;
        return this;
    }
    public set continueTaskName(continueTaskName: string  | undefined) {
        this['continue_task_name'] = continueTaskName;
    }
    public get continueTaskName(): string | undefined {
        return this['continue_task_name'];
    }
    public withContinueTrainType(continueTrainType: string): ContinueTrainTask {
        this['continue_train_type'] = continueTrainType;
        return this;
    }
    public set continueTrainType(continueTrainType: string  | undefined) {
        this['continue_train_type'] = continueTrainType;
    }
    public get continueTrainType(): string | undefined {
        return this['continue_train_type'];
    }
    public withSkippedSteps(skippedSteps: number): ContinueTrainTask {
        this['skipped_steps'] = skippedSteps;
        return this;
    }
    public set skippedSteps(skippedSteps: number  | undefined) {
        this['skipped_steps'] = skippedSteps;
    }
    public get skippedSteps(): number | undefined {
        return this['skipped_steps'];
    }
    public withRestoreTraining(restoreTraining: number): ContinueTrainTask {
        this['restore_training'] = restoreTraining;
        return this;
    }
    public set restoreTraining(restoreTraining: number  | undefined) {
        this['restore_training'] = restoreTraining;
    }
    public get restoreTraining(): number | undefined {
        return this['restore_training'];
    }
    public withCreateTime(createTime: string): ContinueTrainTask {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withCheckpointConfig(checkpointConfig: string): ContinueTrainTask {
        this['checkpoint_config'] = checkpointConfig;
        return this;
    }
    public set checkpointConfig(checkpointConfig: string  | undefined) {
        this['checkpoint_config'] = checkpointConfig;
    }
    public get checkpointConfig(): string | undefined {
        return this['checkpoint_config'];
    }
}