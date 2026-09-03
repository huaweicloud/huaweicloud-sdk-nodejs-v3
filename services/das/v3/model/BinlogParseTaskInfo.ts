

export class BinlogParseTaskInfo {
    public id?: number;
    private 'gmt_create'?: number;
    private 'gmt_modified'?: number;
    private 'tenant_id'?: string;
    private 'tenant_name'?: string;
    private 'user_id'?: string;
    private 'user_name'?: string;
    private 'connection_id'?: string;
    private 'binlog_type'?: string;
    private 'file_name'?: string;
    private 'backup_id'?: string;
    public status?: number;
    private 'err_msg'?: string;
    public constructor() { 
    }
    public withId(id: number): BinlogParseTaskInfo {
        this['id'] = id;
        return this;
    }
    public withGmtCreate(gmtCreate: number): BinlogParseTaskInfo {
        this['gmt_create'] = gmtCreate;
        return this;
    }
    public set gmtCreate(gmtCreate: number  | undefined) {
        this['gmt_create'] = gmtCreate;
    }
    public get gmtCreate(): number | undefined {
        return this['gmt_create'];
    }
    public withGmtModified(gmtModified: number): BinlogParseTaskInfo {
        this['gmt_modified'] = gmtModified;
        return this;
    }
    public set gmtModified(gmtModified: number  | undefined) {
        this['gmt_modified'] = gmtModified;
    }
    public get gmtModified(): number | undefined {
        return this['gmt_modified'];
    }
    public withTenantId(tenantId: string): BinlogParseTaskInfo {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withTenantName(tenantName: string): BinlogParseTaskInfo {
        this['tenant_name'] = tenantName;
        return this;
    }
    public set tenantName(tenantName: string  | undefined) {
        this['tenant_name'] = tenantName;
    }
    public get tenantName(): string | undefined {
        return this['tenant_name'];
    }
    public withUserId(userId: string): BinlogParseTaskInfo {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserName(userName: string): BinlogParseTaskInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withConnectionId(connectionId: string): BinlogParseTaskInfo {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBinlogType(binlogType: string): BinlogParseTaskInfo {
        this['binlog_type'] = binlogType;
        return this;
    }
    public set binlogType(binlogType: string  | undefined) {
        this['binlog_type'] = binlogType;
    }
    public get binlogType(): string | undefined {
        return this['binlog_type'];
    }
    public withFileName(fileName: string): BinlogParseTaskInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withBackupId(backupId: string): BinlogParseTaskInfo {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withStatus(status: number): BinlogParseTaskInfo {
        this['status'] = status;
        return this;
    }
    public withErrMsg(errMsg: string): BinlogParseTaskInfo {
        this['err_msg'] = errMsg;
        return this;
    }
    public set errMsg(errMsg: string  | undefined) {
        this['err_msg'] = errMsg;
    }
    public get errMsg(): string | undefined {
        return this['err_msg'];
    }
}