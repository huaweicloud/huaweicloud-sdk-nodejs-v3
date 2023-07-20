

export class ShowCheckpointRequest {
    private 'checkpoint_id'?: string;
    public constructor(checkpointId?: string) { 
        this['checkpoint_id'] = checkpointId;
    }
    public withCheckpointId(checkpointId: string): ShowCheckpointRequest {
        this['checkpoint_id'] = checkpointId;
        return this;
    }
    public set checkpointId(checkpointId: string  | undefined) {
        this['checkpoint_id'] = checkpointId;
    }
    public get checkpointId(): string | undefined {
        return this['checkpoint_id'];
    }
}