import { TagEntity } from './TagEntity';


export class CreatePostPaidInstanceReq {
    public name: string;
    public description?: string;
    public engine: CreatePostPaidInstanceReqEngineEnum;
    private 'engine_version': CreatePostPaidInstanceReqEngineVersionEnum | undefined;
    public specification?: CreatePostPaidInstanceReqSpecificationEnum;
    private 'broker_num'?: number | undefined;
    private 'storage_space': number | undefined;
    private 'partition_num'?: CreatePostPaidInstanceReqPartitionNumEnum | undefined;
    private 'access_user'?: string | undefined;
    public password?: string;
    private 'vpc_id': string | undefined;
    private 'security_group_id': string | undefined;
    private 'subnet_id': string | undefined;
    private 'available_zones': Array<string> | undefined;
    private 'product_id': string | undefined;
    private 'kafka_manager_user'?: string | undefined;
    private 'kafka_manager_password'?: string | undefined;
    private 'maintain_begin'?: string | undefined;
    private 'maintain_end'?: string | undefined;
    private 'enable_publicip'?: boolean | undefined;
    private 'public_bandwidth'?: number | undefined;
    private 'publicip_id'?: string | undefined;
    private 'ssl_enable'?: boolean | undefined;
    private 'kafka_security_protocol'?: string | undefined;
    private 'sasl_enabled_mechanisms'?: Array<CreatePostPaidInstanceReqSaslEnabledMechanismsEnum> | undefined;
    private 'retention_policy'?: CreatePostPaidInstanceReqRetentionPolicyEnum | undefined;
    private 'disk_encrypted_enable'?: boolean | undefined;
    private 'disk_encrypted_key'?: string | undefined;
    private 'connector_enable'?: boolean | undefined;
    private 'enable_auto_topic'?: boolean | undefined;
    private 'storage_spec_code': CreatePostPaidInstanceReqStorageSpecCodeEnum | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public tags?: Array<TagEntity>;
    public constructor(name?: any, engine?: any, engineVersion?: any, storageSpace?: any, vpcId?: any, securityGroupId?: any, subnetId?: any, availableZones?: any, productId?: any, storageSpecCode?: any) { 
        this['name'] = name;
        this['engine'] = engine;
        this['engine_version'] = engineVersion;
        this['storage_space'] = storageSpace;
        this['vpc_id'] = vpcId;
        this['security_group_id'] = securityGroupId;
        this['subnet_id'] = subnetId;
        this['available_zones'] = availableZones;
        this['product_id'] = productId;
        this['storage_spec_code'] = storageSpecCode;
    }
    public withName(name: string): CreatePostPaidInstanceReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreatePostPaidInstanceReq {
        this['description'] = description;
        return this;
    }
    public withEngine(engine: CreatePostPaidInstanceReqEngineEnum): CreatePostPaidInstanceReq {
        this['engine'] = engine;
        return this;
    }
    public withEngineVersion(engineVersion: CreatePostPaidInstanceReqEngineVersionEnum): CreatePostPaidInstanceReq {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: CreatePostPaidInstanceReqEngineVersionEnum | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion() {
        return this['engine_version'];
    }
    public withSpecification(specification: CreatePostPaidInstanceReqSpecificationEnum): CreatePostPaidInstanceReq {
        this['specification'] = specification;
        return this;
    }
    public withBrokerNum(brokerNum: number): CreatePostPaidInstanceReq {
        this['broker_num'] = brokerNum;
        return this;
    }
    public set brokerNum(brokerNum: number | undefined) {
        this['broker_num'] = brokerNum;
    }
    public get brokerNum() {
        return this['broker_num'];
    }
    public withStorageSpace(storageSpace: number): CreatePostPaidInstanceReq {
        this['storage_space'] = storageSpace;
        return this;
    }
    public set storageSpace(storageSpace: number | undefined) {
        this['storage_space'] = storageSpace;
    }
    public get storageSpace() {
        return this['storage_space'];
    }
    public withPartitionNum(partitionNum: CreatePostPaidInstanceReqPartitionNumEnum): CreatePostPaidInstanceReq {
        this['partition_num'] = partitionNum;
        return this;
    }
    public set partitionNum(partitionNum: CreatePostPaidInstanceReqPartitionNumEnum | undefined) {
        this['partition_num'] = partitionNum;
    }
    public get partitionNum() {
        return this['partition_num'];
    }
    public withAccessUser(accessUser: string): CreatePostPaidInstanceReq {
        this['access_user'] = accessUser;
        return this;
    }
    public set accessUser(accessUser: string | undefined) {
        this['access_user'] = accessUser;
    }
    public get accessUser() {
        return this['access_user'];
    }
    public withPassword(password: string): CreatePostPaidInstanceReq {
        this['password'] = password;
        return this;
    }
    public withVpcId(vpcId: string): CreatePostPaidInstanceReq {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withSecurityGroupId(securityGroupId: string): CreatePostPaidInstanceReq {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId() {
        return this['security_group_id'];
    }
    public withSubnetId(subnetId: string): CreatePostPaidInstanceReq {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
    public withAvailableZones(availableZones: Array<string>): CreatePostPaidInstanceReq {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<string> | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones() {
        return this['available_zones'];
    }
    public withProductId(productId: string): CreatePostPaidInstanceReq {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string | undefined) {
        this['product_id'] = productId;
    }
    public get productId() {
        return this['product_id'];
    }
    public withKafkaManagerUser(kafkaManagerUser: string): CreatePostPaidInstanceReq {
        this['kafka_manager_user'] = kafkaManagerUser;
        return this;
    }
    public set kafkaManagerUser(kafkaManagerUser: string | undefined) {
        this['kafka_manager_user'] = kafkaManagerUser;
    }
    public get kafkaManagerUser() {
        return this['kafka_manager_user'];
    }
    public withKafkaManagerPassword(kafkaManagerPassword: string): CreatePostPaidInstanceReq {
        this['kafka_manager_password'] = kafkaManagerPassword;
        return this;
    }
    public set kafkaManagerPassword(kafkaManagerPassword: string | undefined) {
        this['kafka_manager_password'] = kafkaManagerPassword;
    }
    public get kafkaManagerPassword() {
        return this['kafka_manager_password'];
    }
    public withMaintainBegin(maintainBegin: string): CreatePostPaidInstanceReq {
        this['maintain_begin'] = maintainBegin;
        return this;
    }
    public set maintainBegin(maintainBegin: string | undefined) {
        this['maintain_begin'] = maintainBegin;
    }
    public get maintainBegin() {
        return this['maintain_begin'];
    }
    public withMaintainEnd(maintainEnd: string): CreatePostPaidInstanceReq {
        this['maintain_end'] = maintainEnd;
        return this;
    }
    public set maintainEnd(maintainEnd: string | undefined) {
        this['maintain_end'] = maintainEnd;
    }
    public get maintainEnd() {
        return this['maintain_end'];
    }
    public withEnablePublicip(enablePublicip: boolean): CreatePostPaidInstanceReq {
        this['enable_publicip'] = enablePublicip;
        return this;
    }
    public set enablePublicip(enablePublicip: boolean | undefined) {
        this['enable_publicip'] = enablePublicip;
    }
    public get enablePublicip() {
        return this['enable_publicip'];
    }
    public withPublicBandwidth(publicBandwidth: number): CreatePostPaidInstanceReq {
        this['public_bandwidth'] = publicBandwidth;
        return this;
    }
    public set publicBandwidth(publicBandwidth: number | undefined) {
        this['public_bandwidth'] = publicBandwidth;
    }
    public get publicBandwidth() {
        return this['public_bandwidth'];
    }
    public withPublicipId(publicipId: string): CreatePostPaidInstanceReq {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId() {
        return this['publicip_id'];
    }
    public withSslEnable(sslEnable: boolean): CreatePostPaidInstanceReq {
        this['ssl_enable'] = sslEnable;
        return this;
    }
    public set sslEnable(sslEnable: boolean | undefined) {
        this['ssl_enable'] = sslEnable;
    }
    public get sslEnable() {
        return this['ssl_enable'];
    }
    public withKafkaSecurityProtocol(kafkaSecurityProtocol: string): CreatePostPaidInstanceReq {
        this['kafka_security_protocol'] = kafkaSecurityProtocol;
        return this;
    }
    public set kafkaSecurityProtocol(kafkaSecurityProtocol: string | undefined) {
        this['kafka_security_protocol'] = kafkaSecurityProtocol;
    }
    public get kafkaSecurityProtocol() {
        return this['kafka_security_protocol'];
    }
    public withSaslEnabledMechanisms(saslEnabledMechanisms: Array<CreatePostPaidInstanceReqSaslEnabledMechanismsEnum>): CreatePostPaidInstanceReq {
        this['sasl_enabled_mechanisms'] = saslEnabledMechanisms;
        return this;
    }
    public set saslEnabledMechanisms(saslEnabledMechanisms: Array<CreatePostPaidInstanceReqSaslEnabledMechanismsEnum> | undefined) {
        this['sasl_enabled_mechanisms'] = saslEnabledMechanisms;
    }
    public get saslEnabledMechanisms() {
        return this['sasl_enabled_mechanisms'];
    }
    public withRetentionPolicy(retentionPolicy: CreatePostPaidInstanceReqRetentionPolicyEnum): CreatePostPaidInstanceReq {
        this['retention_policy'] = retentionPolicy;
        return this;
    }
    public set retentionPolicy(retentionPolicy: CreatePostPaidInstanceReqRetentionPolicyEnum | undefined) {
        this['retention_policy'] = retentionPolicy;
    }
    public get retentionPolicy() {
        return this['retention_policy'];
    }
    public withDiskEncryptedEnable(diskEncryptedEnable: boolean): CreatePostPaidInstanceReq {
        this['disk_encrypted_enable'] = diskEncryptedEnable;
        return this;
    }
    public set diskEncryptedEnable(diskEncryptedEnable: boolean | undefined) {
        this['disk_encrypted_enable'] = diskEncryptedEnable;
    }
    public get diskEncryptedEnable() {
        return this['disk_encrypted_enable'];
    }
    public withDiskEncryptedKey(diskEncryptedKey: string): CreatePostPaidInstanceReq {
        this['disk_encrypted_key'] = diskEncryptedKey;
        return this;
    }
    public set diskEncryptedKey(diskEncryptedKey: string | undefined) {
        this['disk_encrypted_key'] = diskEncryptedKey;
    }
    public get diskEncryptedKey() {
        return this['disk_encrypted_key'];
    }
    public withConnectorEnable(connectorEnable: boolean): CreatePostPaidInstanceReq {
        this['connector_enable'] = connectorEnable;
        return this;
    }
    public set connectorEnable(connectorEnable: boolean | undefined) {
        this['connector_enable'] = connectorEnable;
    }
    public get connectorEnable() {
        return this['connector_enable'];
    }
    public withEnableAutoTopic(enableAutoTopic: boolean): CreatePostPaidInstanceReq {
        this['enable_auto_topic'] = enableAutoTopic;
        return this;
    }
    public set enableAutoTopic(enableAutoTopic: boolean | undefined) {
        this['enable_auto_topic'] = enableAutoTopic;
    }
    public get enableAutoTopic() {
        return this['enable_auto_topic'];
    }
    public withStorageSpecCode(storageSpecCode: CreatePostPaidInstanceReqStorageSpecCodeEnum): CreatePostPaidInstanceReq {
        this['storage_spec_code'] = storageSpecCode;
        return this;
    }
    public set storageSpecCode(storageSpecCode: CreatePostPaidInstanceReqStorageSpecCodeEnum | undefined) {
        this['storage_spec_code'] = storageSpecCode;
    }
    public get storageSpecCode() {
        return this['storage_spec_code'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreatePostPaidInstanceReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<TagEntity>): CreatePostPaidInstanceReq {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreatePostPaidInstanceReqEngineEnum {
    KAFKA = 'kafka'
}
/**
    * @export
    * @enum {string}
    */
export enum CreatePostPaidInstanceReqEngineVersionEnum {
    E_1_1_0 = '1.1.0',
    E_2_3_0 = '2.3.0',
    E_2_7 = '2.7'
}
/**
    * @export
    * @enum {string}
    */
export enum CreatePostPaidInstanceReqSpecificationEnum {
    E_100MB = '100MB',
    E_300MB = '300MB',
    E_600MB = '600MB',
    E_1200MB = '1200MB',
    C6_2U4G_CLUSTER = 'c6.2u4g.cluster',
    C6_4U8G_CLUSTER = 'c6.4u8g.cluster',
    C6_8U16G_CLUSTER = 'c6.8u16g.cluster',
    C6_12U24G_CLUSTER = 'c6.12u24g.cluster',
    C6_16U32G_CLUSTER = 'c6.16u32g.cluster'
}
/**
    * @export
    * @enum {string}
    */
export enum CreatePostPaidInstanceReqPartitionNumEnum {
    NUMBER_250 = 250,
    NUMBER_300 = 300,
    NUMBER_500 = 500,
    NUMBER_900 = 900,
    NUMBER_1000 = 1000,
    NUMBER_1500 = 1500,
    NUMBER_1800 = 1800,
    NUMBER_2000 = 2000
}
/**
    * @export
    * @enum {string}
    */
export enum CreatePostPaidInstanceReqSaslEnabledMechanismsEnum {
    PLAIN = 'PLAIN',
    SCRAM_SHA_512 = 'SCRAM-SHA-512'
}
/**
    * @export
    * @enum {string}
    */
export enum CreatePostPaidInstanceReqRetentionPolicyEnum {
    TIME_BASE = 'time_base',
    PRODUCE_REJECT = 'produce_reject'
}
/**
    * @export
    * @enum {string}
    */
export enum CreatePostPaidInstanceReqStorageSpecCodeEnum {
    DMS_PHYSICAL_STORAGE_HIGH_V2 = 'dms.physical.storage.high.v2',
    DMS_PHYSICAL_STORAGE_ULTRA_V2 = 'dms.physical.storage.ultra.v2',
    DMS_PHYSICAL_STORAGE_NORMAL = 'dms.physical.storage.normal',
    DMS_PHYSICAL_STORAGE_HIGH = 'dms.physical.storage.high',
    DMS_PHYSICAL_STORAGE_ULTRA = 'dms.physical.storage.ultra'
}
