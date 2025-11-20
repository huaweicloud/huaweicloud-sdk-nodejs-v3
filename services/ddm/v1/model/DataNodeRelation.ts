

export class DataNodeRelation {
    private 'source_instance_id'?: string;
    private 'target_instance_id'?: string;
    public constructor() { 
    }
    public withSourceInstanceId(sourceInstanceId: string): DataNodeRelation {
        this['source_instance_id'] = sourceInstanceId;
        return this;
    }
    public set sourceInstanceId(sourceInstanceId: string  | undefined) {
        this['source_instance_id'] = sourceInstanceId;
    }
    public get sourceInstanceId(): string | undefined {
        return this['source_instance_id'];
    }
    public withTargetInstanceId(targetInstanceId: string): DataNodeRelation {
        this['target_instance_id'] = targetInstanceId;
        return this;
    }
    public set targetInstanceId(targetInstanceId: string  | undefined) {
        this['target_instance_id'] = targetInstanceId;
    }
    public get targetInstanceId(): string | undefined {
        return this['target_instance_id'];
    }
}