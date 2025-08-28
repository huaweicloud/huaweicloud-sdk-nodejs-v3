

export class CreateInstanceConnectionReq {
    private 'engine_type'?: string;
    private 'network_type'?: CreateInstanceConnectionReqNetworkTypeEnum | string;
    public username?: string;
    private 'is_save_password'?: boolean;
    public password?: string;
    private 'node_ids'?: Array<string>;
    public remarks?: string;
    public port?: number;
    private 'database_name'?: string;
    private 'sql_record_flag'?: boolean;
    public constructor(engineType?: string, networkType?: string, username?: string, isSavePassword?: boolean, password?: string) { 
        this['engine_type'] = engineType;
        this['network_type'] = networkType;
        this['username'] = username;
        this['is_save_password'] = isSavePassword;
        this['password'] = password;
    }
    public withEngineType(engineType: string): CreateInstanceConnectionReq {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withNetworkType(networkType: CreateInstanceConnectionReqNetworkTypeEnum | string): CreateInstanceConnectionReq {
        this['network_type'] = networkType;
        return this;
    }
    public set networkType(networkType: CreateInstanceConnectionReqNetworkTypeEnum | string  | undefined) {
        this['network_type'] = networkType;
    }
    public get networkType(): CreateInstanceConnectionReqNetworkTypeEnum | string | undefined {
        return this['network_type'];
    }
    public withUsername(username: string): CreateInstanceConnectionReq {
        this['username'] = username;
        return this;
    }
    public withIsSavePassword(isSavePassword: boolean): CreateInstanceConnectionReq {
        this['is_save_password'] = isSavePassword;
        return this;
    }
    public set isSavePassword(isSavePassword: boolean  | undefined) {
        this['is_save_password'] = isSavePassword;
    }
    public get isSavePassword(): boolean | undefined {
        return this['is_save_password'];
    }
    public withPassword(password: string): CreateInstanceConnectionReq {
        this['password'] = password;
        return this;
    }
    public withNodeIds(nodeIds: Array<string>): CreateInstanceConnectionReq {
        this['node_ids'] = nodeIds;
        return this;
    }
    public set nodeIds(nodeIds: Array<string>  | undefined) {
        this['node_ids'] = nodeIds;
    }
    public get nodeIds(): Array<string> | undefined {
        return this['node_ids'];
    }
    public withRemarks(remarks: string): CreateInstanceConnectionReq {
        this['remarks'] = remarks;
        return this;
    }
    public withPort(port: number): CreateInstanceConnectionReq {
        this['port'] = port;
        return this;
    }
    public withDatabaseName(databaseName: string): CreateInstanceConnectionReq {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withSqlRecordFlag(sqlRecordFlag: boolean): CreateInstanceConnectionReq {
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

/**
    * @export
    * @enum {string}
    */
export enum CreateInstanceConnectionReqNetworkTypeEnum {
    GAUSSDB = 'gaussdb',
    DDS = 'dds',
    RDS = 'rds',
    ECS = 'ecs',
    GEMINI = 'gemini',
    DDM = 'ddm'
}
