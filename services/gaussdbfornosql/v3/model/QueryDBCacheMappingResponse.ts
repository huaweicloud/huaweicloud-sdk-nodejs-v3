

export class QueryDBCacheMappingResponse {
    public id?: string;
    public name?: string;
    private 'source_instance_id'?: string;
    private 'source_instance_name'?: string;
    private 'target_instance_id'?: string;
    private 'target_instance_name'?: string;
    public status?: string;
    public created?: string;
    public updated?: string;
    private 'rule_count'?: number;
    public constructor(id?: string, name?: string, sourceInstanceId?: string, sourceInstanceName?: string, targetInstanceId?: string, targetInstanceName?: string, status?: string, created?: string, updated?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['source_instance_id'] = sourceInstanceId;
        this['source_instance_name'] = sourceInstanceName;
        this['target_instance_id'] = targetInstanceId;
        this['target_instance_name'] = targetInstanceName;
        this['status'] = status;
        this['created'] = created;
        this['updated'] = updated;
    }
    public withId(id: string): QueryDBCacheMappingResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): QueryDBCacheMappingResponse {
        this['name'] = name;
        return this;
    }
    public withSourceInstanceId(sourceInstanceId: string): QueryDBCacheMappingResponse {
        this['source_instance_id'] = sourceInstanceId;
        return this;
    }
    public set sourceInstanceId(sourceInstanceId: string  | undefined) {
        this['source_instance_id'] = sourceInstanceId;
    }
    public get sourceInstanceId(): string | undefined {
        return this['source_instance_id'];
    }
    public withSourceInstanceName(sourceInstanceName: string): QueryDBCacheMappingResponse {
        this['source_instance_name'] = sourceInstanceName;
        return this;
    }
    public set sourceInstanceName(sourceInstanceName: string  | undefined) {
        this['source_instance_name'] = sourceInstanceName;
    }
    public get sourceInstanceName(): string | undefined {
        return this['source_instance_name'];
    }
    public withTargetInstanceId(targetInstanceId: string): QueryDBCacheMappingResponse {
        this['target_instance_id'] = targetInstanceId;
        return this;
    }
    public set targetInstanceId(targetInstanceId: string  | undefined) {
        this['target_instance_id'] = targetInstanceId;
    }
    public get targetInstanceId(): string | undefined {
        return this['target_instance_id'];
    }
    public withTargetInstanceName(targetInstanceName: string): QueryDBCacheMappingResponse {
        this['target_instance_name'] = targetInstanceName;
        return this;
    }
    public set targetInstanceName(targetInstanceName: string  | undefined) {
        this['target_instance_name'] = targetInstanceName;
    }
    public get targetInstanceName(): string | undefined {
        return this['target_instance_name'];
    }
    public withStatus(status: string): QueryDBCacheMappingResponse {
        this['status'] = status;
        return this;
    }
    public withCreated(created: string): QueryDBCacheMappingResponse {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): QueryDBCacheMappingResponse {
        this['updated'] = updated;
        return this;
    }
    public withRuleCount(ruleCount: number): QueryDBCacheMappingResponse {
        this['rule_count'] = ruleCount;
        return this;
    }
    public set ruleCount(ruleCount: number  | undefined) {
        this['rule_count'] = ruleCount;
    }
    public get ruleCount(): number | undefined {
        return this['rule_count'];
    }
}