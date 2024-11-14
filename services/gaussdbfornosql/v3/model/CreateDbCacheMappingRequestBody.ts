

export class CreateDbCacheMappingRequestBody {
    private 'source_instance_id'?: string;
    private 'target_instance_id'?: string;
    public constructor(sourceInstanceId?: string, targetInstanceId?: string) { 
        this['source_instance_id'] = sourceInstanceId;
        this['target_instance_id'] = targetInstanceId;
    }
    public withSourceInstanceId(sourceInstanceId: string): CreateDbCacheMappingRequestBody {
        this['source_instance_id'] = sourceInstanceId;
        return this;
    }
    public set sourceInstanceId(sourceInstanceId: string  | undefined) {
        this['source_instance_id'] = sourceInstanceId;
    }
    public get sourceInstanceId(): string | undefined {
        return this['source_instance_id'];
    }
    public withTargetInstanceId(targetInstanceId: string): CreateDbCacheMappingRequestBody {
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