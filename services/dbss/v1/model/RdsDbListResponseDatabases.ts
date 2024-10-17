

export class RdsDbListResponseDatabases {
    public id?: string;
    private 'db_name'?: string;
    public status?: string;
    public port?: string;
    public ip?: string;
    private 'instance_name'?: string;
    public type?: string;
    public version?: string;
    private 'is_supported'?: boolean;
    private 'enterprise_id'?: string;
    public constructor(id?: string, dbName?: string, status?: string, port?: string, ip?: string, type?: string, version?: string, isSupported?: boolean) { 
        this['id'] = id;
        this['db_name'] = dbName;
        this['status'] = status;
        this['port'] = port;
        this['ip'] = ip;
        this['type'] = type;
        this['version'] = version;
        this['is_supported'] = isSupported;
    }
    public withId(id: string): RdsDbListResponseDatabases {
        this['id'] = id;
        return this;
    }
    public withDbName(dbName: string): RdsDbListResponseDatabases {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withStatus(status: string): RdsDbListResponseDatabases {
        this['status'] = status;
        return this;
    }
    public withPort(port: string): RdsDbListResponseDatabases {
        this['port'] = port;
        return this;
    }
    public withIp(ip: string): RdsDbListResponseDatabases {
        this['ip'] = ip;
        return this;
    }
    public withInstanceName(instanceName: string): RdsDbListResponseDatabases {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withType(type: string): RdsDbListResponseDatabases {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): RdsDbListResponseDatabases {
        this['version'] = version;
        return this;
    }
    public withIsSupported(isSupported: boolean): RdsDbListResponseDatabases {
        this['is_supported'] = isSupported;
        return this;
    }
    public set isSupported(isSupported: boolean  | undefined) {
        this['is_supported'] = isSupported;
    }
    public get isSupported(): boolean | undefined {
        return this['is_supported'];
    }
    public withEnterpriseId(enterpriseId: string): RdsDbListResponseDatabases {
        this['enterprise_id'] = enterpriseId;
        return this;
    }
    public set enterpriseId(enterpriseId: string  | undefined) {
        this['enterprise_id'] = enterpriseId;
    }
    public get enterpriseId(): string | undefined {
        return this['enterprise_id'];
    }
}