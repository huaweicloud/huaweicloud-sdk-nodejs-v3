

export class ChDatabaseReplicationInfo {
    private 'source_database'?: string;
    private 'target_database'?: string;
    public status?: string;
    public stage?: string;
    public percentage?: string;
    private 'catchup_stage'?: string;
    public constructor(sourceDatabase?: string, targetDatabase?: string, status?: string, stage?: string, percentage?: string, catchupStage?: string) { 
        this['source_database'] = sourceDatabase;
        this['target_database'] = targetDatabase;
        this['status'] = status;
        this['stage'] = stage;
        this['percentage'] = percentage;
        this['catchup_stage'] = catchupStage;
    }
    public withSourceDatabase(sourceDatabase: string): ChDatabaseReplicationInfo {
        this['source_database'] = sourceDatabase;
        return this;
    }
    public set sourceDatabase(sourceDatabase: string  | undefined) {
        this['source_database'] = sourceDatabase;
    }
    public get sourceDatabase(): string | undefined {
        return this['source_database'];
    }
    public withTargetDatabase(targetDatabase: string): ChDatabaseReplicationInfo {
        this['target_database'] = targetDatabase;
        return this;
    }
    public set targetDatabase(targetDatabase: string  | undefined) {
        this['target_database'] = targetDatabase;
    }
    public get targetDatabase(): string | undefined {
        return this['target_database'];
    }
    public withStatus(status: string): ChDatabaseReplicationInfo {
        this['status'] = status;
        return this;
    }
    public withStage(stage: string): ChDatabaseReplicationInfo {
        this['stage'] = stage;
        return this;
    }
    public withPercentage(percentage: string): ChDatabaseReplicationInfo {
        this['percentage'] = percentage;
        return this;
    }
    public withCatchupStage(catchupStage: string): ChDatabaseReplicationInfo {
        this['catchup_stage'] = catchupStage;
        return this;
    }
    public set catchupStage(catchupStage: string  | undefined) {
        this['catchup_stage'] = catchupStage;
    }
    public get catchupStage(): string | undefined {
        return this['catchup_stage'];
    }
}