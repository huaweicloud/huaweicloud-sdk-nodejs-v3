import { RecycleDatastore } from './RecycleDatastore';


export class RecycleInstance {
    public id?: string;
    public name?: string;
    public mode?: string;
    public datastore?: RecycleDatastore;
    private 'charge_mode'?: string;
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
    public withDatastore(datastore: RecycleDatastore): RecycleInstance {
        this['datastore'] = datastore;
        return this;
    }
    public withChargeMode(chargeMode: string): RecycleInstance {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
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