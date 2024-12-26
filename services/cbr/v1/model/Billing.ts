

export class Billing {
    public allocated?: number;
    private 'charging_mode'?: BillingChargingModeEnum | string;
    private 'cloud_type'?: BillingCloudTypeEnum | string;
    private 'consistent_level'?: BillingConsistentLevelEnum | string;
    private 'object_type'?: BillingObjectTypeEnum | string;
    private 'order_id'?: string;
    private 'product_id'?: string;
    private 'protect_type'?: BillingProtectTypeEnum | string;
    public size?: number;
    private 'spec_code'?: BillingSpecCodeEnum | string;
    public status?: BillingStatusEnum | string;
    private 'storage_unit'?: string;
    public used?: number;
    private 'frozen_scene'?: string;
    private 'is_multi_az'?: boolean;
    public constructor(allocated?: number, chargingMode?: string, consistentLevel?: string, protectType?: string, size?: number, specCode?: string, status?: string, used?: number) { 
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
    public withChargingMode(chargingMode: BillingChargingModeEnum | string): Billing {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: BillingChargingModeEnum | string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): BillingChargingModeEnum | string | undefined {
        return this['charging_mode'];
    }
    public withCloudType(cloudType: BillingCloudTypeEnum | string): Billing {
        this['cloud_type'] = cloudType;
        return this;
    }
    public set cloudType(cloudType: BillingCloudTypeEnum | string  | undefined) {
        this['cloud_type'] = cloudType;
    }
    public get cloudType(): BillingCloudTypeEnum | string | undefined {
        return this['cloud_type'];
    }
    public withConsistentLevel(consistentLevel: BillingConsistentLevelEnum | string): Billing {
        this['consistent_level'] = consistentLevel;
        return this;
    }
    public set consistentLevel(consistentLevel: BillingConsistentLevelEnum | string  | undefined) {
        this['consistent_level'] = consistentLevel;
    }
    public get consistentLevel(): BillingConsistentLevelEnum | string | undefined {
        return this['consistent_level'];
    }
    public withObjectType(objectType: BillingObjectTypeEnum | string): Billing {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: BillingObjectTypeEnum | string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): BillingObjectTypeEnum | string | undefined {
        return this['object_type'];
    }
    public withOrderId(orderId: string): Billing {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withProductId(productId: string): Billing {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withProtectType(protectType: BillingProtectTypeEnum | string): Billing {
        this['protect_type'] = protectType;
        return this;
    }
    public set protectType(protectType: BillingProtectTypeEnum | string  | undefined) {
        this['protect_type'] = protectType;
    }
    public get protectType(): BillingProtectTypeEnum | string | undefined {
        return this['protect_type'];
    }
    public withSize(size: number): Billing {
        this['size'] = size;
        return this;
    }
    public withSpecCode(specCode: BillingSpecCodeEnum | string): Billing {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: BillingSpecCodeEnum | string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): BillingSpecCodeEnum | string | undefined {
        return this['spec_code'];
    }
    public withStatus(status: BillingStatusEnum | string): Billing {
        this['status'] = status;
        return this;
    }
    public withStorageUnit(storageUnit: string): Billing {
        this['storage_unit'] = storageUnit;
        return this;
    }
    public set storageUnit(storageUnit: string  | undefined) {
        this['storage_unit'] = storageUnit;
    }
    public get storageUnit(): string | undefined {
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
    public set frozenScene(frozenScene: string  | undefined) {
        this['frozen_scene'] = frozenScene;
    }
    public get frozenScene(): string | undefined {
        return this['frozen_scene'];
    }
    public withIsMultiAz(isMultiAz: boolean): Billing {
        this['is_multi_az'] = isMultiAz;
        return this;
    }
    public set isMultiAz(isMultiAz: boolean  | undefined) {
        this['is_multi_az'] = isMultiAz;
    }
    public get isMultiAz(): boolean | undefined {
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
    TURBO = 'turbo',
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
    VAULT_BACKUP_VOLUME_NORMAL = 'vault.backup.volume.normal',
    VAULT_BACKUP_TURBO_NORMAL = 'vault.backup.turbo.normal',
    VAULT_BACKUP_DATABASE_NORMAL = 'vault.backup.database.normal',
    VAULT_HYBRID_SERVER_NORMAL = 'vault.hybrid.server.normal',
    VAULT_REPLICATION_SERVER_NORMAL = 'vault.replication.server.normal'
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
