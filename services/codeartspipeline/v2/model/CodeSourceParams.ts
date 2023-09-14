

export class CodeSourceParams {
    private 'git_type'?: string;
    private 'codehub_id'?: string;
    private 'endpoint_id'?: string;
    private 'default_branch'?: string;
    private 'git_url'?: string;
    private 'ssh_git_url'?: string;
    private 'web_url'?: string;
    private 'repo_name'?: string;
    public alias?: string;
    public constructor() { 
    }
    public withGitType(gitType: string): CodeSourceParams {
        this['git_type'] = gitType;
        return this;
    }
    public set gitType(gitType: string  | undefined) {
        this['git_type'] = gitType;
    }
    public get gitType(): string | undefined {
        return this['git_type'];
    }
    public withCodehubId(codehubId: string): CodeSourceParams {
        this['codehub_id'] = codehubId;
        return this;
    }
    public set codehubId(codehubId: string  | undefined) {
        this['codehub_id'] = codehubId;
    }
    public get codehubId(): string | undefined {
        return this['codehub_id'];
    }
    public withEndpointId(endpointId: string): CodeSourceParams {
        this['endpoint_id'] = endpointId;
        return this;
    }
    public set endpointId(endpointId: string  | undefined) {
        this['endpoint_id'] = endpointId;
    }
    public get endpointId(): string | undefined {
        return this['endpoint_id'];
    }
    public withDefaultBranch(defaultBranch: string): CodeSourceParams {
        this['default_branch'] = defaultBranch;
        return this;
    }
    public set defaultBranch(defaultBranch: string  | undefined) {
        this['default_branch'] = defaultBranch;
    }
    public get defaultBranch(): string | undefined {
        return this['default_branch'];
    }
    public withGitUrl(gitUrl: string): CodeSourceParams {
        this['git_url'] = gitUrl;
        return this;
    }
    public set gitUrl(gitUrl: string  | undefined) {
        this['git_url'] = gitUrl;
    }
    public get gitUrl(): string | undefined {
        return this['git_url'];
    }
    public withSshGitUrl(sshGitUrl: string): CodeSourceParams {
        this['ssh_git_url'] = sshGitUrl;
        return this;
    }
    public set sshGitUrl(sshGitUrl: string  | undefined) {
        this['ssh_git_url'] = sshGitUrl;
    }
    public get sshGitUrl(): string | undefined {
        return this['ssh_git_url'];
    }
    public withWebUrl(webUrl: string): CodeSourceParams {
        this['web_url'] = webUrl;
        return this;
    }
    public set webUrl(webUrl: string  | undefined) {
        this['web_url'] = webUrl;
    }
    public get webUrl(): string | undefined {
        return this['web_url'];
    }
    public withRepoName(repoName: string): CodeSourceParams {
        this['repo_name'] = repoName;
        return this;
    }
    public set repoName(repoName: string  | undefined) {
        this['repo_name'] = repoName;
    }
    public get repoName(): string | undefined {
        return this['repo_name'];
    }
    public withAlias(alias: string): CodeSourceParams {
        this['alias'] = alias;
        return this;
    }
}