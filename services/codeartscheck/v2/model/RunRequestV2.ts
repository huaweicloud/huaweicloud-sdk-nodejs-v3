

export class RunRequestV2 {
    public username?: string;
    private 'access_token'?: string;
    private 'git_url'?: string;
    private 'git_branch'?: string;
    public constructor() { 
    }
    public withUsername(username: string): RunRequestV2 {
        this['username'] = username;
        return this;
    }
    public withAccessToken(accessToken: string): RunRequestV2 {
        this['access_token'] = accessToken;
        return this;
    }
    public set accessToken(accessToken: string  | undefined) {
        this['access_token'] = accessToken;
    }
    public get accessToken(): string | undefined {
        return this['access_token'];
    }
    public withGitUrl(gitUrl: string): RunRequestV2 {
        this['git_url'] = gitUrl;
        return this;
    }
    public set gitUrl(gitUrl: string  | undefined) {
        this['git_url'] = gitUrl;
    }
    public get gitUrl(): string | undefined {
        return this['git_url'];
    }
    public withGitBranch(gitBranch: string): RunRequestV2 {
        this['git_branch'] = gitBranch;
        return this;
    }
    public set gitBranch(gitBranch: string  | undefined) {
        this['git_branch'] = gitBranch;
    }
    public get gitBranch(): string | undefined {
        return this['git_branch'];
    }
}