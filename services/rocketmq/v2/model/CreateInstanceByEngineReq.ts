import { BssParam } from './BssParam';


export class CreateInstanceByEngineReq {
    public name: string;
    public description?: string;
    public engine: CreateInstanceByEngineReqEngineEnum;
    private 'engine_version': CreateInstanceByEngineReqEngineVersionEnum | undefined;
    private 'storage_space': number | undefined;
    private 'vpc_id': string | undefined;
    private 'subnet_id': string | undefined;
    private 'security_group_id': string | undefined;
    private 'available_zones': Array<string> | undefined;
    private 'product_id': CreateInstanceByEngineReqProductIdEnum | undefined;
    private 'ssl_enable'?: boolean | undefined;
    private 'storage_spec_code': CreateInstanceByEngineReqStorageSpecCodeEnum | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'enable_acl'?: boolean | undefined;
    private 'ipv6_enable'?: boolean | undefined;
    private 'enable_publicip'?: boolean | undefined;
    private 'publicip_id'?: string | undefined;
    private 'broker_num': number | undefined;
    private 'bss_param'?: BssParam | undefined;
    public constructor(name?: any, engine?: any, engineVersion?: any, storageSpace?: any, vpcId?: any, subnetId?: any, securityGroupId?: any, availableZones?: any, productId?: any, storageSpecCode?: any, brokerNum?: any) { 
        this['name'] = name;
        this['engine'] = engine;
        this['engine_version'] = engineVersion;
        this['storage_space'] = storageSpace;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
        this['security_group_id'] = securityGroupId;
        this['available_zones'] = availableZones;
        this['product_id'] = productId;
        this['storage_spec_code'] = storageSpecCode;
        this['broker_num'] = brokerNum;
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
    public withProductId(productId: CreateInstanceByEngineReqProductIdEnum): CreateInstanceByEngineReq {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: CreateInstanceByEngineReqProductIdEnum | undefined) {
        this['product_id'] = productId;
    }
    public get productId() {
        return this['product_id'];
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
    public withEnableAcl(enableAcl: boolean): CreateInstanceByEngineReq {
        this['enable_acl'] = enableAcl;
        return this;
    }
    public set enableAcl(enableAcl: boolean | undefined) {
        this['enable_acl'] = enableAcl;
    }
    public get enableAcl() {
        return this['enable_acl'];
    }
    public withIpv6Enable(ipv6Enable: boolean): CreateInstanceByEngineReq {
        this['ipv6_enable'] = ipv6Enable;
        return this;
    }
    public set ipv6Enable(ipv6Enable: boolean | undefined) {
        this['ipv6_enable'] = ipv6Enable;
    }
    public get ipv6Enable() {
        return this['ipv6_enable'];
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
    RELIABILITY = 'reliability'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateInstanceByEngineReqEngineVersionEnum {
    E_4_8_0 = '4.8.0'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateInstanceByEngineReqProductIdEnum {
    C6_4U8G_CLUSTER_SMALL = 'c6.4u8g.cluster.small',
    C6_4U8G_CLUSTER = 'c6.4u8g.cluster',
    C6_8U16G_CLUSTER = 'c6.8u16g.cluster',
    C6_12U24G_CLUSTER = 'c6.12u24g.cluster',
    C6_16U32G_CLUSTER = 'c6.16u32g.cluster'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateInstanceByEngineReqStorageSpecCodeEnum {
    DMS_PHYSICAL_STORAGE_HIGH_V2 = 'dms.physical.storage.high.v2',
    DMS_PHYSICAL_STORAGE_ULTRA_V2 = 'dms.physical.storage.ultra.v2'
}
