

export class ApiListConnectionsInfoRespDasConnInfoList {
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
    private 'create_at'?: number;
    public status?: string;
    private 'conn_share_type'?: string;
    private 'shared_user_name'?: string;
    private 'shared_user_id'?: string;
    private 'expired_time'?: number;
    public constructor() { 
    }
    public withConnectionId(connectionId: string): ApiListConnectionsInfoRespDasConnInfoList {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withInstanceId(instanceId: string): ApiListConnectionsInfoRespDasConnInfoList {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): ApiListConnectionsInfoRespDasConnInfoList {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withNetworkType(networkType: string): ApiListConnectionsInfoRespDasConnInfoList {
        this['network_type'] = networkType;
        return this;
    }
    public set networkType(networkType: string  | undefined) {
        this['network_type'] = networkType;
    }
    public get networkType(): string | undefined {
        return this['network_type'];
    }
    public withEngineType(engineType: string): ApiListConnectionsInfoRespDasConnInfoList {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withDatastoreVersion(datastoreVersion: string): ApiListConnectionsInfoRespDasConnInfoList {
        this['datastore_version'] = datastoreVersion;
        return this;
    }
    public set datastoreVersion(datastoreVersion: string  | undefined) {
        this['datastore_version'] = datastoreVersion;
    }
    public get datastoreVersion(): string | undefined {
        return this['datastore_version'];
    }
    public withUserName(userName: string): ApiListConnectionsInfoRespDasConnInfoList {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withDatabaseName(databaseName: string): ApiListConnectionsInfoRespDasConnInfoList {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withIsSavePassword(isSavePassword: boolean): ApiListConnectionsInfoRespDasConnInfoList {
        this['is_save_password'] = isSavePassword;
        return this;
    }
    public set isSavePassword(isSavePassword: boolean  | undefined) {
        this['is_save_password'] = isSavePassword;
    }
    public get isSavePassword(): boolean | undefined {
        return this['is_save_password'];
    }
    public withIpAddress(ipAddress: string): ApiListConnectionsInfoRespDasConnInfoList {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withPort(port: number): ApiListConnectionsInfoRespDasConnInfoList {
        this['port'] = port;
        return this;
    }
    public withRemarks(remarks: string): ApiListConnectionsInfoRespDasConnInfoList {
        this['remarks'] = remarks;
        return this;
    }
    public withCreateAt(createAt: number): ApiListConnectionsInfoRespDasConnInfoList {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withStatus(status: string): ApiListConnectionsInfoRespDasConnInfoList {
        this['status'] = status;
        return this;
    }
    public withConnShareType(connShareType: string): ApiListConnectionsInfoRespDasConnInfoList {
        this['conn_share_type'] = connShareType;
        return this;
    }
    public set connShareType(connShareType: string  | undefined) {
        this['conn_share_type'] = connShareType;
    }
    public get connShareType(): string | undefined {
        return this['conn_share_type'];
    }
    public withSharedUserName(sharedUserName: string): ApiListConnectionsInfoRespDasConnInfoList {
        this['shared_user_name'] = sharedUserName;
        return this;
    }
    public set sharedUserName(sharedUserName: string  | undefined) {
        this['shared_user_name'] = sharedUserName;
    }
    public get sharedUserName(): string | undefined {
        return this['shared_user_name'];
    }
    public withSharedUserId(sharedUserId: string): ApiListConnectionsInfoRespDasConnInfoList {
        this['shared_user_id'] = sharedUserId;
        return this;
    }
    public set sharedUserId(sharedUserId: string  | undefined) {
        this['shared_user_id'] = sharedUserId;
    }
    public get sharedUserId(): string | undefined {
        return this['shared_user_id'];
    }
    public withExpiredTime(expiredTime: number): ApiListConnectionsInfoRespDasConnInfoList {
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