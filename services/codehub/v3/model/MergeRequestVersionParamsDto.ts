

export class MergeRequestVersionParamsDto {
    private 'diff_id'?: number;
    private 'start_sha'?: string;
    private 'commit_id'?: string;
    public constructor() { 
    }
    public withDiffId(diffId: number): MergeRequestVersionParamsDto {
        this['diff_id'] = diffId;
        return this;
    }
    public set diffId(diffId: number  | undefined) {
        this['diff_id'] = diffId;
    }
    public get diffId(): number | undefined {
        return this['diff_id'];
    }
    public withStartSha(startSha: string): MergeRequestVersionParamsDto {
        this['start_sha'] = startSha;
        return this;
    }
    public set startSha(startSha: string  | undefined) {
        this['start_sha'] = startSha;
    }
    public get startSha(): string | undefined {
        return this['start_sha'];
    }
    public withCommitId(commitId: string): MergeRequestVersionParamsDto {
        this['commit_id'] = commitId;
        return this;
    }
    public set commitId(commitId: string  | undefined) {
        this['commit_id'] = commitId;
    }
    public get commitId(): string | undefined {
        return this['commit_id'];
    }
}