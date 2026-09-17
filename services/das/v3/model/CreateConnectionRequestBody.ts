

export class CreateConnectionRequestBody {
    private 'engine_type'?: string;
    private 'instance_id'?: string;
    private 'network_type'?: string;
    public username?: string;
    public password?: string;
    private 'is_save_password'?: boolean;
    private 'node_ids'?: Array<string>;
    public remarks?: string;
    public port?: number;
    private 'database_name'?: string;
    private 'sql_record_flag'?: boolean;
    public constructor(engineType?: string, instanceId?: string, networkType?: string, username?: string, password?: string, isSavePassword?: boolean) { 
        this['engine_type'] = engineType;
        this['instance_id'] = instanceId;
        this['network_type'] = networkType;
        this['username'] = username;
        this['password'] = password;
        this['is_save_password'] = isSavePassword;
    }
    public withEngineType(engineType: string): CreateConnectionRequestBody {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withInstanceId(instanceId: string): CreateConnectionRequestBody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNetworkType(networkType: string): CreateConnectionRequestBody {
        this['network_type'] = networkType;
        return this;
    }
    public set networkType(networkType: string  | undefined) {
        this['network_type'] = networkType;
    }
    public get networkType(): string | undefined {
        return this['network_type'];
    }
    public withUsername(username: string): CreateConnectionRequestBody {
        this['username'] = username;
        return this;
    }
    public withPassword(password: string): CreateConnectionRequestBody {
        this['password'] = password;
        return this;
    }
    public withIsSavePassword(isSavePassword: boolean): CreateConnectionRequestBody {
        this['is_save_password'] = isSavePassword;
        return this;
    }
    public set isSavePassword(isSavePassword: boolean  | undefined) {
        this['is_save_password'] = isSavePassword;
    }
    public get isSavePassword(): boolean | undefined {
        return this['is_save_password'];
    }
    public withNodeIds(nodeIds: Array<string>): CreateConnectionRequestBody {
        this['node_ids'] = nodeIds;
        return this;
    }
    public set nodeIds(nodeIds: Array<string>  | undefined) {
        this['node_ids'] = nodeIds;
    }
    public get nodeIds(): Array<string> | undefined {
        return this['node_ids'];
    }
    public withRemarks(remarks: string): CreateConnectionRequestBody {
        this['remarks'] = remarks;
        return this;
    }
    public withPort(port: number): CreateConnectionRequestBody {
        this['port'] = port;
        return this;
    }
    public withDatabaseName(databaseName: string): CreateConnectionRequestBody {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withSqlRecordFlag(sqlRecordFlag: boolean): CreateConnectionRequestBody {
        this['sql_record_flag'] = sqlRecordFlag;
        return this;
    }
    public set sqlRecordFlag(sqlRecordFlag: boolean  | undefined) {
        this['sql_record_flag'] = sqlRecordFlag;
    }
    public get sqlRecordFlag(): boolean | undefined {
        return this['sql_record_flag'];
    }
}