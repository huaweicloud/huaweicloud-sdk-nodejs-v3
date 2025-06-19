

export class CreateBuildJobScm {
    public branch?: string;
    public url?: string;
    private 'repo_id'?: string;
    private 'web_url'?: string;
    private 'scm_type'?: string;
    private 'is_auto_build'?: boolean;
    private 'enable_git_lfs'?: boolean;
    private 'build_type'?: string;
    public depth?: string;
    private 'end_point_id'?: string;
    public source?: string;
    private 'group_name'?: string;
    private 'repo_name'?: string;
    public constructor(url?: string, scmType?: string) { 
        this['url'] = url;
        this['scm_type'] = scmType;
    }
    public withBranch(branch: string): CreateBuildJobScm {
        this['branch'] = branch;
        return this;
    }
    public withUrl(url: string): CreateBuildJobScm {
        this['url'] = url;
        return this;
    }
    public withRepoId(repoId: string): CreateBuildJobScm {
        this['repo_id'] = repoId;
        return this;
    }
    public set repoId(repoId: string  | undefined) {
        this['repo_id'] = repoId;
    }
    public get repoId(): string | undefined {
        return this['repo_id'];
    }
    public withWebUrl(webUrl: string): CreateBuildJobScm {
        this['web_url'] = webUrl;
        return this;
    }
    public set webUrl(webUrl: string  | undefined) {
        this['web_url'] = webUrl;
    }
    public get webUrl(): string | undefined {
        return this['web_url'];
    }
    public withScmType(scmType: string): CreateBuildJobScm {
        this['scm_type'] = scmType;
        return this;
    }
    public set scmType(scmType: string  | undefined) {
        this['scm_type'] = scmType;
    }
    public get scmType(): string | undefined {
        return this['scm_type'];
    }
    public withIsAutoBuild(isAutoBuild: boolean): CreateBuildJobScm {
        this['is_auto_build'] = isAutoBuild;
        return this;
    }
    public set isAutoBuild(isAutoBuild: boolean  | undefined) {
        this['is_auto_build'] = isAutoBuild;
    }
    public get isAutoBuild(): boolean | undefined {
        return this['is_auto_build'];
    }
    public withEnableGitLfs(enableGitLfs: boolean): CreateBuildJobScm {
        this['enable_git_lfs'] = enableGitLfs;
        return this;
    }
    public set enableGitLfs(enableGitLfs: boolean  | undefined) {
        this['enable_git_lfs'] = enableGitLfs;
    }
    public get enableGitLfs(): boolean | undefined {
        return this['enable_git_lfs'];
    }
    public withBuildType(buildType: string): CreateBuildJobScm {
        this['build_type'] = buildType;
        return this;
    }
    public set buildType(buildType: string  | undefined) {
        this['build_type'] = buildType;
    }
    public get buildType(): string | undefined {
        return this['build_type'];
    }
    public withDepth(depth: string): CreateBuildJobScm {
        this['depth'] = depth;
        return this;
    }
    public withEndPointId(endPointId: string): CreateBuildJobScm {
        this['end_point_id'] = endPointId;
        return this;
    }
    public set endPointId(endPointId: string  | undefined) {
        this['end_point_id'] = endPointId;
    }
    public get endPointId(): string | undefined {
        return this['end_point_id'];
    }
    public withSource(source: string): CreateBuildJobScm {
        this['source'] = source;
        return this;
    }
    public withGroupName(groupName: string): CreateBuildJobScm {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withRepoName(repoName: string): CreateBuildJobScm {
        this['repo_name'] = repoName;
        return this;
    }
    public set repoName(repoName: string  | undefined) {
        this['repo_name'] = repoName;
    }
    public get repoName(): string | undefined {
        return this['repo_name'];
    }
}