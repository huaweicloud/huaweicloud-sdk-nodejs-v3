

export class Compliance {
    private 'checkitem_id'?: string;
    private 'checkpoint_id'?: string;
    private 'spec_id'?: string;
    public status?: string;
    public properties?: string;
    public constructor(checkitemId?: string, checkpointId?: string, specId?: string, status?: string) { 
        this['checkitem_id'] = checkitemId;
        this['checkpoint_id'] = checkpointId;
        this['spec_id'] = specId;
        this['status'] = status;
    }
    public withCheckitemId(checkitemId: string): Compliance {
        this['checkitem_id'] = checkitemId;
        return this;
    }
    public set checkitemId(checkitemId: string  | undefined) {
        this['checkitem_id'] = checkitemId;
    }
    public get checkitemId(): string | undefined {
        return this['checkitem_id'];
    }
    public withCheckpointId(checkpointId: string): Compliance {
        this['checkpoint_id'] = checkpointId;
        return this;
    }
    public set checkpointId(checkpointId: string  | undefined) {
        this['checkpoint_id'] = checkpointId;
    }
    public get checkpointId(): string | undefined {
        return this['checkpoint_id'];
    }
    public withSpecId(specId: string): Compliance {
        this['spec_id'] = specId;
        return this;
    }
    public set specId(specId: string  | undefined) {
        this['spec_id'] = specId;
    }
    public get specId(): string | undefined {
        return this['spec_id'];
    }
    public withStatus(status: string): Compliance {
        this['status'] = status;
        return this;
    }
    public withProperties(properties: string): Compliance {
        this['properties'] = properties;
        return this;
    }
}