import { ConfigMigrationInstanceBody } from './ConfigMigrationInstanceBody';


export class SetOnlineMigrationTaskBody {
    private 'migration_method'?: SetOnlineMigrationTaskBodyMigrationMethodEnum | string;
    private 'resume_mode'?: SetOnlineMigrationTaskBodyResumeModeEnum | string;
    private 'bandwidth_limit_mb'?: string;
    private 'source_instance'?: ConfigMigrationInstanceBody;
    private 'target_instance'?: ConfigMigrationInstanceBody;
    public constructor(migrationMethod?: string, resumeMode?: string, sourceInstance?: ConfigMigrationInstanceBody, targetInstance?: ConfigMigrationInstanceBody) { 
        this['migration_method'] = migrationMethod;
        this['resume_mode'] = resumeMode;
        this['source_instance'] = sourceInstance;
        this['target_instance'] = targetInstance;
    }
    public withMigrationMethod(migrationMethod: SetOnlineMigrationTaskBodyMigrationMethodEnum | string): SetOnlineMigrationTaskBody {
        this['migration_method'] = migrationMethod;
        return this;
    }
    public set migrationMethod(migrationMethod: SetOnlineMigrationTaskBodyMigrationMethodEnum | string  | undefined) {
        this['migration_method'] = migrationMethod;
    }
    public get migrationMethod(): SetOnlineMigrationTaskBodyMigrationMethodEnum | string | undefined {
        return this['migration_method'];
    }
    public withResumeMode(resumeMode: SetOnlineMigrationTaskBodyResumeModeEnum | string): SetOnlineMigrationTaskBody {
        this['resume_mode'] = resumeMode;
        return this;
    }
    public set resumeMode(resumeMode: SetOnlineMigrationTaskBodyResumeModeEnum | string  | undefined) {
        this['resume_mode'] = resumeMode;
    }
    public get resumeMode(): SetOnlineMigrationTaskBodyResumeModeEnum | string | undefined {
        return this['resume_mode'];
    }
    public withBandwidthLimitMb(bandwidthLimitMb: string): SetOnlineMigrationTaskBody {
        this['bandwidth_limit_mb'] = bandwidthLimitMb;
        return this;
    }
    public set bandwidthLimitMb(bandwidthLimitMb: string  | undefined) {
        this['bandwidth_limit_mb'] = bandwidthLimitMb;
    }
    public get bandwidthLimitMb(): string | undefined {
        return this['bandwidth_limit_mb'];
    }
    public withSourceInstance(sourceInstance: ConfigMigrationInstanceBody): SetOnlineMigrationTaskBody {
        this['source_instance'] = sourceInstance;
        return this;
    }
    public set sourceInstance(sourceInstance: ConfigMigrationInstanceBody  | undefined) {
        this['source_instance'] = sourceInstance;
    }
    public get sourceInstance(): ConfigMigrationInstanceBody | undefined {
        return this['source_instance'];
    }
    public withTargetInstance(targetInstance: ConfigMigrationInstanceBody): SetOnlineMigrationTaskBody {
        this['target_instance'] = targetInstance;
        return this;
    }
    public set targetInstance(targetInstance: ConfigMigrationInstanceBody  | undefined) {
        this['target_instance'] = targetInstance;
    }
    public get targetInstance(): ConfigMigrationInstanceBody | undefined {
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
