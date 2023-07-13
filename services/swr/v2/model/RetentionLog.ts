

export class RetentionLog {
    private 'created_at': string | undefined;
    public id: number;
    public namespace: string;
    public repo: string;
    private 'retention_id': number | undefined;
    private 'rule_type': string | undefined;
    public tag: string;
    public constructor(createdAt?: any, id?: any, namespace?: any, repo?: any, retentionId?: any, ruleType?: any, tag?: any) { 
        this['created_at'] = createdAt;
        this['id'] = id;
        this['namespace'] = namespace;
        this['repo'] = repo;
        this['retention_id'] = retentionId;
        this['rule_type'] = ruleType;
        this['tag'] = tag;
    }
    public withCreatedAt(createdAt: string): RetentionLog {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withId(id: number): RetentionLog {
        this['id'] = id;
        return this;
    }
    public withNamespace(namespace: string): RetentionLog {
        this['namespace'] = namespace;
        return this;
    }
    public withRepo(repo: string): RetentionLog {
        this['repo'] = repo;
        return this;
    }
    public withRetentionId(retentionId: number): RetentionLog {
        this['retention_id'] = retentionId;
        return this;
    }
    public set retentionId(retentionId: number | undefined) {
        this['retention_id'] = retentionId;
    }
    public get retentionId() {
        return this['retention_id'];
    }
    public withRuleType(ruleType: string): RetentionLog {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: string | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType() {
        return this['rule_type'];
    }
    public withTag(tag: string): RetentionLog {
        this['tag'] = tag;
        return this;
    }
}