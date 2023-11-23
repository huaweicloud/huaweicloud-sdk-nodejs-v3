

export class RepoInfo {
    private 'https_url'?: string;
    private 'web_url'?: string;
    private 'repo_status'?: string;
    private 'error_msg'?: string;
    private 'project_id'?: string;
    public constructor() { 
    }
    public withHttpsUrl(httpsUrl: string): RepoInfo {
        this['https_url'] = httpsUrl;
        return this;
    }
    public set httpsUrl(httpsUrl: string  | undefined) {
        this['https_url'] = httpsUrl;
    }
    public get httpsUrl(): string | undefined {
        return this['https_url'];
    }
    public withWebUrl(webUrl: string): RepoInfo {
        this['web_url'] = webUrl;
        return this;
    }
    public set webUrl(webUrl: string  | undefined) {
        this['web_url'] = webUrl;
    }
    public get webUrl(): string | undefined {
        return this['web_url'];
    }
    public withRepoStatus(repoStatus: string): RepoInfo {
        this['repo_status'] = repoStatus;
        return this;
    }
    public set repoStatus(repoStatus: string  | undefined) {
        this['repo_status'] = repoStatus;
    }
    public get repoStatus(): string | undefined {
        return this['repo_status'];
    }
    public withErrorMsg(errorMsg: string): RepoInfo {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withProjectId(projectId: string): RepoInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}