import { MysqlDatastoreInBackup } from './MysqlDatastoreInBackup';


export class Backups {
    public id?: string;
    public name?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public status?: string;
    private 'take_up_time'?: number;
    public type?: string;
    public size?: number;
    public datastore?: MysqlDatastoreInBackup;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'backup_level'?: BackupsBackupLevelEnum | string;
    public description?: string;
    public constructor() { 
    }
    public withId(id: string): Backups {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Backups {
        this['name'] = name;
        return this;
    }
    public withBeginTime(beginTime: string): Backups {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): Backups {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withStatus(status: string): Backups {
        this['status'] = status;
        return this;
    }
    public withTakeUpTime(takeUpTime: number): Backups {
        this['take_up_time'] = takeUpTime;
        return this;
    }
    public set takeUpTime(takeUpTime: number  | undefined) {
        this['take_up_time'] = takeUpTime;
    }
    public get takeUpTime(): number | undefined {
        return this['take_up_time'];
    }
    public withType(type: string): Backups {
        this['type'] = type;
        return this;
    }
    public withSize(size: number): Backups {
        this['size'] = size;
        return this;
    }
    public withDatastore(datastore: MysqlDatastoreInBackup): Backups {
        this['datastore'] = datastore;
        return this;
    }
    public withInstanceId(instanceId: string): Backups {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): Backups {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withBackupLevel(backupLevel: BackupsBackupLevelEnum | string): Backups {
        this['backup_level'] = backupLevel;
        return this;
    }
    public set backupLevel(backupLevel: BackupsBackupLevelEnum | string  | undefined) {
        this['backup_level'] = backupLevel;
    }
    public get backupLevel(): BackupsBackupLevelEnum | string | undefined {
        return this['backup_level'];
    }
    public withDescription(description: string): Backups {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BackupsBackupLevelEnum {
    E_0 = '0',
    E_1 = '1',
    E_2 = '2'
}
