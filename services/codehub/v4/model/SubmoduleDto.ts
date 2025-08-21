

export class SubmoduleDto {
    private 'repo_id'?: number;
    public branch?: string;
    public path?: string;
    private 'git_url'?: string;
    private 'submodule_branch'?: string;
    private 'namespace_uuid'?: string;
    private 'submodule_repo_id'?: number;
    private 'repo_name'?: string;
    private 'sub_commitId'?: string;
    private 'deployKey_status'?: number;
    public status?: number;
    public constructor() { 
    }
    public withRepoId(repoId: number): SubmoduleDto {
        this['repo_id'] = repoId;
        return this;
    }
    public set repoId(repoId: number  | undefined) {
        this['repo_id'] = repoId;
    }
    public get repoId(): number | undefined {
        return this['repo_id'];
    }
    public withBranch(branch: string): SubmoduleDto {
        this['branch'] = branch;
        return this;
    }
    public withPath(path: string): SubmoduleDto {
        this['path'] = path;
        return this;
    }
    public withGitUrl(gitUrl: string): SubmoduleDto {
        this['git_url'] = gitUrl;
        return this;
    }
    public set gitUrl(gitUrl: string  | undefined) {
        this['git_url'] = gitUrl;
    }
    public get gitUrl(): string | undefined {
        return this['git_url'];
    }
    public withSubmoduleBranch(submoduleBranch: string): SubmoduleDto {
        this['submodule_branch'] = submoduleBranch;
        return this;
    }
    public set submoduleBranch(submoduleBranch: string  | undefined) {
        this['submodule_branch'] = submoduleBranch;
    }
    public get submoduleBranch(): string | undefined {
        return this['submodule_branch'];
    }
    public withNamespaceUuid(namespaceUuid: string): SubmoduleDto {
        this['namespace_uuid'] = namespaceUuid;
        return this;
    }
    public set namespaceUuid(namespaceUuid: string  | undefined) {
        this['namespace_uuid'] = namespaceUuid;
    }
    public get namespaceUuid(): string | undefined {
        return this['namespace_uuid'];
    }
    public withSubmoduleRepoId(submoduleRepoId: number): SubmoduleDto {
        this['submodule_repo_id'] = submoduleRepoId;
        return this;
    }
    public set submoduleRepoId(submoduleRepoId: number  | undefined) {
        this['submodule_repo_id'] = submoduleRepoId;
    }
    public get submoduleRepoId(): number | undefined {
        return this['submodule_repo_id'];
    }
    public withRepoName(repoName: string): SubmoduleDto {
        this['repo_name'] = repoName;
        return this;
    }
    public set repoName(repoName: string  | undefined) {
        this['repo_name'] = repoName;
    }
    public get repoName(): string | undefined {
        return this['repo_name'];
    }
    public withSubCommitId(subCommitId: string): SubmoduleDto {
        this['sub_commitId'] = subCommitId;
        return this;
    }
    public set subCommitId(subCommitId: string  | undefined) {
        this['sub_commitId'] = subCommitId;
    }
    public get subCommitId(): string | undefined {
        return this['sub_commitId'];
    }
    public withDeployKeyStatus(deployKeyStatus: number): SubmoduleDto {
        this['deployKey_status'] = deployKeyStatus;
        return this;
    }
    public set deployKeyStatus(deployKeyStatus: number  | undefined) {
        this['deployKey_status'] = deployKeyStatus;
    }
    public get deployKeyStatus(): number | undefined {
        return this['deployKey_status'];
    }
    public withStatus(status: number): SubmoduleDto {
        this['status'] = status;
        return this;
    }
}