import { MigrateSubNetworkInterfaceOption } from './MigrateSubNetworkInterfaceOption';


export class MigrateSubNetworkInterfaceRequestBody {
    private 'dry_run'?: boolean | undefined;
    private 'migration_info': MigrateSubNetworkInterfaceOption | undefined;
    public constructor(migrationInfo?: any) { 
        this['migration_info'] = migrationInfo;
    }
    public withDryRun(dryRun: boolean): MigrateSubNetworkInterfaceRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun() {
        return this['dry_run'];
    }
    public withMigrationInfo(migrationInfo: MigrateSubNetworkInterfaceOption): MigrateSubNetworkInterfaceRequestBody {
        this['migration_info'] = migrationInfo;
        return this;
    }
    public set migrationInfo(migrationInfo: MigrateSubNetworkInterfaceOption | undefined) {
        this['migration_info'] = migrationInfo;
    }
    public get migrationInfo() {
        return this['migration_info'];
    }
}