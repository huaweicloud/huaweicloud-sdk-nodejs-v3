

export class RdsNoAgentDbRequestDatabases {
    public id?: string;
    private 'db_name'?: string;
    public status?: string;
    public port?: string;
    public ip?: string;
    private 'instance_name'?: string;
    public version?: string;
    public type?: string;
    private 'enterprise_id'?: string;
    private 'enterprise_name'?: string;
    public constructor(id?: string, dbName?: string, status?: string, port?: string, ip?: string, instanceName?: string, version?: string, type?: string, enterpriseId?: string) { 
        this['id'] = id;
        this['db_name'] = dbName;
        this['status'] = status;
        this['port'] = port;
        this['ip'] = ip;
        this['instance_name'] = instanceName;
        this['version'] = version;
        this['type'] = type;
        this['enterprise_id'] = enterpriseId;
    }
    public withId(id: string): RdsNoAgentDbRequestDatabases {
        this['id'] = id;
        return this;
    }
    public withDbName(dbName: string): RdsNoAgentDbRequestDatabases {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withStatus(status: string): RdsNoAgentDbRequestDatabases {
        this['status'] = status;
        return this;
    }
    public withPort(port: string): RdsNoAgentDbRequestDatabases {
        this['port'] = port;
        return this;
    }
    public withIp(ip: string): RdsNoAgentDbRequestDatabases {
        this['ip'] = ip;
        return this;
    }
    public withInstanceName(instanceName: string): RdsNoAgentDbRequestDatabases {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withVersion(version: string): RdsNoAgentDbRequestDatabases {
        this['version'] = version;
        return this;
    }
    public withType(type: string): RdsNoAgentDbRequestDatabases {
        this['type'] = type;
        return this;
    }
    public withEnterpriseId(enterpriseId: string): RdsNoAgentDbRequestDatabases {
        this['enterprise_id'] = enterpriseId;
        return this;
    }
    public set enterpriseId(enterpriseId: string  | undefined) {
        this['enterprise_id'] = enterpriseId;
    }
    public get enterpriseId(): string | undefined {
        return this['enterprise_id'];
    }
    public withEnterpriseName(enterpriseName: string): RdsNoAgentDbRequestDatabases {
        this['enterprise_name'] = enterpriseName;
        return this;
    }
    public set enterpriseName(enterpriseName: string  | undefined) {
        this['enterprise_name'] = enterpriseName;
    }
    public get enterpriseName(): string | undefined {
        return this['enterprise_name'];
    }
}