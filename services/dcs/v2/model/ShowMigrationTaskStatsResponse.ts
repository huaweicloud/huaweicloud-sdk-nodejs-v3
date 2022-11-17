
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMigrationTaskStatsResponse extends SdkResponse {
    private 'full_migration_progress'?: string | undefined;
    public offset?: string;
    private 'source_dbsize'?: string | undefined;
    private 'target_dbsize'?: string | undefined;
    private 'target_input_kbps'?: string | undefined;
    private 'target_ops'?: string | undefined;
    private 'is_migrating'?: boolean | undefined;
    public constructor() { 
        super();
    }
    public withFullMigrationProgress(fullMigrationProgress: string): ShowMigrationTaskStatsResponse {
        this['full_migration_progress'] = fullMigrationProgress;
        return this;
    }
    public set fullMigrationProgress(fullMigrationProgress: string | undefined) {
        this['full_migration_progress'] = fullMigrationProgress;
    }
    public get fullMigrationProgress() {
        return this['full_migration_progress'];
    }
    public withOffset(offset: string): ShowMigrationTaskStatsResponse {
        this['offset'] = offset;
        return this;
    }
    public withSourceDbsize(sourceDbsize: string): ShowMigrationTaskStatsResponse {
        this['source_dbsize'] = sourceDbsize;
        return this;
    }
    public set sourceDbsize(sourceDbsize: string | undefined) {
        this['source_dbsize'] = sourceDbsize;
    }
    public get sourceDbsize() {
        return this['source_dbsize'];
    }
    public withTargetDbsize(targetDbsize: string): ShowMigrationTaskStatsResponse {
        this['target_dbsize'] = targetDbsize;
        return this;
    }
    public set targetDbsize(targetDbsize: string | undefined) {
        this['target_dbsize'] = targetDbsize;
    }
    public get targetDbsize() {
        return this['target_dbsize'];
    }
    public withTargetInputKbps(targetInputKbps: string): ShowMigrationTaskStatsResponse {
        this['target_input_kbps'] = targetInputKbps;
        return this;
    }
    public set targetInputKbps(targetInputKbps: string | undefined) {
        this['target_input_kbps'] = targetInputKbps;
    }
    public get targetInputKbps() {
        return this['target_input_kbps'];
    }
    public withTargetOps(targetOps: string): ShowMigrationTaskStatsResponse {
        this['target_ops'] = targetOps;
        return this;
    }
    public set targetOps(targetOps: string | undefined) {
        this['target_ops'] = targetOps;
    }
    public get targetOps() {
        return this['target_ops'];
    }
    public withIsMigrating(isMigrating: boolean): ShowMigrationTaskStatsResponse {
        this['is_migrating'] = isMigrating;
        return this;
    }
    public set isMigrating(isMigrating: boolean | undefined) {
        this['is_migrating'] = isMigrating;
    }
    public get isMigrating() {
        return this['is_migrating'];
    }
}