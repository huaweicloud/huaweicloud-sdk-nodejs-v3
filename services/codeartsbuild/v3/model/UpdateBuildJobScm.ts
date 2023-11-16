

export class UpdateBuildJobScm {
    public branch?: string;
    public url?: string;
    private 'repo_id'?: string;
    private 'web_url'?: string;
    private 'scm_type'?: string;
    private 'is_auto_build'?: boolean;
    private 'build_type'?: string;
    public depth?: string;
    private 'end_point_id'?: string;
    public source?: string;
    public constructor(url?: string, scmType?: string) { 
        this['url'] = url;
        this['scm_type'] = scmType;
    }
    public withBranch(branch: string): UpdateBuildJobScm {
        this['branch'] = branch;
        return this;
    }
    public withUrl(url: string): UpdateBuildJobScm {
        this['url'] = url;
        return this;
    }
    public withRepoId(repoId: string): UpdateBuildJobScm {
        this['repo_id'] = repoId;
        return this;
    }
    public set repoId(repoId: string  | undefined) {
        this['repo_id'] = repoId;
    }
    public get repoId(): string | undefined {
        return this['repo_id'];
    }
    public withWebUrl(webUrl: string): UpdateBuildJobScm {
        this['web_url'] = webUrl;
        return this;
    }
    public set webUrl(webUrl: string  | undefined) {
        this['web_url'] = webUrl;
    }
    public get webUrl(): string | undefined {
        return this['web_url'];
    }
    public withScmType(scmType: string): UpdateBuildJobScm {
        this['scm_type'] = scmType;
        return this;
    }
    public set scmType(scmType: string  | undefined) {
        this['scm_type'] = scmType;
    }
    public get scmType(): string | undefined {
        return this['scm_type'];
    }
    public withIsAutoBuild(isAutoBuild: boolean): UpdateBuildJobScm {
        this['is_auto_build'] = isAutoBuild;
        return this;
    }
    public set isAutoBuild(isAutoBuild: boolean  | undefined) {
        this['is_auto_build'] = isAutoBuild;
    }
    public get isAutoBuild(): boolean | undefined {
        return this['is_auto_build'];
    }
    public withBuildType(buildType: string): UpdateBuildJobScm {
        this['build_type'] = buildType;
        return this;
    }
    public set buildType(buildType: string  | undefined) {
        this['build_type'] = buildType;
    }
    public get buildType(): string | undefined {
        return this['build_type'];
    }
    public withDepth(depth: string): UpdateBuildJobScm {
        this['depth'] = depth;
        return this;
    }
    public withEndPointId(endPointId: string): UpdateBuildJobScm {
        this['end_point_id'] = endPointId;
        return this;
    }
    public set endPointId(endPointId: string  | undefined) {
        this['end_point_id'] = endPointId;
    }
    public get endPointId(): string | undefined {
        return this['end_point_id'];
    }
    public withSource(source: string): UpdateBuildJobScm {
        this['source'] = source;
        return this;
    }
}