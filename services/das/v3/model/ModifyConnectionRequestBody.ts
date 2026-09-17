

export class ModifyConnectionRequestBody {
    public username?: string;
    public password?: string;
    private 'is_save_password'?: boolean;
    private 'node_ids'?: Array<string>;
    public remarks?: string;
    public port?: number;
    private 'database_name'?: string;
    private 'sql_record_flag'?: boolean;
    public constructor(username?: string, password?: string, isSavePassword?: boolean) { 
        this['username'] = username;
        this['password'] = password;
        this['is_save_password'] = isSavePassword;
    }
    public withUsername(username: string): ModifyConnectionRequestBody {
        this['username'] = username;
        return this;
    }
    public withPassword(password: string): ModifyConnectionRequestBody {
        this['password'] = password;
        return this;
    }
    public withIsSavePassword(isSavePassword: boolean): ModifyConnectionRequestBody {
        this['is_save_password'] = isSavePassword;
        return this;
    }
    public set isSavePassword(isSavePassword: boolean  | undefined) {
        this['is_save_password'] = isSavePassword;
    }
    public get isSavePassword(): boolean | undefined {
        return this['is_save_password'];
    }
    public withNodeIds(nodeIds: Array<string>): ModifyConnectionRequestBody {
        this['node_ids'] = nodeIds;
        return this;
    }
    public set nodeIds(nodeIds: Array<string>  | undefined) {
        this['node_ids'] = nodeIds;
    }
    public get nodeIds(): Array<string> | undefined {
        return this['node_ids'];
    }
    public withRemarks(remarks: string): ModifyConnectionRequestBody {
        this['remarks'] = remarks;
        return this;
    }
    public withPort(port: number): ModifyConnectionRequestBody {
        this['port'] = port;
        return this;
    }
    public withDatabaseName(databaseName: string): ModifyConnectionRequestBody {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withSqlRecordFlag(sqlRecordFlag: boolean): ModifyConnectionRequestBody {
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