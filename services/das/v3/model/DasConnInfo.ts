

export class DasConnInfo {
    private 'connection_id'?: string;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'network_type'?: string;
    private 'engine_type'?: string;
    private 'datastore_version'?: string;
    private 'user_name'?: string;
    private 'database_name'?: string;
    private 'is_save_password'?: boolean;
    private 'ip_address'?: string;
    public port?: number;
    public remarks?: string;
    private 'instance_type'?: string;
    private 'create_at'?: number;
    public status?: string;
    private 'sql_record_flag'?: boolean;
    private 'conn_share_type'?: string;
    private 'shared_count'?: number;
    private 'service_type'?: string;
    private 'shared_user_name'?: string;
    private 'shared_user_id'?: string;
    private 'expired_time'?: number;
    public constructor() { 
    }
    public withConnectionId(connectionId: string): DasConnInfo {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withInstanceId(instanceId: string): DasConnInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): DasConnInfo {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withNetworkType(networkType: string): DasConnInfo {
        this['network_type'] = networkType;
        return this;
    }
    public set networkType(networkType: string  | undefined) {
        this['network_type'] = networkType;
    }
    public get networkType(): string | undefined {
        return this['network_type'];
    }
    public withEngineType(engineType: string): DasConnInfo {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withDatastoreVersion(datastoreVersion: string): DasConnInfo {
        this['datastore_version'] = datastoreVersion;
        return this;
    }
    public set datastoreVersion(datastoreVersion: string  | undefined) {
        this['datastore_version'] = datastoreVersion;
    }
    public get datastoreVersion(): string | undefined {
        return this['datastore_version'];
    }
    public withUserName(userName: string): DasConnInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withDatabaseName(databaseName: string): DasConnInfo {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withIsSavePassword(isSavePassword: boolean): DasConnInfo {
        this['is_save_password'] = isSavePassword;
        return this;
    }
    public set isSavePassword(isSavePassword: boolean  | undefined) {
        this['is_save_password'] = isSavePassword;
    }
    public get isSavePassword(): boolean | undefined {
        return this['is_save_password'];
    }
    public withIpAddress(ipAddress: string): DasConnInfo {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withPort(port: number): DasConnInfo {
        this['port'] = port;
        return this;
    }
    public withRemarks(remarks: string): DasConnInfo {
        this['remarks'] = remarks;
        return this;
    }
    public withInstanceType(instanceType: string): DasConnInfo {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): string | undefined {
        return this['instance_type'];
    }
    public withCreateAt(createAt: number): DasConnInfo {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withStatus(status: string): DasConnInfo {
        this['status'] = status;
        return this;
    }
    public withSqlRecordFlag(sqlRecordFlag: boolean): DasConnInfo {
        this['sql_record_flag'] = sqlRecordFlag;
        return this;
    }
    public set sqlRecordFlag(sqlRecordFlag: boolean  | undefined) {
        this['sql_record_flag'] = sqlRecordFlag;
    }
    public get sqlRecordFlag(): boolean | undefined {
        return this['sql_record_flag'];
    }
    public withConnShareType(connShareType: string): DasConnInfo {
        this['conn_share_type'] = connShareType;
        return this;
    }
    public set connShareType(connShareType: string  | undefined) {
        this['conn_share_type'] = connShareType;
    }
    public get connShareType(): string | undefined {
        return this['conn_share_type'];
    }
    public withSharedCount(sharedCount: number): DasConnInfo {
        this['shared_count'] = sharedCount;
        return this;
    }
    public set sharedCount(sharedCount: number  | undefined) {
        this['shared_count'] = sharedCount;
    }
    public get sharedCount(): number | undefined {
        return this['shared_count'];
    }
    public withServiceType(serviceType: string): DasConnInfo {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withSharedUserName(sharedUserName: string): DasConnInfo {
        this['shared_user_name'] = sharedUserName;
        return this;
    }
    public set sharedUserName(sharedUserName: string  | undefined) {
        this['shared_user_name'] = sharedUserName;
    }
    public get sharedUserName(): string | undefined {
        return this['shared_user_name'];
    }
    public withSharedUserId(sharedUserId: string): DasConnInfo {
        this['shared_user_id'] = sharedUserId;
        return this;
    }
    public set sharedUserId(sharedUserId: string  | undefined) {
        this['shared_user_id'] = sharedUserId;
    }
    public get sharedUserId(): string | undefined {
        return this['shared_user_id'];
    }
    public withExpiredTime(expiredTime: number): DasConnInfo {
        this['expired_time'] = expiredTime;
        return this;
    }
    public set expiredTime(expiredTime: number  | undefined) {
        this['expired_time'] = expiredTime;
    }
    public get expiredTime(): number | undefined {
        return this['expired_time'];
    }
}