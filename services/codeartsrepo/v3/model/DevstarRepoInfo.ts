

export class DevstarRepoInfo {
    public uuid?: string;
    private 'repo_id'?: string;
    private 'repo_name'?: string;
    private 'ssh_url'?: string;
    private 'code_url'?: string;
    private 'detail_url'?: string;
    public constructor() { 
    }
    public withUuid(uuid: string): DevstarRepoInfo {
        this['uuid'] = uuid;
        return this;
    }
    public withRepoId(repoId: string): DevstarRepoInfo {
        this['repo_id'] = repoId;
        return this;
    }
    public set repoId(repoId: string  | undefined) {
        this['repo_id'] = repoId;
    }
    public get repoId(): string | undefined {
        return this['repo_id'];
    }
    public withRepoName(repoName: string): DevstarRepoInfo {
        this['repo_name'] = repoName;
        return this;
    }
    public set repoName(repoName: string  | undefined) {
        this['repo_name'] = repoName;
    }
    public get repoName(): string | undefined {
        return this['repo_name'];
    }
    public withSshUrl(sshUrl: string): DevstarRepoInfo {
        this['ssh_url'] = sshUrl;
        return this;
    }
    public set sshUrl(sshUrl: string  | undefined) {
        this['ssh_url'] = sshUrl;
    }
    public get sshUrl(): string | undefined {
        return this['ssh_url'];
    }
    public withCodeUrl(codeUrl: string): DevstarRepoInfo {
        this['code_url'] = codeUrl;
        return this;
    }
    public set codeUrl(codeUrl: string  | undefined) {
        this['code_url'] = codeUrl;
    }
    public get codeUrl(): string | undefined {
        return this['code_url'];
    }
    public withDetailUrl(detailUrl: string): DevstarRepoInfo {
        this['detail_url'] = detailUrl;
        return this;
    }
    public set detailUrl(detailUrl: string  | undefined) {
        this['detail_url'] = detailUrl;
    }
    public get detailUrl(): string | undefined {
        return this['detail_url'];
    }
}