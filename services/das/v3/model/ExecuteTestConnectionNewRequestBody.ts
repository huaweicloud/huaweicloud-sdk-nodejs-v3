

export class ExecuteTestConnectionNewRequestBody {
    private 'engine_type'?: string;
    private 'instance_id'?: string;
    private 'connection_id'?: string;
    private 'network_type'?: string;
    public username?: string;
    public password?: string;
    private 'node_ids'?: Array<string>;
    public port?: number;
    private 'database_name'?: string;
    public constructor(engineType?: string, instanceId?: string, connectionId?: string, networkType?: string, username?: string, password?: string) { 
        this['engine_type'] = engineType;
        this['instance_id'] = instanceId;
        this['connection_id'] = connectionId;
        this['network_type'] = networkType;
        this['username'] = username;
        this['password'] = password;
    }
    public withEngineType(engineType: string): ExecuteTestConnectionNewRequestBody {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withInstanceId(instanceId: string): ExecuteTestConnectionNewRequestBody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withConnectionId(connectionId: string): ExecuteTestConnectionNewRequestBody {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withNetworkType(networkType: string): ExecuteTestConnectionNewRequestBody {
        this['network_type'] = networkType;
        return this;
    }
    public set networkType(networkType: string  | undefined) {
        this['network_type'] = networkType;
    }
    public get networkType(): string | undefined {
        return this['network_type'];
    }
    public withUsername(username: string): ExecuteTestConnectionNewRequestBody {
        this['username'] = username;
        return this;
    }
    public withPassword(password: string): ExecuteTestConnectionNewRequestBody {
        this['password'] = password;
        return this;
    }
    public withNodeIds(nodeIds: Array<string>): ExecuteTestConnectionNewRequestBody {
        this['node_ids'] = nodeIds;
        return this;
    }
    public set nodeIds(nodeIds: Array<string>  | undefined) {
        this['node_ids'] = nodeIds;
    }
    public get nodeIds(): Array<string> | undefined {
        return this['node_ids'];
    }
    public withPort(port: number): ExecuteTestConnectionNewRequestBody {
        this['port'] = port;
        return this;
    }
    public withDatabaseName(databaseName: string): ExecuteTestConnectionNewRequestBody {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
}