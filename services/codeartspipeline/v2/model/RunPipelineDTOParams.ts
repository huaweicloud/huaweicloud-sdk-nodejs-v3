import { RunPipelineDTOParamsBuildParams } from './RunPipelineDTOParamsBuildParams';


export class RunPipelineDTOParams {
    private 'git_type'?: string;
    public alias?: string;
    private 'codehub_id'?: string;
    private 'default_branch'?: string;
    private 'git_url'?: string;
    private 'endpoint_id'?: string;
    private 'build_params'?: RunPipelineDTOParamsBuildParams;
    public constructor(gitType?: string, gitUrl?: string) { 
        this['git_type'] = gitType;
        this['git_url'] = gitUrl;
    }
    public withGitType(gitType: string): RunPipelineDTOParams {
        this['git_type'] = gitType;
        return this;
    }
    public set gitType(gitType: string  | undefined) {
        this['git_type'] = gitType;
    }
    public get gitType(): string | undefined {
        return this['git_type'];
    }
    public withAlias(alias: string): RunPipelineDTOParams {
        this['alias'] = alias;
        return this;
    }
    public withCodehubId(codehubId: string): RunPipelineDTOParams {
        this['codehub_id'] = codehubId;
        return this;
    }
    public set codehubId(codehubId: string  | undefined) {
        this['codehub_id'] = codehubId;
    }
    public get codehubId(): string | undefined {
        return this['codehub_id'];
    }
    public withDefaultBranch(defaultBranch: string): RunPipelineDTOParams {
        this['default_branch'] = defaultBranch;
        return this;
    }
    public set defaultBranch(defaultBranch: string  | undefined) {
        this['default_branch'] = defaultBranch;
    }
    public get defaultBranch(): string | undefined {
        return this['default_branch'];
    }
    public withGitUrl(gitUrl: string): RunPipelineDTOParams {
        this['git_url'] = gitUrl;
        return this;
    }
    public set gitUrl(gitUrl: string  | undefined) {
        this['git_url'] = gitUrl;
    }
    public get gitUrl(): string | undefined {
        return this['git_url'];
    }
    public withEndpointId(endpointId: string): RunPipelineDTOParams {
        this['endpoint_id'] = endpointId;
        return this;
    }
    public set endpointId(endpointId: string  | undefined) {
        this['endpoint_id'] = endpointId;
    }
    public get endpointId(): string | undefined {
        return this['endpoint_id'];
    }
    public withBuildParams(buildParams: RunPipelineDTOParamsBuildParams): RunPipelineDTOParams {
        this['build_params'] = buildParams;
        return this;
    }
    public set buildParams(buildParams: RunPipelineDTOParamsBuildParams  | undefined) {
        this['build_params'] = buildParams;
    }
    public get buildParams(): RunPipelineDTOParamsBuildParams | undefined {
        return this['build_params'];
    }
}