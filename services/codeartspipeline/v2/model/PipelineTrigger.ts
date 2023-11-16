import { CodeEvent } from './CodeEvent';


export class PipelineTrigger {
    private 'pipeline_id'?: string;
    private 'git_url'?: string;
    private 'git_type'?: string;
    private 'is_auto_commit'?: boolean;
    public events?: Array<CodeEvent>;
    private 'hook_id'?: string;
    private 'repo_id'?: string;
    private 'endpoint_id'?: string;
    private 'callback_url'?: string;
    private 'security_token'?: string;
    public constructor() { 
    }
    public withPipelineId(pipelineId: string): PipelineTrigger {
        this['pipeline_id'] = pipelineId;
        return this;
    }
    public set pipelineId(pipelineId: string  | undefined) {
        this['pipeline_id'] = pipelineId;
    }
    public get pipelineId(): string | undefined {
        return this['pipeline_id'];
    }
    public withGitUrl(gitUrl: string): PipelineTrigger {
        this['git_url'] = gitUrl;
        return this;
    }
    public set gitUrl(gitUrl: string  | undefined) {
        this['git_url'] = gitUrl;
    }
    public get gitUrl(): string | undefined {
        return this['git_url'];
    }
    public withGitType(gitType: string): PipelineTrigger {
        this['git_type'] = gitType;
        return this;
    }
    public set gitType(gitType: string  | undefined) {
        this['git_type'] = gitType;
    }
    public get gitType(): string | undefined {
        return this['git_type'];
    }
    public withIsAutoCommit(isAutoCommit: boolean): PipelineTrigger {
        this['is_auto_commit'] = isAutoCommit;
        return this;
    }
    public set isAutoCommit(isAutoCommit: boolean  | undefined) {
        this['is_auto_commit'] = isAutoCommit;
    }
    public get isAutoCommit(): boolean | undefined {
        return this['is_auto_commit'];
    }
    public withEvents(events: Array<CodeEvent>): PipelineTrigger {
        this['events'] = events;
        return this;
    }
    public withHookId(hookId: string): PipelineTrigger {
        this['hook_id'] = hookId;
        return this;
    }
    public set hookId(hookId: string  | undefined) {
        this['hook_id'] = hookId;
    }
    public get hookId(): string | undefined {
        return this['hook_id'];
    }
    public withRepoId(repoId: string): PipelineTrigger {
        this['repo_id'] = repoId;
        return this;
    }
    public set repoId(repoId: string  | undefined) {
        this['repo_id'] = repoId;
    }
    public get repoId(): string | undefined {
        return this['repo_id'];
    }
    public withEndpointId(endpointId: string): PipelineTrigger {
        this['endpoint_id'] = endpointId;
        return this;
    }
    public set endpointId(endpointId: string  | undefined) {
        this['endpoint_id'] = endpointId;
    }
    public get endpointId(): string | undefined {
        return this['endpoint_id'];
    }
    public withCallbackUrl(callbackUrl: string): PipelineTrigger {
        this['callback_url'] = callbackUrl;
        return this;
    }
    public set callbackUrl(callbackUrl: string  | undefined) {
        this['callback_url'] = callbackUrl;
    }
    public get callbackUrl(): string | undefined {
        return this['callback_url'];
    }
    public withSecurityToken(securityToken: string): PipelineTrigger {
        this['security_token'] = securityToken;
        return this;
    }
    public set securityToken(securityToken: string  | undefined) {
        this['security_token'] = securityToken;
    }
    public get securityToken(): string | undefined {
        return this['security_token'];
    }
}