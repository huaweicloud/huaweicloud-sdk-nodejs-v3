

export class DeleteColdTableDataRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'space_id'?: string;
    private 'dd_id'?: string;
    public constructor(instanceId?: string, spaceId?: string, ddId?: string) { 
        this['instance_id'] = instanceId;
        this['space_id'] = spaceId;
        this['dd_id'] = ddId;
    }
    public withXLanguage(xLanguage: string): DeleteColdTableDataRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): DeleteColdTableDataRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withSpaceId(spaceId: string): DeleteColdTableDataRequest {
        this['space_id'] = spaceId;
        return this;
    }
    public set spaceId(spaceId: string  | undefined) {
        this['space_id'] = spaceId;
    }
    public get spaceId(): string | undefined {
        return this['space_id'];
    }
    public withDdId(ddId: string): DeleteColdTableDataRequest {
        this['dd_id'] = ddId;
        return this;
    }
    public set ddId(ddId: string  | undefined) {
        this['dd_id'] = ddId;
    }
    public get ddId(): string | undefined {
        return this['dd_id'];
    }
}