

export class AuditInsanceRiskCount {
    public count?: number;
    private 'db_id'?: string;
    private 'db_ip'?: string;
    private 'db_name'?: string;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    public constructor() { 
    }
    public withCount(count: number): AuditInsanceRiskCount {
        this['count'] = count;
        return this;
    }
    public withDbId(dbId: string): AuditInsanceRiskCount {
        this['db_id'] = dbId;
        return this;
    }
    public set dbId(dbId: string  | undefined) {
        this['db_id'] = dbId;
    }
    public get dbId(): string | undefined {
        return this['db_id'];
    }
    public withDbIp(dbIp: string): AuditInsanceRiskCount {
        this['db_ip'] = dbIp;
        return this;
    }
    public set dbIp(dbIp: string  | undefined) {
        this['db_ip'] = dbIp;
    }
    public get dbIp(): string | undefined {
        return this['db_ip'];
    }
    public withDbName(dbName: string): AuditInsanceRiskCount {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withInstanceId(instanceId: string): AuditInsanceRiskCount {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): AuditInsanceRiskCount {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
}