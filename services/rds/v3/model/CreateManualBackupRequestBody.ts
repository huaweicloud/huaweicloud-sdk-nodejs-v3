import { BackupDatabase } from './BackupDatabase';


export class CreateManualBackupRequestBody {
    private 'instance_id'?: string;
    public name?: string;
    public description?: string;
    public databases?: Array<BackupDatabase>;
    private 'backup_database_individually'?: boolean;
    public constructor(instanceId?: string, name?: string) { 
        this['instance_id'] = instanceId;
        this['name'] = name;
    }
    public withInstanceId(instanceId: string): CreateManualBackupRequestBody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withName(name: string): CreateManualBackupRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateManualBackupRequestBody {
        this['description'] = description;
        return this;
    }
    public withDatabases(databases: Array<BackupDatabase>): CreateManualBackupRequestBody {
        this['databases'] = databases;
        return this;
    }
    public withBackupDatabaseIndividually(backupDatabaseIndividually: boolean): CreateManualBackupRequestBody {
        this['backup_database_individually'] = backupDatabaseIndividually;
        return this;
    }
    public set backupDatabaseIndividually(backupDatabaseIndividually: boolean  | undefined) {
        this['backup_database_individually'] = backupDatabaseIndividually;
    }
    public get backupDatabaseIndividually(): boolean | undefined {
        return this['backup_database_individually'];
    }
}