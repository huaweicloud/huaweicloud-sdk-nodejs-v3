

export class Scm {
    private 'build_tag'?: string;
    private 'build_commit_id'?: string;
    public constructor() { 
    }
    public withBuildTag(buildTag: string): Scm {
        this['build_tag'] = buildTag;
        return this;
    }
    public set buildTag(buildTag: string  | undefined) {
        this['build_tag'] = buildTag;
    }
    public get buildTag(): string | undefined {
        return this['build_tag'];
    }
    public withBuildCommitId(buildCommitId: string): Scm {
        this['build_commit_id'] = buildCommitId;
        return this;
    }
    public set buildCommitId(buildCommitId: string  | undefined) {
        this['build_commit_id'] = buildCommitId;
    }
    public get buildCommitId(): string | undefined {
        return this['build_commit_id'];
    }
}