import { RecycleDatastore } from './RecycleDatastore';


export class RecycleInstance {
    public id?: string;
    public name?: string;
    public mode?: string;
    private 'product_type'?: string;
    private 'data_store'?: RecycleDatastore;
    private 'charge_type'?: string;
    private 'enterprise_project_id'?: string;
    private 'backup_id'?: string;
    private 'created_at'?: string;
    private 'deleted_at'?: string;
    private 'retained_until'?: string;
    public constructor() { 
    }
    public withId(id: string): RecycleInstance {
        this['id'] = id;
        return this;
    }
    public withName(name: string): RecycleInstance {
        this['name'] = name;
        return this;
    }
    public withMode(mode: string): RecycleInstance {
        this['mode'] = mode;
        return this;
    }
    public withProductType(productType: string): RecycleInstance {
        this['product_type'] = productType;
        return this;
    }
    public set productType(productType: string  | undefined) {
        this['product_type'] = productType;
    }
    public get productType(): string | undefined {
        return this['product_type'];
    }
    public withDataStore(dataStore: RecycleDatastore): RecycleInstance {
        this['data_store'] = dataStore;
        return this;
    }
    public set dataStore(dataStore: RecycleDatastore  | undefined) {
        this['data_store'] = dataStore;
    }
    public get dataStore(): RecycleDatastore | undefined {
        return this['data_store'];
    }
    public withChargeType(chargeType: string): RecycleInstance {
        this['charge_type'] = chargeType;
        return this;
    }
    public set chargeType(chargeType: string  | undefined) {
        this['charge_type'] = chargeType;
    }
    public get chargeType(): string | undefined {
        return this['charge_type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecycleInstance {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBackupId(backupId: string): RecycleInstance {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withCreatedAt(createdAt: string): RecycleInstance {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withDeletedAt(deletedAt: string): RecycleInstance {
        this['deleted_at'] = deletedAt;
        return this;
    }
    public set deletedAt(deletedAt: string  | undefined) {
        this['deleted_at'] = deletedAt;
    }
    public get deletedAt(): string | undefined {
        return this['deleted_at'];
    }
    public withRetainedUntil(retainedUntil: string): RecycleInstance {
        this['retained_until'] = retainedUntil;
        return this;
    }
    public set retainedUntil(retainedUntil: string  | undefined) {
        this['retained_until'] = retainedUntil;
    }
    public get retainedUntil(): string | undefined {
        return this['retained_until'];
    }
}