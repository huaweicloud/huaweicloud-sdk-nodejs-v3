

export class ShowCheckpointRequest {
    private 'checkpoint_id': string | undefined;
    public constructor(checkpointId?: any) { 
        this['checkpoint_id'] = checkpointId;
    }
    public withCheckpointId(checkpointId: string): ShowCheckpointRequest {
        this['checkpoint_id'] = checkpointId;
        return this;
    }
    public set checkpointId(checkpointId: string | undefined) {
        this['checkpoint_id'] = checkpointId;
    }
    public get checkpointId() {
        return this['checkpoint_id'];
    }
}