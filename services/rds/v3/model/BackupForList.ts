import { BackupDatabase } from './BackupDatabase';
import { BackupDatastore } from './BackupDatastore';


export class BackupForList {
    public id?: string;
    private 'instance_id'?: string;
    public name?: string;
    public databases?: Array<BackupDatabase>;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public status?: BackupForListStatusEnum | string;
    public type?: BackupForListTypeEnum | string;
    public size?: number;
    public datastore?: BackupDatastore;
    private 'associated_with_ddm'?: boolean;
    private 'min_data_volume_capacity_for_restore'?: number;
    public constructor(id?: string, instanceId?: string, name?: string, beginTime?: string, endTime?: string, status?: string, type?: string, size?: number, datastore?: BackupDatastore) { 
        this['id'] = id;
        this['instance_id'] = instanceId;
        this['name'] = name;
        this['begin_time'] = beginTime;
        this['end_time'] = endTime;
        this['status'] = status;
        this['type'] = type;
        this['size'] = size;
        this['datastore'] = datastore;
    }
    public withId(id: string): BackupForList {
        this['id'] = id;
        return this;
    }
    public withInstanceId(instanceId: string): BackupForList {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withName(name: string): BackupForList {
        this['name'] = name;
        return this;
    }
    public withDatabases(databases: Array<BackupDatabase>): BackupForList {
        this['databases'] = databases;
        return this;
    }
    public withBeginTime(beginTime: string): BackupForList {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): BackupForList {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withStatus(status: BackupForListStatusEnum | string): BackupForList {
        this['status'] = status;
        return this;
    }
    public withType(type: BackupForListTypeEnum | string): BackupForList {
        this['type'] = type;
        return this;
    }
    public withSize(size: number): BackupForList {
        this['size'] = size;
        return this;
    }
    public withDatastore(datastore: BackupDatastore): BackupForList {
        this['datastore'] = datastore;
        return this;
    }
    public withAssociatedWithDdm(associatedWithDdm: boolean): BackupForList {
        this['associated_with_ddm'] = associatedWithDdm;
        return this;
    }
    public set associatedWithDdm(associatedWithDdm: boolean  | undefined) {
        this['associated_with_ddm'] = associatedWithDdm;
    }
    public get associatedWithDdm(): boolean | undefined {
        return this['associated_with_ddm'];
    }
    public withMinDataVolumeCapacityForRestore(minDataVolumeCapacityForRestore: number): BackupForList {
        this['min_data_volume_capacity_for_restore'] = minDataVolumeCapacityForRestore;
        return this;
    }
    public set minDataVolumeCapacityForRestore(minDataVolumeCapacityForRestore: number  | undefined) {
        this['min_data_volume_capacity_for_restore'] = minDataVolumeCapacityForRestore;
    }
    public get minDataVolumeCapacityForRestore(): number | undefined {
        return this['min_data_volume_capacity_for_restore'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BackupForListStatusEnum {
    BUILDING = 'BUILDING',
    COMPLETED = 'COMPLETED',
    FAILED = 'FAILED',
    DELETING = 'DELETING'
}
/**
    * @export
    * @enum {string}
    */
export enum BackupForListTypeEnum {
    AUTO = 'auto',
    MANUAL = 'manual',
    FRAGMENT = 'fragment',
    INCREMENTAL = 'incremental'
}
