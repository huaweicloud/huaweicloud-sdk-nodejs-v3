import { DataConnector } from './DataConnector';


export class DataConnectorDetail {
    private 'connector_name'?: string;
    private 'source_type'?: DataConnectorDetailSourceTypeEnum | string;
    private 'source_info'?: string;
    private 'connector_id'?: string;
    private 'create_time'?: number;
    private 'last_update_time'?: number;
    private 'create_by'?: string;
    private 'create_user'?: string;
    private 'tenant_id'?: string;
    private 'last_update_by'?: string;
    public status?: number;
    private 'used_clusters'?: string;
    private 'encrypt_type'?: number;
    public constructor(connectorName?: string, sourceType?: string, sourceInfo?: string) { 
        this['connector_name'] = connectorName;
        this['source_type'] = sourceType;
        this['source_info'] = sourceInfo;
    }
    public withConnectorName(connectorName: string): DataConnectorDetail {
        this['connector_name'] = connectorName;
        return this;
    }
    public set connectorName(connectorName: string  | undefined) {
        this['connector_name'] = connectorName;
    }
    public get connectorName(): string | undefined {
        return this['connector_name'];
    }
    public withSourceType(sourceType: DataConnectorDetailSourceTypeEnum | string): DataConnectorDetail {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: DataConnectorDetailSourceTypeEnum | string  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): DataConnectorDetailSourceTypeEnum | string | undefined {
        return this['source_type'];
    }
    public withSourceInfo(sourceInfo: string): DataConnectorDetail {
        this['source_info'] = sourceInfo;
        return this;
    }
    public set sourceInfo(sourceInfo: string  | undefined) {
        this['source_info'] = sourceInfo;
    }
    public get sourceInfo(): string | undefined {
        return this['source_info'];
    }
    public withConnectorId(connectorId: string): DataConnectorDetail {
        this['connector_id'] = connectorId;
        return this;
    }
    public set connectorId(connectorId: string  | undefined) {
        this['connector_id'] = connectorId;
    }
    public get connectorId(): string | undefined {
        return this['connector_id'];
    }
    public withCreateTime(createTime: number): DataConnectorDetail {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withLastUpdateTime(lastUpdateTime: number): DataConnectorDetail {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: number  | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime(): number | undefined {
        return this['last_update_time'];
    }
    public withCreateBy(createBy: string): DataConnectorDetail {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withCreateUser(createUser: string): DataConnectorDetail {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withTenantId(tenantId: string): DataConnectorDetail {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withLastUpdateBy(lastUpdateBy: string): DataConnectorDetail {
        this['last_update_by'] = lastUpdateBy;
        return this;
    }
    public set lastUpdateBy(lastUpdateBy: string  | undefined) {
        this['last_update_by'] = lastUpdateBy;
    }
    public get lastUpdateBy(): string | undefined {
        return this['last_update_by'];
    }
    public withStatus(status: number): DataConnectorDetail {
        this['status'] = status;
        return this;
    }
    public withUsedClusters(usedClusters: string): DataConnectorDetail {
        this['used_clusters'] = usedClusters;
        return this;
    }
    public set usedClusters(usedClusters: string  | undefined) {
        this['used_clusters'] = usedClusters;
    }
    public get usedClusters(): string | undefined {
        return this['used_clusters'];
    }
    public withEncryptType(encryptType: number): DataConnectorDetail {
        this['encrypt_type'] = encryptType;
        return this;
    }
    public set encryptType(encryptType: number  | undefined) {
        this['encrypt_type'] = encryptType;
    }
    public get encryptType(): number | undefined {
        return this['encrypt_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DataConnectorDetailSourceTypeEnum {
    RDS_MYSQL = 'RDS_MYSQL',
    RDS_POSTGRES = 'RDS_POSTGRES',
    GAUSSDB_MYSQL = 'gaussdb-mysql'
}
