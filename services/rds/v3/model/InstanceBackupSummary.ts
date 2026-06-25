import { InstanceBackupDatastore } from './InstanceBackupDatastore';
import { Spaces } from './Spaces';


export class InstanceBackupSummary {
    public id?: string;
    public name?: string;
    private 'backup_use_space'?: number;
    public datastore?: InstanceBackupDatastore;
    public spaces?: Spaces;
    public constructor() { 
    }
    public withId(id: string): InstanceBackupSummary {
        this['id'] = id;
        return this;
    }
    public withName(name: string): InstanceBackupSummary {
        this['name'] = name;
        return this;
    }
    public withBackupUseSpace(backupUseSpace: number): InstanceBackupSummary {
        this['backup_use_space'] = backupUseSpace;
        return this;
    }
    public set backupUseSpace(backupUseSpace: number  | undefined) {
        this['backup_use_space'] = backupUseSpace;
    }
    public get backupUseSpace(): number | undefined {
        return this['backup_use_space'];
    }
    public withDatastore(datastore: InstanceBackupDatastore): InstanceBackupSummary {
        this['datastore'] = datastore;
        return this;
    }
    public withSpaces(spaces: Spaces): InstanceBackupSummary {
        this['spaces'] = spaces;
        return this;
    }
}