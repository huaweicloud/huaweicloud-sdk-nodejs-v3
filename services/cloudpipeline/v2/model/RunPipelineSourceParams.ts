import { RunPipelineSourceParamsBuildParams } from './RunPipelineSourceParamsBuildParams';


export class RunPipelineSourceParams {
    private 'git_type'?: string;
    private 'git_url'?: string;
    private 'ssh_git_url'?: string;
    private 'web_url'?: string;
    private 'repo_name'?: string;
    private 'default_branch'?: string;
    private 'endpoint_id'?: string;
    private 'codehub_id'?: string;
    public alias?: string;
    private 'build_params'?: RunPipelineSourceParamsBuildParams;
    public constructor() { 
    }
    public withGitType(gitType: string): RunPipelineSourceParams {
        this['git_type'] = gitType;
        return this;
    }
    public set gitType(gitType: string  | undefined) {
        this['git_type'] = gitType;
    }
    public get gitType(): string | undefined {
        return this['git_type'];
    }
    public withGitUrl(gitUrl: string): RunPipelineSourceParams {
        this['git_url'] = gitUrl;
        return this;
    }
    public set gitUrl(gitUrl: string  | undefined) {
        this['git_url'] = gitUrl;
    }
    public get gitUrl(): string | undefined {
        return this['git_url'];
    }
    public withSshGitUrl(sshGitUrl: string): RunPipelineSourceParams {
        this['ssh_git_url'] = sshGitUrl;
        return this;
    }
    public set sshGitUrl(sshGitUrl: string  | undefined) {
        this['ssh_git_url'] = sshGitUrl;
    }
    public get sshGitUrl(): string | undefined {
        return this['ssh_git_url'];
    }
    public withWebUrl(webUrl: string): RunPipelineSourceParams {
        this['web_url'] = webUrl;
        return this;
    }
    public set webUrl(webUrl: string  | undefined) {
        this['web_url'] = webUrl;
    }
    public get webUrl(): string | undefined {
        return this['web_url'];
    }
    public withRepoName(repoName: string): RunPipelineSourceParams {
        this['repo_name'] = repoName;
        return this;
    }
    public set repoName(repoName: string  | undefined) {
        this['repo_name'] = repoName;
    }
    public get repoName(): string | undefined {
        return this['repo_name'];
    }
    public withDefaultBranch(defaultBranch: string): RunPipelineSourceParams {
        this['default_branch'] = defaultBranch;
        return this;
    }
    public set defaultBranch(defaultBranch: string  | undefined) {
        this['default_branch'] = defaultBranch;
    }
    public get defaultBranch(): string | undefined {
        return this['default_branch'];
    }
    public withEndpointId(endpointId: string): RunPipelineSourceParams {
        this['endpoint_id'] = endpointId;
        return this;
    }
    public set endpointId(endpointId: string  | undefined) {
        this['endpoint_id'] = endpointId;
    }
    public get endpointId(): string | undefined {
        return this['endpoint_id'];
    }
    public withCodehubId(codehubId: string): RunPipelineSourceParams {
        this['codehub_id'] = codehubId;
        return this;
    }
    public set codehubId(codehubId: string  | undefined) {
        this['codehub_id'] = codehubId;
    }
    public get codehubId(): string | undefined {
        return this['codehub_id'];
    }
    public withAlias(alias: string): RunPipelineSourceParams {
        this['alias'] = alias;
        return this;
    }
    public withBuildParams(buildParams: RunPipelineSourceParamsBuildParams): RunPipelineSourceParams {
        this['build_params'] = buildParams;
        return this;
    }
    public set buildParams(buildParams: RunPipelineSourceParamsBuildParams  | undefined) {
        this['build_params'] = buildParams;
    }
    public get buildParams(): RunPipelineSourceParamsBuildParams | undefined {
        return this['build_params'];
    }
}