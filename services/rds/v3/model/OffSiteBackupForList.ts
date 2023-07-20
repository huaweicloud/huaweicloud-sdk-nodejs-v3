import { BackupDatabase } from './BackupDatabase';
import { ParaGroupDatastore } from './ParaGroupDatastore';


export class OffSiteBackupForList {
    public id?: string;
    private 'instance_id'?: string;
    public name?: string;
    public databases?: Array<BackupDatabase>;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public status?: OffSiteBackupForListStatusEnum | string;
    public type?: OffSiteBackupForListTypeEnum | string;
    public size?: number;
    public datastore?: ParaGroupDatastore;
    private 'associated_with_ddm'?: boolean;
    public constructor(id?: string, instanceId?: string, name?: string, beginTime?: string, endTime?: string, status?: string, type?: string, size?: number, datastore?: ParaGroupDatastore) { 
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
    public withId(id: string): OffSiteBackupForList {
        this['id'] = id;
        return this;
    }
    public withInstanceId(instanceId: string): OffSiteBackupForList {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withName(name: string): OffSiteBackupForList {
        this['name'] = name;
        return this;
    }
    public withDatabases(databases: Array<BackupDatabase>): OffSiteBackupForList {
        this['databases'] = databases;
        return this;
    }
    public withBeginTime(beginTime: string): OffSiteBackupForList {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): OffSiteBackupForList {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withStatus(status: OffSiteBackupForListStatusEnum | string): OffSiteBackupForList {
        this['status'] = status;
        return this;
    }
    public withType(type: OffSiteBackupForListTypeEnum | string): OffSiteBackupForList {
        this['type'] = type;
        return this;
    }
    public withSize(size: number): OffSiteBackupForList {
        this['size'] = size;
        return this;
    }
    public withDatastore(datastore: ParaGroupDatastore): OffSiteBackupForList {
        this['datastore'] = datastore;
        return this;
    }
    public withAssociatedWithDdm(associatedWithDdm: boolean): OffSiteBackupForList {
        this['associated_with_ddm'] = associatedWithDdm;
        return this;
    }
    public set associatedWithDdm(associatedWithDdm: boolean  | undefined) {
        this['associated_with_ddm'] = associatedWithDdm;
    }
    public get associatedWithDdm(): boolean | undefined {
        return this['associated_with_ddm'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OffSiteBackupForListStatusEnum {
    BUILDING = 'BUILDING',
    COMPLETED = 'COMPLETED',
    FAILED = 'FAILED',
    DELETING = 'DELETING'
}
/**
    * @export
    * @enum {string}
    */
export enum OffSiteBackupForListTypeEnum {
    AUTO = 'auto',
    INCREMENTAL = 'incremental'
}
