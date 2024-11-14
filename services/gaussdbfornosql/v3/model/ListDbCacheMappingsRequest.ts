

export class ListDbCacheMappingsRequest {
    public id?: string;
    public name?: string;
    private 'source_instance_id'?: string;
    private 'source_instance_name'?: string;
    private 'target_instance_id'?: string;
    private 'target_instance_name'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withId(id: string): ListDbCacheMappingsRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListDbCacheMappingsRequest {
        this['name'] = name;
        return this;
    }
    public withSourceInstanceId(sourceInstanceId: string): ListDbCacheMappingsRequest {
        this['source_instance_id'] = sourceInstanceId;
        return this;
    }
    public set sourceInstanceId(sourceInstanceId: string  | undefined) {
        this['source_instance_id'] = sourceInstanceId;
    }
    public get sourceInstanceId(): string | undefined {
        return this['source_instance_id'];
    }
    public withSourceInstanceName(sourceInstanceName: string): ListDbCacheMappingsRequest {
        this['source_instance_name'] = sourceInstanceName;
        return this;
    }
    public set sourceInstanceName(sourceInstanceName: string  | undefined) {
        this['source_instance_name'] = sourceInstanceName;
    }
    public get sourceInstanceName(): string | undefined {
        return this['source_instance_name'];
    }
    public withTargetInstanceId(targetInstanceId: string): ListDbCacheMappingsRequest {
        this['target_instance_id'] = targetInstanceId;
        return this;
    }
    public set targetInstanceId(targetInstanceId: string  | undefined) {
        this['target_instance_id'] = targetInstanceId;
    }
    public get targetInstanceId(): string | undefined {
        return this['target_instance_id'];
    }
    public withTargetInstanceName(targetInstanceName: string): ListDbCacheMappingsRequest {
        this['target_instance_name'] = targetInstanceName;
        return this;
    }
    public set targetInstanceName(targetInstanceName: string  | undefined) {
        this['target_instance_name'] = targetInstanceName;
    }
    public get targetInstanceName(): string | undefined {
        return this['target_instance_name'];
    }
    public withOffset(offset: number): ListDbCacheMappingsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDbCacheMappingsRequest {
        this['limit'] = limit;
        return this;
    }
}