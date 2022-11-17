import { ConfigMigrationInstanceBody } from './ConfigMigrationInstanceBody';


export class SetOnlineMigrationTaskBody {
    private 'migration_method': SetOnlineMigrationTaskBodyMigrationMethodEnum | undefined;
    private 'resume_mode': SetOnlineMigrationTaskBodyResumeModeEnum | undefined;
    private 'bandwidth_limit_mb'?: string | undefined;
    private 'source_instance': ConfigMigrationInstanceBody | undefined;
    private 'target_instance': ConfigMigrationInstanceBody | undefined;
    public constructor(migrationMethod?: any, resumeMode?: any, sourceInstance?: any, targetInstance?: any) { 
        this['migration_method'] = migrationMethod;
        this['resume_mode'] = resumeMode;
        this['source_instance'] = sourceInstance;
        this['target_instance'] = targetInstance;
    }
    public withMigrationMethod(migrationMethod: SetOnlineMigrationTaskBodyMigrationMethodEnum): SetOnlineMigrationTaskBody {
        this['migration_method'] = migrationMethod;
        return this;
    }
    public set migrationMethod(migrationMethod: SetOnlineMigrationTaskBodyMigrationMethodEnum | undefined) {
        this['migration_method'] = migrationMethod;
    }
    public get migrationMethod() {
        return this['migration_method'];
    }
    public withResumeMode(resumeMode: SetOnlineMigrationTaskBodyResumeModeEnum): SetOnlineMigrationTaskBody {
        this['resume_mode'] = resumeMode;
        return this;
    }
    public set resumeMode(resumeMode: SetOnlineMigrationTaskBodyResumeModeEnum | undefined) {
        this['resume_mode'] = resumeMode;
    }
    public get resumeMode() {
        return this['resume_mode'];
    }
    public withBandwidthLimitMb(bandwidthLimitMb: string): SetOnlineMigrationTaskBody {
        this['bandwidth_limit_mb'] = bandwidthLimitMb;
        return this;
    }
    public set bandwidthLimitMb(bandwidthLimitMb: string | undefined) {
        this['bandwidth_limit_mb'] = bandwidthLimitMb;
    }
    public get bandwidthLimitMb() {
        return this['bandwidth_limit_mb'];
    }
    public withSourceInstance(sourceInstance: ConfigMigrationInstanceBody): SetOnlineMigrationTaskBody {
        this['source_instance'] = sourceInstance;
        return this;
    }
    public set sourceInstance(sourceInstance: ConfigMigrationInstanceBody | undefined) {
        this['source_instance'] = sourceInstance;
    }
    public get sourceInstance() {
        return this['source_instance'];
    }
    public withTargetInstance(targetInstance: ConfigMigrationInstanceBody): SetOnlineMigrationTaskBody {
        this['target_instance'] = targetInstance;
        return this;
    }
    public set targetInstance(targetInstance: ConfigMigrationInstanceBody | undefined) {
        this['target_instance'] = targetInstance;
    }
    public get targetInstance() {
        return this['target_instance'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SetOnlineMigrationTaskBodyMigrationMethodEnum {
    FULL_AMOUNT_MIGRATION = 'full_amount_migration',
    INCREMENTAL_MIGRATION = 'incremental_migration'
}
/**
    * @export
    * @enum {string}
    */
export enum SetOnlineMigrationTaskBodyResumeModeEnum {
    AUTO = 'auto',
    MANUAL = 'manual'
}
