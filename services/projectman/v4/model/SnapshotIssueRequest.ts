

export class SnapshotIssueRequest {
    public ids?: Array<string>;
    private 'simple_result'?: boolean;
    public constructor(ids?: Array<string>) { 
        this['ids'] = ids;
    }
    public withIds(ids: Array<string>): SnapshotIssueRequest {
        this['ids'] = ids;
        return this;
    }
    public withSimpleResult(simpleResult: boolean): SnapshotIssueRequest {
        this['simple_result'] = simpleResult;
        return this;
    }
    public set simpleResult(simpleResult: boolean  | undefined) {
        this['simple_result'] = simpleResult;
    }
    public get simpleResult(): boolean | undefined {
        return this['simple_result'];
    }
}