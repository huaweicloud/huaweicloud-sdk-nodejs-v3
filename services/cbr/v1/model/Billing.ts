

export class Billing {
    public allocated: number;
    private 'charging_mode': BillingChargingModeEnum | undefined;
    private 'cloud_type'?: BillingCloudTypeEnum | undefined;
    private 'consistent_level': BillingConsistentLevelEnum | undefined;
    private 'object_type'?: BillingObjectTypeEnum | undefined;
    private 'order_id'?: string | undefined;
    private 'product_id'?: string | undefined;
    private 'protect_type': BillingProtectTypeEnum | undefined;
    public size: number;
    private 'spec_code': BillingSpecCodeEnum | undefined;
    public status: BillingStatusEnum;
    private 'storage_unit'?: string | undefined;
    public used: number;
    private 'frozen_scene'?: string | undefined;
    private 'is_multi_az'?: boolean | undefined;
    public constructor(allocated?: any, chargingMode?: any, consistentLevel?: any, protectType?: any, size?: any, specCode?: any, status?: any, used?: any) { 
        this['allocated'] = allocated;
        this['charging_mode'] = chargingMode;
        this['consistent_level'] = consistentLevel;
        this['protect_type'] = protectType;
        this['size'] = size;
        this['spec_code'] = specCode;
        this['status'] = status;
        this['used'] = used;
    }
    public withAllocated(allocated: number): Billing {
        this['allocated'] = allocated;
        return this;
    }
    public withChargingMode(chargingMode: BillingChargingModeEnum): Billing {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: BillingChargingModeEnum | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode() {
        return this['charging_mode'];
    }
    public withCloudType(cloudType: BillingCloudTypeEnum): Billing {
        this['cloud_type'] = cloudType;
        return this;
    }
    public set cloudType(cloudType: BillingCloudTypeEnum | undefined) {
        this['cloud_type'] = cloudType;
    }
    public get cloudType() {
        return this['cloud_type'];
    }
    public withConsistentLevel(consistentLevel: BillingConsistentLevelEnum): Billing {
        this['consistent_level'] = consistentLevel;
        return this;
    }
    public set consistentLevel(consistentLevel: BillingConsistentLevelEnum | undefined) {
        this['consistent_level'] = consistentLevel;
    }
    public get consistentLevel() {
        return this['consistent_level'];
    }
    public withObjectType(objectType: BillingObjectTypeEnum): Billing {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: BillingObjectTypeEnum | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType() {
        return this['object_type'];
    }
    public withOrderId(orderId: string): Billing {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId() {
        return this['order_id'];
    }
    public withProductId(productId: string): Billing {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string | undefined) {
        this['product_id'] = productId;
    }
    public get productId() {
        return this['product_id'];
    }
    public withProtectType(protectType: BillingProtectTypeEnum): Billing {
        this['protect_type'] = protectType;
        return this;
    }
    public set protectType(protectType: BillingProtectTypeEnum | undefined) {
        this['protect_type'] = protectType;
    }
    public get protectType() {
        return this['protect_type'];
    }
    public withSize(size: number): Billing {
        this['size'] = size;
        return this;
    }
    public withSpecCode(specCode: BillingSpecCodeEnum): Billing {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: BillingSpecCodeEnum | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode() {
        return this['spec_code'];
    }
    public withStatus(status: BillingStatusEnum): Billing {
        this['status'] = status;
        return this;
    }
    public withStorageUnit(storageUnit: string): Billing {
        this['storage_unit'] = storageUnit;
        return this;
    }
    public set storageUnit(storageUnit: string | undefined) {
        this['storage_unit'] = storageUnit;
    }
    public get storageUnit() {
        return this['storage_unit'];
    }
    public withUsed(used: number): Billing {
        this['used'] = used;
        return this;
    }
    public withFrozenScene(frozenScene: string): Billing {
        this['frozen_scene'] = frozenScene;
        return this;
    }
    public set frozenScene(frozenScene: string | undefined) {
        this['frozen_scene'] = frozenScene;
    }
    public get frozenScene() {
        return this['frozen_scene'];
    }
    public withIsMultiAz(isMultiAz: boolean): Billing {
        this['is_multi_az'] = isMultiAz;
        return this;
    }
    public set isMultiAz(isMultiAz: boolean | undefined) {
        this['is_multi_az'] = isMultiAz;
    }
    public get isMultiAz() {
        return this['is_multi_az'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BillingChargingModeEnum {
    PRE_PAID = 'pre_paid',
    POST_PAID = 'post_paid'
}
/**
    * @export
    * @enum {string}
    */
export enum BillingCloudTypeEnum {
    PUBLIC = 'public',
    HYBRID = 'hybrid'
}
/**
    * @export
    * @enum {string}
    */
export enum BillingConsistentLevelEnum {
    APP_CONSISTENT = 'app_consistent',
    CRASH_CONSISTENT = 'crash_consistent'
}
/**
    * @export
    * @enum {string}
    */
export enum BillingObjectTypeEnum {
    SERVER = 'server',
    DISK = 'disk',
    WORKSPACE = 'workspace',
    VMWARE = 'vmware',
    RDS = 'rds',
    FILE = 'file'
}
/**
    * @export
    * @enum {string}
    */
export enum BillingProtectTypeEnum {
    BACKUP = 'backup',
    REPLICATION = 'replication',
    HYBRID = 'hybrid'
}
/**
    * @export
    * @enum {string}
    */
export enum BillingSpecCodeEnum {
    VAULT_BACKUP_SERVER_NORMAL = 'vault.backup.server.normal',
    VAULT_BACKUP_VOLUME_NORMAL = 'vault.backup.volume.normal'
}
/**
    * @export
    * @enum {string}
    */
export enum BillingStatusEnum {
    AVAILABLE = 'available',
    LOCK = 'lock',
    FROZEN = 'frozen',
    DELETING = 'deleting',
    ERROR = 'error'
}
