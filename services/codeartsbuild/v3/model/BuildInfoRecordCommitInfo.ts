

export class BuildInfoRecordCommitInfo {
    private 'commit_id'?: string;
    private 'created_at'?: string;
    public constructor() { 
    }
    public withCommitId(commitId: string): BuildInfoRecordCommitInfo {
        this['commit_id'] = commitId;
        return this;
    }
    public set commitId(commitId: string  | undefined) {
        this['commit_id'] = commitId;
    }
    public get commitId(): string | undefined {
        return this['commit_id'];
    }
    public withCreatedAt(createdAt: string): BuildInfoRecordCommitInfo {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
}