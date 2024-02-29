

export class PipelineSourceParam {
    public alias?: string;
    private 'git_type'?: string;
    private 'codehub_id'?: string;
    private 'endpoint_id'?: string;
    private 'default_branch'?: string;
    private 'git_url'?: string;
    private 'ssh_git_url'?: string;
    private 'web_url'?: string;
    private 'repo_name'?: string;
    private 'artifact_type'?: string;
    private 'artifact_type_name'?: string;
    private 'branch_filter'?: string;
    public directory?: string;
    private 'directory_id'?: string;
    public organization?: string;
    private 'package_name'?: string;
    public version?: string;
    private 'version_strategy'?: string;
    private 'source_system'?: string;
    public constructor() { 
    }
    public withAlias(alias: string): PipelineSourceParam {
        this['alias'] = alias;
        return this;
    }
    public withGitType(gitType: string): PipelineSourceParam {
        this['git_type'] = gitType;
        return this;
    }
    public set gitType(gitType: string  | undefined) {
        this['git_type'] = gitType;
    }
    public get gitType(): string | undefined {
        return this['git_type'];
    }
    public withCodehubId(codehubId: string): PipelineSourceParam {
        this['codehub_id'] = codehubId;
        return this;
    }
    public set codehubId(codehubId: string  | undefined) {
        this['codehub_id'] = codehubId;
    }
    public get codehubId(): string | undefined {
        return this['codehub_id'];
    }
    public withEndpointId(endpointId: string): PipelineSourceParam {
        this['endpoint_id'] = endpointId;
        return this;
    }
    public set endpointId(endpointId: string  | undefined) {
        this['endpoint_id'] = endpointId;
    }
    public get endpointId(): string | undefined {
        return this['endpoint_id'];
    }
    public withDefaultBranch(defaultBranch: string): PipelineSourceParam {
        this['default_branch'] = defaultBranch;
        return this;
    }
    public set defaultBranch(defaultBranch: string  | undefined) {
        this['default_branch'] = defaultBranch;
    }
    public get defaultBranch(): string | undefined {
        return this['default_branch'];
    }
    public withGitUrl(gitUrl: string): PipelineSourceParam {
        this['git_url'] = gitUrl;
        return this;
    }
    public set gitUrl(gitUrl: string  | undefined) {
        this['git_url'] = gitUrl;
    }
    public get gitUrl(): string | undefined {
        return this['git_url'];
    }
    public withSshGitUrl(sshGitUrl: string): PipelineSourceParam {
        this['ssh_git_url'] = sshGitUrl;
        return this;
    }
    public set sshGitUrl(sshGitUrl: string  | undefined) {
        this['ssh_git_url'] = sshGitUrl;
    }
    public get sshGitUrl(): string | undefined {
        return this['ssh_git_url'];
    }
    public withWebUrl(webUrl: string): PipelineSourceParam {
        this['web_url'] = webUrl;
        return this;
    }
    public set webUrl(webUrl: string  | undefined) {
        this['web_url'] = webUrl;
    }
    public get webUrl(): string | undefined {
        return this['web_url'];
    }
    public withRepoName(repoName: string): PipelineSourceParam {
        this['repo_name'] = repoName;
        return this;
    }
    public set repoName(repoName: string  | undefined) {
        this['repo_name'] = repoName;
    }
    public get repoName(): string | undefined {
        return this['repo_name'];
    }
    public withArtifactType(artifactType: string): PipelineSourceParam {
        this['artifact_type'] = artifactType;
        return this;
    }
    public set artifactType(artifactType: string  | undefined) {
        this['artifact_type'] = artifactType;
    }
    public get artifactType(): string | undefined {
        return this['artifact_type'];
    }
    public withArtifactTypeName(artifactTypeName: string): PipelineSourceParam {
        this['artifact_type_name'] = artifactTypeName;
        return this;
    }
    public set artifactTypeName(artifactTypeName: string  | undefined) {
        this['artifact_type_name'] = artifactTypeName;
    }
    public get artifactTypeName(): string | undefined {
        return this['artifact_type_name'];
    }
    public withBranchFilter(branchFilter: string): PipelineSourceParam {
        this['branch_filter'] = branchFilter;
        return this;
    }
    public set branchFilter(branchFilter: string  | undefined) {
        this['branch_filter'] = branchFilter;
    }
    public get branchFilter(): string | undefined {
        return this['branch_filter'];
    }
    public withDirectory(directory: string): PipelineSourceParam {
        this['directory'] = directory;
        return this;
    }
    public withDirectoryId(directoryId: string): PipelineSourceParam {
        this['directory_id'] = directoryId;
        return this;
    }
    public set directoryId(directoryId: string  | undefined) {
        this['directory_id'] = directoryId;
    }
    public get directoryId(): string | undefined {
        return this['directory_id'];
    }
    public withOrganization(organization: string): PipelineSourceParam {
        this['organization'] = organization;
        return this;
    }
    public withPackageName(packageName: string): PipelineSourceParam {
        this['package_name'] = packageName;
        return this;
    }
    public set packageName(packageName: string  | undefined) {
        this['package_name'] = packageName;
    }
    public get packageName(): string | undefined {
        return this['package_name'];
    }
    public withVersion(version: string): PipelineSourceParam {
        this['version'] = version;
        return this;
    }
    public withVersionStrategy(versionStrategy: string): PipelineSourceParam {
        this['version_strategy'] = versionStrategy;
        return this;
    }
    public set versionStrategy(versionStrategy: string  | undefined) {
        this['version_strategy'] = versionStrategy;
    }
    public get versionStrategy(): string | undefined {
        return this['version_strategy'];
    }
    public withSourceSystem(sourceSystem: string): PipelineSourceParam {
        this['source_system'] = sourceSystem;
        return this;
    }
    public set sourceSystem(sourceSystem: string  | undefined) {
        this['source_system'] = sourceSystem;
    }
    public get sourceSystem(): string | undefined {
        return this['source_system'];
    }
}