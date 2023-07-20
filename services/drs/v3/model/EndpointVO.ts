import { KerberosVO } from './KerberosVO';


export class EndpointVO {
    public id?: string;
    private 'obj_id'?: string;
    private 'instance_name'?: string;
    private 'db_type'?: EndpointVODbTypeEnum | string;
    private 'db_user'?: string;
    private 'db_password'?: string;
    private 'manage_ip'?: string;
    private 'traffic_ip'?: string;
    private 'db_port'?: number;
    public region?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public ip?: string;
    private 'public_ip'?: string;
    private 'az_code'?: string;
    private 'security_group_id'?: string;
    private 'subnet_id'?: string;
    private 'vpc_id'?: string;
    private 'volume_size'?: number;
    private 'full_trans_user_pwd'?: string;
    private 'increment_trans_user_pwd'?: string;
    private 'ssl_link'?: boolean;
    private 'ssl_cert_key'?: string;
    private 'ssl_cert_name'?: string;
    private 'ssl_cert_check_sum'?: string;
    private 'ssl_cert_password'?: string;
    private 'db_version'?: string;
    private 'mongo_ha_mode'?: EndpointVOMongoHaModeEnum | string;
    private 'project_id'?: string;
    private 'cluster_mode'?: EndpointVOClusterModeEnum | string;
    private 'instance_id'?: string;
    private 'db_name'?: string;
    public topic?: string;
    private 'safe_mode'?: number;
    private 'kerberos_vo'?: KerberosVO;
    private 'multi_write_db_id'?: string;
    public constructor() { 
    }
    public withId(id: string): EndpointVO {
        this['id'] = id;
        return this;
    }
    public withObjId(objId: string): EndpointVO {
        this['obj_id'] = objId;
        return this;
    }
    public set objId(objId: string  | undefined) {
        this['obj_id'] = objId;
    }
    public get objId(): string | undefined {
        return this['obj_id'];
    }
    public withInstanceName(instanceName: string): EndpointVO {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withDbType(dbType: EndpointVODbTypeEnum | string): EndpointVO {
        this['db_type'] = dbType;
        return this;
    }
    public set dbType(dbType: EndpointVODbTypeEnum | string  | undefined) {
        this['db_type'] = dbType;
    }
    public get dbType(): EndpointVODbTypeEnum | string | undefined {
        return this['db_type'];
    }
    public withDbUser(dbUser: string): EndpointVO {
        this['db_user'] = dbUser;
        return this;
    }
    public set dbUser(dbUser: string  | undefined) {
        this['db_user'] = dbUser;
    }
    public get dbUser(): string | undefined {
        return this['db_user'];
    }
    public withDbPassword(dbPassword: string): EndpointVO {
        this['db_password'] = dbPassword;
        return this;
    }
    public set dbPassword(dbPassword: string  | undefined) {
        this['db_password'] = dbPassword;
    }
    public get dbPassword(): string | undefined {
        return this['db_password'];
    }
    public withManageIp(manageIp: string): EndpointVO {
        this['manage_ip'] = manageIp;
        return this;
    }
    public set manageIp(manageIp: string  | undefined) {
        this['manage_ip'] = manageIp;
    }
    public get manageIp(): string | undefined {
        return this['manage_ip'];
    }
    public withTrafficIp(trafficIp: string): EndpointVO {
        this['traffic_ip'] = trafficIp;
        return this;
    }
    public set trafficIp(trafficIp: string  | undefined) {
        this['traffic_ip'] = trafficIp;
    }
    public get trafficIp(): string | undefined {
        return this['traffic_ip'];
    }
    public withDbPort(dbPort: number): EndpointVO {
        this['db_port'] = dbPort;
        return this;
    }
    public set dbPort(dbPort: number  | undefined) {
        this['db_port'] = dbPort;
    }
    public get dbPort(): number | undefined {
        return this['db_port'];
    }
    public withRegion(region: string): EndpointVO {
        this['region'] = region;
        return this;
    }
    public withCreatedAt(createdAt: string): EndpointVO {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): EndpointVO {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withIp(ip: string): EndpointVO {
        this['ip'] = ip;
        return this;
    }
    public withPublicIp(publicIp: string): EndpointVO {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withAzCode(azCode: string): EndpointVO {
        this['az_code'] = azCode;
        return this;
    }
    public set azCode(azCode: string  | undefined) {
        this['az_code'] = azCode;
    }
    public get azCode(): string | undefined {
        return this['az_code'];
    }
    public withSecurityGroupId(securityGroupId: string): EndpointVO {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withSubnetId(subnetId: string): EndpointVO {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withVpcId(vpcId: string): EndpointVO {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withVolumeSize(volumeSize: number): EndpointVO {
        this['volume_size'] = volumeSize;
        return this;
    }
    public set volumeSize(volumeSize: number  | undefined) {
        this['volume_size'] = volumeSize;
    }
    public get volumeSize(): number | undefined {
        return this['volume_size'];
    }
    public withFullTransUserPwd(fullTransUserPwd: string): EndpointVO {
        this['full_trans_user_pwd'] = fullTransUserPwd;
        return this;
    }
    public set fullTransUserPwd(fullTransUserPwd: string  | undefined) {
        this['full_trans_user_pwd'] = fullTransUserPwd;
    }
    public get fullTransUserPwd(): string | undefined {
        return this['full_trans_user_pwd'];
    }
    public withIncrementTransUserPwd(incrementTransUserPwd: string): EndpointVO {
        this['increment_trans_user_pwd'] = incrementTransUserPwd;
        return this;
    }
    public set incrementTransUserPwd(incrementTransUserPwd: string  | undefined) {
        this['increment_trans_user_pwd'] = incrementTransUserPwd;
    }
    public get incrementTransUserPwd(): string | undefined {
        return this['increment_trans_user_pwd'];
    }
    public withSslLink(sslLink: boolean): EndpointVO {
        this['ssl_link'] = sslLink;
        return this;
    }
    public set sslLink(sslLink: boolean  | undefined) {
        this['ssl_link'] = sslLink;
    }
    public get sslLink(): boolean | undefined {
        return this['ssl_link'];
    }
    public withSslCertKey(sslCertKey: string): EndpointVO {
        this['ssl_cert_key'] = sslCertKey;
        return this;
    }
    public set sslCertKey(sslCertKey: string  | undefined) {
        this['ssl_cert_key'] = sslCertKey;
    }
    public get sslCertKey(): string | undefined {
        return this['ssl_cert_key'];
    }
    public withSslCertName(sslCertName: string): EndpointVO {
        this['ssl_cert_name'] = sslCertName;
        return this;
    }
    public set sslCertName(sslCertName: string  | undefined) {
        this['ssl_cert_name'] = sslCertName;
    }
    public get sslCertName(): string | undefined {
        return this['ssl_cert_name'];
    }
    public withSslCertCheckSum(sslCertCheckSum: string): EndpointVO {
        this['ssl_cert_check_sum'] = sslCertCheckSum;
        return this;
    }
    public set sslCertCheckSum(sslCertCheckSum: string  | undefined) {
        this['ssl_cert_check_sum'] = sslCertCheckSum;
    }
    public get sslCertCheckSum(): string | undefined {
        return this['ssl_cert_check_sum'];
    }
    public withSslCertPassword(sslCertPassword: string): EndpointVO {
        this['ssl_cert_password'] = sslCertPassword;
        return this;
    }
    public set sslCertPassword(sslCertPassword: string  | undefined) {
        this['ssl_cert_password'] = sslCertPassword;
    }
    public get sslCertPassword(): string | undefined {
        return this['ssl_cert_password'];
    }
    public withDbVersion(dbVersion: string): EndpointVO {
        this['db_version'] = dbVersion;
        return this;
    }
    public set dbVersion(dbVersion: string  | undefined) {
        this['db_version'] = dbVersion;
    }
    public get dbVersion(): string | undefined {
        return this['db_version'];
    }
    public withMongoHaMode(mongoHaMode: EndpointVOMongoHaModeEnum | string): EndpointVO {
        this['mongo_ha_mode'] = mongoHaMode;
        return this;
    }
    public set mongoHaMode(mongoHaMode: EndpointVOMongoHaModeEnum | string  | undefined) {
        this['mongo_ha_mode'] = mongoHaMode;
    }
    public get mongoHaMode(): EndpointVOMongoHaModeEnum | string | undefined {
        return this['mongo_ha_mode'];
    }
    public withProjectId(projectId: string): EndpointVO {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withClusterMode(clusterMode: EndpointVOClusterModeEnum | string): EndpointVO {
        this['cluster_mode'] = clusterMode;
        return this;
    }
    public set clusterMode(clusterMode: EndpointVOClusterModeEnum | string  | undefined) {
        this['cluster_mode'] = clusterMode;
    }
    public get clusterMode(): EndpointVOClusterModeEnum | string | undefined {
        return this['cluster_mode'];
    }
    public withInstanceId(instanceId: string): EndpointVO {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDbName(dbName: string): EndpointVO {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withTopic(topic: string): EndpointVO {
        this['topic'] = topic;
        return this;
    }
    public withSafeMode(safeMode: number): EndpointVO {
        this['safe_mode'] = safeMode;
        return this;
    }
    public set safeMode(safeMode: number  | undefined) {
        this['safe_mode'] = safeMode;
    }
    public get safeMode(): number | undefined {
        return this['safe_mode'];
    }
    public withKerberosVo(kerberosVo: KerberosVO): EndpointVO {
        this['kerberos_vo'] = kerberosVo;
        return this;
    }
    public set kerberosVo(kerberosVo: KerberosVO  | undefined) {
        this['kerberos_vo'] = kerberosVo;
    }
    public get kerberosVo(): KerberosVO | undefined {
        return this['kerberos_vo'];
    }
    public withMultiWriteDbId(multiWriteDbId: string): EndpointVO {
        this['multi_write_db_id'] = multiWriteDbId;
        return this;
    }
    public set multiWriteDbId(multiWriteDbId: string  | undefined) {
        this['multi_write_db_id'] = multiWriteDbId;
    }
    public get multiWriteDbId(): string | undefined {
        return this['multi_write_db_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EndpointVODbTypeEnum {
    MYSQL = 'mysql',
    MONGODB = 'mongodb'
}
/**
    * @export
    * @enum {string}
    */
export enum EndpointVOMongoHaModeEnum {
    SHARDING = 'Sharding',
    REPLICASET = 'ReplicaSet',
    REPLICASINGLE = 'ReplicaSingle'
}
/**
    * @export
    * @enum {string}
    */
export enum EndpointVOClusterModeEnum {
    SINGLE = 'Single',
    HA = 'Ha',
    GR = 'GR',
    SHARDING = 'Sharding',
    SHARDING4_0 = 'Sharding4.0+',
    REPLICASET = 'ReplicaSet',
    REPLICA = 'Replica',
    REPLICASINGLE = 'ReplicaSingle',
    CLUSTER = 'Cluster',
    INDEPENDENT = 'Independent',
    COMBINED = 'Combined',
    DISTRIBUTED = 'Distributed',
    NOSHARDING = 'NoSharding'
}
