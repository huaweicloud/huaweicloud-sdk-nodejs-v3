

export class CreatePostPaidInstanceReq {
    public name?: string;
    public description?: string;
    public engine?: CreatePostPaidInstanceReqEngineEnum | string;
    private 'engine_version'?: CreatePostPaidInstanceReqEngineVersionEnum | string;
    private 'storage_space'?: number;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_id'?: string;
    private 'available_zones'?: Array<string>;
    private 'product_id'?: CreatePostPaidInstanceReqProductIdEnum | string;
    private 'ssl_enable'?: boolean;
    private 'storage_spec_code'?: CreatePostPaidInstanceReqStorageSpecCodeEnum | string;
    private 'enterprise_project_id'?: string;
    private 'enable_acl'?: boolean;
    private 'ipv6_enable'?: boolean;
    private 'enable_publicip'?: boolean;
    private 'publicip_id'?: string;
    private 'broker_num'?: number;
    public constructor(name?: string, engine?: string, engineVersion?: string, storageSpace?: number, vpcId?: string, subnetId?: string, securityGroupId?: string, availableZones?: Array<string>, productId?: string, storageSpecCode?: string, brokerNum?: number) { 
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
    public withName(name: string): CreatePostPaidInstanceReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreatePostPaidInstanceReq {
        this['description'] = description;
        return this;
    }
    public withEngine(engine: CreatePostPaidInstanceReqEngineEnum | string): CreatePostPaidInstanceReq {
        this['engine'] = engine;
        return this;
    }
    public withEngineVersion(engineVersion: CreatePostPaidInstanceReqEngineVersionEnum | string): CreatePostPaidInstanceReq {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: CreatePostPaidInstanceReqEngineVersionEnum | string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): CreatePostPaidInstanceReqEngineVersionEnum | string | undefined {
        return this['engine_version'];
    }
    public withStorageSpace(storageSpace: number): CreatePostPaidInstanceReq {
        this['storage_space'] = storageSpace;
        return this;
    }
    public set storageSpace(storageSpace: number  | undefined) {
        this['storage_space'] = storageSpace;
    }
    public get storageSpace(): number | undefined {
        return this['storage_space'];
    }
    public withVpcId(vpcId: string): CreatePostPaidInstanceReq {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): CreatePostPaidInstanceReq {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): CreatePostPaidInstanceReq {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withAvailableZones(availableZones: Array<string>): CreatePostPaidInstanceReq {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<string>  | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones(): Array<string> | undefined {
        return this['available_zones'];
    }
    public withProductId(productId: CreatePostPaidInstanceReqProductIdEnum | string): CreatePostPaidInstanceReq {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: CreatePostPaidInstanceReqProductIdEnum | string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): CreatePostPaidInstanceReqProductIdEnum | string | undefined {
        return this['product_id'];
    }
    public withSslEnable(sslEnable: boolean): CreatePostPaidInstanceReq {
        this['ssl_enable'] = sslEnable;
        return this;
    }
    public set sslEnable(sslEnable: boolean  | undefined) {
        this['ssl_enable'] = sslEnable;
    }
    public get sslEnable(): boolean | undefined {
        return this['ssl_enable'];
    }
    public withStorageSpecCode(storageSpecCode: CreatePostPaidInstanceReqStorageSpecCodeEnum | string): CreatePostPaidInstanceReq {
        this['storage_spec_code'] = storageSpecCode;
        return this;
    }
    public set storageSpecCode(storageSpecCode: CreatePostPaidInstanceReqStorageSpecCodeEnum | string  | undefined) {
        this['storage_spec_code'] = storageSpecCode;
    }
    public get storageSpecCode(): CreatePostPaidInstanceReqStorageSpecCodeEnum | string | undefined {
        return this['storage_spec_code'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreatePostPaidInstanceReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEnableAcl(enableAcl: boolean): CreatePostPaidInstanceReq {
        this['enable_acl'] = enableAcl;
        return this;
    }
    public set enableAcl(enableAcl: boolean  | undefined) {
        this['enable_acl'] = enableAcl;
    }
    public get enableAcl(): boolean | undefined {
        return this['enable_acl'];
    }
    public withIpv6Enable(ipv6Enable: boolean): CreatePostPaidInstanceReq {
        this['ipv6_enable'] = ipv6Enable;
        return this;
    }
    public set ipv6Enable(ipv6Enable: boolean  | undefined) {
        this['ipv6_enable'] = ipv6Enable;
    }
    public get ipv6Enable(): boolean | undefined {
        return this['ipv6_enable'];
    }
    public withEnablePublicip(enablePublicip: boolean): CreatePostPaidInstanceReq {
        this['enable_publicip'] = enablePublicip;
        return this;
    }
    public set enablePublicip(enablePublicip: boolean  | undefined) {
        this['enable_publicip'] = enablePublicip;
    }
    public get enablePublicip(): boolean | undefined {
        return this['enable_publicip'];
    }
    public withPublicipId(publicipId: string): CreatePostPaidInstanceReq {
        this['publicip_id'] = publicipId;
        return this;
    }
    public set publicipId(publicipId: string  | undefined) {
        this['publicip_id'] = publicipId;
    }
    public get publicipId(): string | undefined {
        return this['publicip_id'];
    }
    public withBrokerNum(brokerNum: number): CreatePostPaidInstanceReq {
        this['broker_num'] = brokerNum;
        return this;
    }
    public set brokerNum(brokerNum: number  | undefined) {
        this['broker_num'] = brokerNum;
    }
    public get brokerNum(): number | undefined {
        return this['broker_num'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreatePostPaidInstanceReqEngineEnum {
    RELIABILITY = 'reliability'
}
/**
    * @export
    * @enum {string}
    */
export enum CreatePostPaidInstanceReqEngineVersionEnum {
    E_4_8_0 = '4.8.0',
    E_5_X = '5.x'
}
/**
    * @export
    * @enum {string}
    */
export enum CreatePostPaidInstanceReqProductIdEnum {
    C6_4U8G_CLUSTER = 'c6.4u8g.cluster',
    C6_8U16G_CLUSTER = 'c6.8u16g.cluster',
    C6_12U24G_CLUSTER = 'c6.12u24g.cluster',
    C6_16U32G_CLUSTER = 'c6.16u32g.cluster'
}
/**
    * @export
    * @enum {string}
    */
export enum CreatePostPaidInstanceReqStorageSpecCodeEnum {
    DMS_PHYSICAL_STORAGE_HIGH_V2 = 'dms.physical.storage.high.v2',
    DMS_PHYSICAL_STORAGE_ULTRA_V2 = 'dms.physical.storage.ultra.v2'
}
