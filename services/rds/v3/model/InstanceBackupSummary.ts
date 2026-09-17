import { InstanceBackupDatastore } from './InstanceBackupDatastore';
import { Space } from './Space';


export class InstanceBackupSummary {
    private 'instance_id'?: string;
    public name?: string;
    private 'backup_used_space'?: number;
    public datastore?: InstanceBackupDatastore;
    public space?: Space;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): InstanceBackupSummary {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withName(name: string): InstanceBackupSummary {
        this['name'] = name;
        return this;
    }
    public withBackupUsedSpace(backupUsedSpace: number): InstanceBackupSummary {
        this['backup_used_space'] = backupUsedSpace;
        return this;
    }
    public set backupUsedSpace(backupUsedSpace: number  | undefined) {
        this['backup_used_space'] = backupUsedSpace;
    }
    public get backupUsedSpace(): number | undefined {
        return this['backup_used_space'];
    }
    public withDatastore(datastore: InstanceBackupDatastore): InstanceBackupSummary {
        this['datastore'] = datastore;
        return this;
    }
    public withSpace(space: Space): InstanceBackupSummary {
        this['space'] = space;
        return this;
    }
}