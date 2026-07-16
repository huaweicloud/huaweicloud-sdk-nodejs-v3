

export class CheckpointConf {
    private 'checkpoint_id'?: string;
    private 'save_checkpoints_max'?: number;
    private 'skipped_steps'?: number;
    private 'restore_training'?: number;
    public constructor() { 
    }
    public withCheckpointId(checkpointId: string): CheckpointConf {
        this['checkpoint_id'] = checkpointId;
        return this;
    }
    public set checkpointId(checkpointId: string  | undefined) {
        this['checkpoint_id'] = checkpointId;
    }
    public get checkpointId(): string | undefined {
        return this['checkpoint_id'];
    }
    public withSaveCheckpointsMax(saveCheckpointsMax: number): CheckpointConf {
        this['save_checkpoints_max'] = saveCheckpointsMax;
        return this;
    }
    public set saveCheckpointsMax(saveCheckpointsMax: number  | undefined) {
        this['save_checkpoints_max'] = saveCheckpointsMax;
    }
    public get saveCheckpointsMax(): number | undefined {
        return this['save_checkpoints_max'];
    }
    public withSkippedSteps(skippedSteps: number): CheckpointConf {
        this['skipped_steps'] = skippedSteps;
        return this;
    }
    public set skippedSteps(skippedSteps: number  | undefined) {
        this['skipped_steps'] = skippedSteps;
    }
    public get skippedSteps(): number | undefined {
        return this['skipped_steps'];
    }
    public withRestoreTraining(restoreTraining: number): CheckpointConf {
        this['restore_training'] = restoreTraining;
        return this;
    }
    public set restoreTraining(restoreTraining: number  | undefined) {
        this['restore_training'] = restoreTraining;
    }
    public get restoreTraining(): number | undefined {
        return this['restore_training'];
    }
}