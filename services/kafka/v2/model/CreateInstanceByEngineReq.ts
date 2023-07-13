import { BssParam } from './BssParam';
import { TagEntity } from './TagEntity';


export class CreateInstanceByEngineReq {
    public name: string;
    public description?: string;
    public engine: CreateInstanceByEngineReqEngineEnum;
    private 'engine_version': CreateInstanceByEngineReqEngineVersionEnum | undefined;
    private 'broker_num': number | undefined;
    private 'storage_space': number | undefined;
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
    private 'publicip_id'?: string | undefined;
    private 'ssl_enable'?: boolean | undefined;
    private 'kafka_security_protocol'?: string | undefined;
    private 'sasl_enabled_mechanisms'?: Array<CreateInstanceByEngineReqSaslEnabledMechanismsEnum> | undefined;
    private 'retention_policy'?: CreateInstanceByEngineReqRetentionPolicyEnum | undefined;
    private 'connector_enable'?: boolean | undefined;
    private 'enable_auto_topic'?: boolean | undefined;
    private 'storage_spec_code': CreateInstanceByEngineReqStorageSpecCodeEnum | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public tags?: Array<TagEntity>;
    private 'arch_type'?: string | undefined;
    private 'vpc_client_plain'?: boolean | undefined;
    private 'bss_param'?: BssParam | undefined;
    public constructor(name?: any, engine?: any, engineVersion?: any, brokerNum?: any, storageSpace?: any, vpcId?: any, securityGroupId?: any, subnetId?: any, availableZones?: any, productId?: any, storageSpecCode?: any) { 
        this['name'] = name;
        this['engine'] = engine;
        this['engine_version'] = engineVersion;
        this['broker_num'] = brokerNum;
        this['storage_space'] = storageSpace;
        this['vpc_id'] = vpcId;
        this['security_group_id'] = securityGroupId;
        this['subnet_id'] = subnetId;
        this['available_zones'] = availableZones;
        this['product_id'] = productId;
        this['storage_spec_code'] = storageSpecCode;
    }
    public withName(name: string): CreateInstanceByEngineReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateInstanceByEngineReq {
        this['description'] = description;
        return this;
    }
    public withEngine(engine: CreateInstanceByEngineReqEngineEnum): CreateInstanceByEngineReq {
        this['engine'] = engine;
        return this;
    }
    public withEngineVersion(engineVersion: CreateInstanceByEngineReqEngineVersionEnum): CreateInstanceByEngineReq {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: CreateInstanceByEngineReqEngineVersionEnum | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion() {
        return this['engine_version'];
    }
    public withBrokerNum(brokerNum: number): CreateInstanceByEngineReq {
        this['broker_num'] = brokerNum;
        return this;
    }
    public set brokerNum(brokerNum: number | undefined) {
        this['broker_num'] = brokerNum;
    }
    public get brokerNum() {
        return this['broker_num'];
    }
    public withStorageSpace(storageSpace: number): CreateInstanceByEngineReq {
        this['storage_space'] = storageSpace;
        return this;
    }
    public set storageSpace(storageSpace: number | undefined) {
        this['storage_space'] = storageSpace;
    }
    public get storageSpace() {
        return this['storage_space'];
    }
    public withAccessUser(accessUser: string): CreateInstanceByEngineReq {
        this['access_user'] = accessUser;
        return this;
    }
    public set accessUser(accessUser: string | undefined) {
        this['access_user'] = accessUser;
    }
    public get accessUser() {
        return this['access_user'];
    }
    public withPassword(password: string): CreateInstanceByEngineReq {
        this['password'] = password;
        return this;
    }
    public withVpcId(vpcId: string): CreateInstanceByEngineReq {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withSecurityGroupId(securityGroupId: string): CreateInstanceByEngineReq {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId() {
        return this['security_group_id'];
    }
    public withSubnetId(subnetId: string): CreateInstanceByEngineReq {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
    public withAvailableZones(availableZones: Array<string>): CreateInstanceByEngineReq {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<string> | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones() {
        return this['available_zones'];
    }
    public withProductId(productId: string): CreateInstanceByEngineReq {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string | undefined) {
        this['product_id'] = productId;
    }
    public get productId() {
        return this['product_id'];
    }
    public withKafkaManagerUser(kafkaManagerUser: string): CreateInstanceByEngineReq {
        this['kafka_manager_user'] = kafkaManagerUser;
        return this;
    }
    public set kafkaManagerUser(kafkaManagerUser: string | undefined) {
        this['kafka_manager_user'] = kafkaManagerUser;
    }
    public get kafkaManagerUser() {
        return this['kafka_manager_user'];
    }
    public withKafkaManagerPassword(kafkaManagerPassword: string): CreateInstanceByEngineReq {
        this['kafka_manager_password'] = kafkaManagerPassword;
        return this;
    }
    public set kafkaManagerPassword(kafkaManagerPassword: string | undefined) {
        this['kafka_manager_password'] = kafkaManagerPassword;
    }
    public get kafkaManagerPassword() {
        return this['kafka_manager_password'];
    }
    public withMaintainBegin(maintainBegin: string): CreateInstanceByEngineReq {
        this['maintain_begin'] = maintainBegin;
        return this;
    }
    public set maintainBegin(maintainBegin: string | undefined) {
        this['maintain_begin'] = maintainBegin;
    }
    public get maintainBegin() {
        return this['maintain_begin'];
    }
    public withMaintainEnd(maintainEnd: string): CreateInstanceByEngineReq {
        this['maintain_end'] = maintainEnd;
        return this;
    }
    public set maintainEnd(maintainEnd: string | undefined) {
        this['maintain_end'] = maintainEnd;
    }
    public get maintainEnd() {
        return this['maintain_end'];
    }
    public withEnablePublicip(enablePublicip: boolean): CreateInstanceByEngineReq {
        this['enable_publicip'] = enablePublicip;
        return this;
    }
    public set enablePublicip(enablePublicip: boolean | undefined) {
        this['enable_publicip'] = enablePublicip;
    }
    public get enablePublicip() {
        return this['enable_publicip'];
    }
    public withPublicipId(publicipId: string): CreateInstanceByEngineReq {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId() {
        return this['publicip_id'];
    }
    public withSslEnable(sslEnable: boolean): CreateInstanceByEngineReq {
        this['ssl_enable'] = sslEnable;
        return this;
    }
    public set sslEnable(sslEnable: boolean | undefined) {
        this['ssl_enable'] = sslEnable;
    }
    public get sslEnable() {
        return this['ssl_enable'];
    }
    public withKafkaSecurityProtocol(kafkaSecurityProtocol: string): CreateInstanceByEngineReq {
        this['kafka_security_protocol'] = kafkaSecurityProtocol;
        return this;
    }
    public set kafkaSecurityProtocol(kafkaSecurityProtocol: string | undefined) {
        this['kafka_security_protocol'] = kafkaSecurityProtocol;
    }
    public get kafkaSecurityProtocol() {
        return this['kafka_security_protocol'];
    }
    public withSaslEnabledMechanisms(saslEnabledMechanisms: Array<CreateInstanceByEngineReqSaslEnabledMechanismsEnum>): CreateInstanceByEngineReq {
        this['sasl_enabled_mechanisms'] = saslEnabledMechanisms;
        return this;
    }
    public set saslEnabledMechanisms(saslEnabledMechanisms: Array<CreateInstanceByEngineReqSaslEnabledMechanismsEnum> | undefined) {
        this['sasl_enabled_mechanisms'] = saslEnabledMechanisms;
    }
    public get saslEnabledMechanisms() {
        return this['sasl_enabled_mechanisms'];
    }
    public withRetentionPolicy(retentionPolicy: CreateInstanceByEngineReqRetentionPolicyEnum): CreateInstanceByEngineReq {
        this['retention_policy'] = retentionPolicy;
        return this;
    }
    public set retentionPolicy(retentionPolicy: CreateInstanceByEngineReqRetentionPolicyEnum | undefined) {
        this['retention_policy'] = retentionPolicy;
    }
    public get retentionPolicy() {
        return this['retention_policy'];
    }
    public withConnectorEnable(connectorEnable: boolean): CreateInstanceByEngineReq {
        this['connector_enable'] = connectorEnable;
        return this;
    }
    public set connectorEnable(connectorEnable: boolean | undefined) {
        this['connector_enable'] = connectorEnable;
    }
    public get connectorEnable() {
        return this['connector_enable'];
    }
    public withEnableAutoTopic(enableAutoTopic: boolean): CreateInstanceByEngineReq {
        this['enable_auto_topic'] = enableAutoTopic;
        return this;
    }
    public set enableAutoTopic(enableAutoTopic: boolean | undefined) {
        this['enable_auto_topic'] = enableAutoTopic;
    }
    public get enableAutoTopic() {
        return this['enable_auto_topic'];
    }
    public withStorageSpecCode(storageSpecCode: CreateInstanceByEngineReqStorageSpecCodeEnum): CreateInstanceByEngineReq {
        this['storage_spec_code'] = storageSpecCode;
        return this;
    }
    public set storageSpecCode(storageSpecCode: CreateInstanceByEngineReqStorageSpecCodeEnum | undefined) {
        this['storage_spec_code'] = storageSpecCode;
    }
    public get storageSpecCode() {
        return this['storage_spec_code'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateInstanceByEngineReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<TagEntity>): CreateInstanceByEngineReq {
        this['tags'] = tags;
        return this;
    }
    public withArchType(archType: string): CreateInstanceByEngineReq {
        this['arch_type'] = archType;
        return this;
    }
    public set archType(archType: string | undefined) {
        this['arch_type'] = archType;
    }
    public get archType() {
        return this['arch_type'];
    }
    public withVpcClientPlain(vpcClientPlain: boolean): CreateInstanceByEngineReq {
        this['vpc_client_plain'] = vpcClientPlain;
        return this;
    }
    public set vpcClientPlain(vpcClientPlain: boolean | undefined) {
        this['vpc_client_plain'] = vpcClientPlain;
    }
    public get vpcClientPlain() {
        return this['vpc_client_plain'];
    }
    public withBssParam(bssParam: BssParam): CreateInstanceByEngineReq {
        this['bss_param'] = bssParam;
        return this;
    }
    public set bssParam(bssParam: BssParam | undefined) {
        this['bss_param'] = bssParam;
    }
    public get bssParam() {
        return this['bss_param'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateInstanceByEngineReqEngineEnum {
    KAFKA = 'kafka'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateInstanceByEngineReqEngineVersionEnum {
    E_1_1_0 = '1.1.0',
    E_2_3_0 = '2.3.0',
    E_2_7 = '2.7'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateInstanceByEngineReqSaslEnabledMechanismsEnum {
    PLAIN = 'PLAIN',
    SCRAM_SHA_512 = 'SCRAM-SHA-512'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateInstanceByEngineReqRetentionPolicyEnum {
    TIME_BASE = 'time_base',
    PRODUCE_REJECT = 'produce_reject'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateInstanceByEngineReqStorageSpecCodeEnum {
    DMS_PHYSICAL_STORAGE_HIGH_V2 = 'dms.physical.storage.high.v2',
    DMS_PHYSICAL_STORAGE_ULTRA_V2 = 'dms.physical.storage.ultra.v2'
}
