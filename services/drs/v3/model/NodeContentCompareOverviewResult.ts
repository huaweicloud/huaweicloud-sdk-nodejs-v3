

export class NodeContentCompareOverviewResult {
    private 'source_db'?: string;
    private 'target_db'?: string;
    public status?: number;
    public constructor() { 
    }
    public withSourceDb(sourceDb: string): NodeContentCompareOverviewResult {
        this['source_db'] = sourceDb;
        return this;
    }
    public set sourceDb(sourceDb: string  | undefined) {
        this['source_db'] = sourceDb;
    }
    public get sourceDb(): string | undefined {
        return this['source_db'];
    }
    public withTargetDb(targetDb: string): NodeContentCompareOverviewResult {
        this['target_db'] = targetDb;
        return this;
    }
    public set targetDb(targetDb: string  | undefined) {
        this['target_db'] = targetDb;
    }
    public get targetDb(): string | undefined {
        return this['target_db'];
    }
    public withStatus(status: number): NodeContentCompareOverviewResult {
        this['status'] = status;
        return this;
    }
}