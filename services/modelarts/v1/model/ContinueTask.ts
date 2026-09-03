

export class ContinueTask {
    private 'checkpoint_id'?: string;
    private 'source_model_id'?: string;
    private 'source_model_name'?: string;
    public epoch?: number;
    public steps?: number;
    private 'is_best'?: boolean;
    private 'skipped_steps'?: number;
    public constructor() { 
    }
    public withCheckpointId(checkpointId: string): ContinueTask {
        this['checkpoint_id'] = checkpointId;
        return this;
    }
    public set checkpointId(checkpointId: string  | undefined) {
        this['checkpoint_id'] = checkpointId;
    }
    public get checkpointId(): string | undefined {
        return this['checkpoint_id'];
    }
    public withSourceModelId(sourceModelId: string): ContinueTask {
        this['source_model_id'] = sourceModelId;
        return this;
    }
    public set sourceModelId(sourceModelId: string  | undefined) {
        this['source_model_id'] = sourceModelId;
    }
    public get sourceModelId(): string | undefined {
        return this['source_model_id'];
    }
    public withSourceModelName(sourceModelName: string): ContinueTask {
        this['source_model_name'] = sourceModelName;
        return this;
    }
    public set sourceModelName(sourceModelName: string  | undefined) {
        this['source_model_name'] = sourceModelName;
    }
    public get sourceModelName(): string | undefined {
        return this['source_model_name'];
    }
    public withEpoch(epoch: number): ContinueTask {
        this['epoch'] = epoch;
        return this;
    }
    public withSteps(steps: number): ContinueTask {
        this['steps'] = steps;
        return this;
    }
    public withIsBest(isBest: boolean): ContinueTask {
        this['is_best'] = isBest;
        return this;
    }
    public set isBest(isBest: boolean  | undefined) {
        this['is_best'] = isBest;
    }
    public get isBest(): boolean | undefined {
        return this['is_best'];
    }
    public withSkippedSteps(skippedSteps: number): ContinueTask {
        this['skipped_steps'] = skippedSteps;
        return this;
    }
    public set skippedSteps(skippedSteps: number  | undefined) {
        this['skipped_steps'] = skippedSteps;
    }
    public get skippedSteps(): number | undefined {
        return this['skipped_steps'];
    }
}