import { BssParam } from './BssParam';
import { TagEntity } from './TagEntity';


export class CreateInstanceReq {
    public name: string;
    public description?: string;
    public engine: CreateInstanceReqEngineEnum;
    private 'engine_version': CreateInstanceReqEngineVersionEnum | undefined;
    private 'storage_space': number | undefined;
    private 'access_user': string | undefined;
    public password: string;
    private 'vpc_id': string | undefined;
    private 'security_group_id': string | undefined;
    private 'subnet_id': string | undefined;
    private 'available_zones': Array<string> | undefined;
    private 'product_id': string | undefined;
    private 'broker_num'?: CreateInstanceReqBrokerNumEnum | undefined;
    private 'maintain_begin'?: string | undefined;
    private 'maintain_end'?: string | undefined;
    private 'enable_publicip'?: boolean | undefined;
    private 'publicip_id'?: string | undefined;
    private 'ssl_enable'?: boolean | undefined;
    private 'storage_spec_code': CreateInstanceReqStorageSpecCodeEnum | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public tags?: Array<TagEntity>;
    private 'bss_param'?: BssParam | undefined;
    public constructor(name?: any, engine?: any, engineVersion?: any, storageSpace?: any, accessUser?: any, password?: any, vpcId?: any, securityGroupId?: any, subnetId?: any, availableZones?: any, productId?: any, storageSpecCode?: any) { 
        this['name'] = name;
        this['engine'] = engine;
        this['engine_version'] = engineVersion;
        this['storage_space'] = storageSpace;
        this['access_user'] = accessUser;
        this['password'] = password;
        this['vpc_id'] = vpcId;
        this['security_group_id'] = securityGroupId;
        this['subnet_id'] = subnetId;
        this['available_zones'] = availableZones;
        this['product_id'] = productId;
        this['storage_spec_code'] = storageSpecCode;
    }
    public withName(name: string): CreateInstanceReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateInstanceReq {
        this['description'] = description;
        return this;
    }
    public withEngine(engine: CreateInstanceReqEngineEnum): CreateInstanceReq {
        this['engine'] = engine;
        return this;
    }
    public withEngineVersion(engineVersion: CreateInstanceReqEngineVersionEnum): CreateInstanceReq {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: CreateInstanceReqEngineVersionEnum | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion() {
        return this['engine_version'];
    }
    public withStorageSpace(storageSpace: number): CreateInstanceReq {
        this['storage_space'] = storageSpace;
        return this;
    }
    public set storageSpace(storageSpace: number | undefined) {
        this['storage_space'] = storageSpace;
    }
    public get storageSpace() {
        return this['storage_space'];
    }
    public withAccessUser(accessUser: string): CreateInstanceReq {
        this['access_user'] = accessUser;
        return this;
    }
    public set accessUser(accessUser: string | undefined) {
        this['access_user'] = accessUser;
    }
    public get accessUser() {
        return this['access_user'];
    }
    public withPassword(password: string): CreateInstanceReq {
        this['password'] = password;
        return this;
    }
    public withVpcId(vpcId: string): CreateInstanceReq {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withSecurityGroupId(securityGroupId: string): CreateInstanceReq {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId() {
        return this['security_group_id'];
    }
    public withSubnetId(subnetId: string): CreateInstanceReq {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
    public withAvailableZones(availableZones: Array<string>): CreateInstanceReq {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<string> | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones() {
        return this['available_zones'];
    }
    public withProductId(productId: string): CreateInstanceReq {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string | undefined) {
        this['product_id'] = productId;
    }
    public get productId() {
        return this['product_id'];
    }
    public withBrokerNum(brokerNum: CreateInstanceReqBrokerNumEnum): CreateInstanceReq {
        this['broker_num'] = brokerNum;
        return this;
    }
    public set brokerNum(brokerNum: CreateInstanceReqBrokerNumEnum | undefined) {
        this['broker_num'] = brokerNum;
    }
    public get brokerNum() {
        return this['broker_num'];
    }
    public withMaintainBegin(maintainBegin: string): CreateInstanceReq {
        this['maintain_begin'] = maintainBegin;
        return this;
    }
    public set maintainBegin(maintainBegin: string | undefined) {
        this['maintain_begin'] = maintainBegin;
    }
    public get maintainBegin() {
        return this['maintain_begin'];
    }
    public withMaintainEnd(maintainEnd: string): CreateInstanceReq {
        this['maintain_end'] = maintainEnd;
        return this;
    }
    public set maintainEnd(maintainEnd: string | undefined) {
        this['maintain_end'] = maintainEnd;
    }
    public get maintainEnd() {
        return this['maintain_end'];
    }
    public withEnablePublicip(enablePublicip: boolean): CreateInstanceReq {
        this['enable_publicip'] = enablePublicip;
        return this;
    }
    public set enablePublicip(enablePublicip: boolean | undefined) {
        this['enable_publicip'] = enablePublicip;
    }
    public get enablePublicip() {
        return this['enable_publicip'];
    }
    public withPublicipId(publicipId: string): CreateInstanceReq {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId() {
        return this['publicip_id'];
    }
    public withSslEnable(sslEnable: boolean): CreateInstanceReq {
        this['ssl_enable'] = sslEnable;
        return this;
    }
    public set sslEnable(sslEnable: boolean | undefined) {
        this['ssl_enable'] = sslEnable;
    }
    public get sslEnable() {
        return this['ssl_enable'];
    }
    public withStorageSpecCode(storageSpecCode: CreateInstanceReqStorageSpecCodeEnum): CreateInstanceReq {
        this['storage_spec_code'] = storageSpecCode;
        return this;
    }
    public set storageSpecCode(storageSpecCode: CreateInstanceReqStorageSpecCodeEnum | undefined) {
        this['storage_spec_code'] = storageSpecCode;
    }
    public get storageSpecCode() {
        return this['storage_spec_code'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateInstanceReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<TagEntity>): CreateInstanceReq {
        this['tags'] = tags;
        return this;
    }
    public withBssParam(bssParam: BssParam): CreateInstanceReq {
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
export enum CreateInstanceReqEngineEnum {
    RABBITMQ = 'rabbitmq'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateInstanceReqEngineVersionEnum {
    E_3_8_35 = '3.8.35',
    E_3_7_17 = '3.7.17'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateInstanceReqBrokerNumEnum {
    NUMBER_1 = 1,
    NUMBER_3 = 3,
    NUMBER_5 = 5,
    NUMBER_7 = 7
}
/**
    * @export
    * @enum {string}
    */
export enum CreateInstanceReqStorageSpecCodeEnum {
    DMS_PHYSICAL_STORAGE_HIGH_V2 = 'dms.physical.storage.high.v2',
    DMS_PHYSICAL_STORAGE_ULTRA_V2 = 'dms.physical.storage.ultra.v2',
    DMS_PHYSICAL_STORAGE_HIGH_DSS_V2 = 'dms.physical.storage.high.dss.v2',
    DMS_PHYSICAL_STORAGE_ULTRA_DSS_V2 = 'dms.physical.storage.ultra.dss.v2'
}
