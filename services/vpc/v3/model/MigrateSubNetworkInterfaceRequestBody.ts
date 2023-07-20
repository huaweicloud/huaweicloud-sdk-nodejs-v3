import { MigrateSubNetworkInterfaceOption } from './MigrateSubNetworkInterfaceOption';


export class MigrateSubNetworkInterfaceRequestBody {
    private 'dry_run'?: boolean;
    private 'migration_info'?: MigrateSubNetworkInterfaceOption;
    public constructor(migrationInfo?: MigrateSubNetworkInterfaceOption) { 
        this['migration_info'] = migrationInfo;
    }
    public withDryRun(dryRun: boolean): MigrateSubNetworkInterfaceRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean  | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun(): boolean | undefined {
        return this['dry_run'];
    }
    public withMigrationInfo(migrationInfo: MigrateSubNetworkInterfaceOption): MigrateSubNetworkInterfaceRequestBody {
        this['migration_info'] = migrationInfo;
        return this;
    }
    public set migrationInfo(migrationInfo: MigrateSubNetworkInterfaceOption  | undefined) {
        this['migration_info'] = migrationInfo;
    }
    public get migrationInfo(): MigrateSubNetworkInterfaceOption | undefined {
        return this['migration_info'];
    }
}