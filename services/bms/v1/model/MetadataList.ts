

export class MetadataList {
    public chargingMode?: MetadataListChargingModeEnum | string;
    private 'metering.order_id'?: string;
    private 'metering.product_id'?: string;
    private 'vpc_id'?: string;
    private 'metering.image_id'?: string;
    private 'metering.imagetype'?: MetadataListMeteringImagetypeEnum | string;
    public baremetalPortIDList?: string;
    private 'metering.resourcespeccode'?: string;
    private 'metering.resourcetype'?: string;
    private 'image_name'?: string;
    private 'op_svc_userid'?: string;
    private 'os_type'?: MetadataListOsTypeEnum | string;
    private '__bms_support_evs'?: string;
    private 'os_bit'?: MetadataListOsBitEnum | string;
    public constructor() { 
    }
    public withChargingMode(chargingMode: MetadataListChargingModeEnum | string): MetadataList {
        this['chargingMode'] = chargingMode;
        return this;
    }
    public withMeteringOrderId(meteringOrderId: string): MetadataList {
        this['metering.order_id'] = meteringOrderId;
        return this;
    }
    public set meteringOrderId(meteringOrderId: string  | undefined) {
        this['metering.order_id'] = meteringOrderId;
    }
    public get meteringOrderId(): string | undefined {
        return this['metering.order_id'];
    }
    public withMeteringProductId(meteringProductId: string): MetadataList {
        this['metering.product_id'] = meteringProductId;
        return this;
    }
    public set meteringProductId(meteringProductId: string  | undefined) {
        this['metering.product_id'] = meteringProductId;
    }
    public get meteringProductId(): string | undefined {
        return this['metering.product_id'];
    }
    public withVpcId(vpcId: string): MetadataList {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withMeteringImageId(meteringImageId: string): MetadataList {
        this['metering.image_id'] = meteringImageId;
        return this;
    }
    public set meteringImageId(meteringImageId: string  | undefined) {
        this['metering.image_id'] = meteringImageId;
    }
    public get meteringImageId(): string | undefined {
        return this['metering.image_id'];
    }
    public withMeteringImagetype(meteringImagetype: MetadataListMeteringImagetypeEnum | string): MetadataList {
        this['metering.imagetype'] = meteringImagetype;
        return this;
    }
    public set meteringImagetype(meteringImagetype: MetadataListMeteringImagetypeEnum | string  | undefined) {
        this['metering.imagetype'] = meteringImagetype;
    }
    public get meteringImagetype(): MetadataListMeteringImagetypeEnum | string | undefined {
        return this['metering.imagetype'];
    }
    public withBaremetalPortIDList(baremetalPortIDList: string): MetadataList {
        this['baremetalPortIDList'] = baremetalPortIDList;
        return this;
    }
    public withMeteringResourcespeccode(meteringResourcespeccode: string): MetadataList {
        this['metering.resourcespeccode'] = meteringResourcespeccode;
        return this;
    }
    public set meteringResourcespeccode(meteringResourcespeccode: string  | undefined) {
        this['metering.resourcespeccode'] = meteringResourcespeccode;
    }
    public get meteringResourcespeccode(): string | undefined {
        return this['metering.resourcespeccode'];
    }
    public withMeteringResourcetype(meteringResourcetype: string): MetadataList {
        this['metering.resourcetype'] = meteringResourcetype;
        return this;
    }
    public set meteringResourcetype(meteringResourcetype: string  | undefined) {
        this['metering.resourcetype'] = meteringResourcetype;
    }
    public get meteringResourcetype(): string | undefined {
        return this['metering.resourcetype'];
    }
    public withImageName(imageName: string): MetadataList {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withOpSvcUserid(opSvcUserid: string): MetadataList {
        this['op_svc_userid'] = opSvcUserid;
        return this;
    }
    public set opSvcUserid(opSvcUserid: string  | undefined) {
        this['op_svc_userid'] = opSvcUserid;
    }
    public get opSvcUserid(): string | undefined {
        return this['op_svc_userid'];
    }
    public withOsType(osType: MetadataListOsTypeEnum | string): MetadataList {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: MetadataListOsTypeEnum | string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): MetadataListOsTypeEnum | string | undefined {
        return this['os_type'];
    }
    public withBmsSupportEvs(bmsSupportEvs: string): MetadataList {
        this['__bms_support_evs'] = bmsSupportEvs;
        return this;
    }
    public set bmsSupportEvs(bmsSupportEvs: string  | undefined) {
        this['__bms_support_evs'] = bmsSupportEvs;
    }
    public get bmsSupportEvs(): string | undefined {
        return this['__bms_support_evs'];
    }
    public withOsBit(osBit: MetadataListOsBitEnum | string): MetadataList {
        this['os_bit'] = osBit;
        return this;
    }
    public set osBit(osBit: MetadataListOsBitEnum | string  | undefined) {
        this['os_bit'] = osBit;
    }
    public get osBit(): MetadataListOsBitEnum | string | undefined {
        return this['os_bit'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MetadataListChargingModeEnum {
    E_1 = '1'
}
/**
    * @export
    * @enum {string}
    */
export enum MetadataListMeteringImagetypeEnum {
    GOLD = 'gold',
    PRIVATE = 'private',
    SHARED = 'shared'
}
/**
    * @export
    * @enum {string}
    */
export enum MetadataListOsTypeEnum {
    LINUX = 'Linux',
    WINDOWS = 'Windows'
}
/**
    * @export
    * @enum {string}
    */
export enum MetadataListOsBitEnum {
    E_32 = '32',
    E_64 = '64'
}
