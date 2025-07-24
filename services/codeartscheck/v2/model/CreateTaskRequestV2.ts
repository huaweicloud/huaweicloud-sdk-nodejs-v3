import { IncConfigV2 } from './IncConfigV2';
import { RuleSetV2 } from './RuleSetV2';


export class CreateTaskRequestV2 {
    private 'check_type'?: Array<string>;
    private 'git_url'?: string;
    private 'git_branch'?: string;
    public language?: Array<string>;
    private 'rule_sets'?: Array<RuleSetV2>;
    private 'task_type'?: string;
    public username?: string;
    private 'access_token'?: string;
    private 'endpoint_id'?: string;
    private 'inc_config'?: IncConfigV2;
    private 'enable_fossbot'?: boolean;
    private 'resource_pool_id'?: string;
    public constructor(gitUrl?: string, gitBranch?: string, language?: Array<string>) { 
        this['git_url'] = gitUrl;
        this['git_branch'] = gitBranch;
        this['language'] = language;
    }
    public withCheckType(checkType: Array<string>): CreateTaskRequestV2 {
        this['check_type'] = checkType;
        return this;
    }
    public set checkType(checkType: Array<string>  | undefined) {
        this['check_type'] = checkType;
    }
    public get checkType(): Array<string> | undefined {
        return this['check_type'];
    }
    public withGitUrl(gitUrl: string): CreateTaskRequestV2 {
        this['git_url'] = gitUrl;
        return this;
    }
    public set gitUrl(gitUrl: string  | undefined) {
        this['git_url'] = gitUrl;
    }
    public get gitUrl(): string | undefined {
        return this['git_url'];
    }
    public withGitBranch(gitBranch: string): CreateTaskRequestV2 {
        this['git_branch'] = gitBranch;
        return this;
    }
    public set gitBranch(gitBranch: string  | undefined) {
        this['git_branch'] = gitBranch;
    }
    public get gitBranch(): string | undefined {
        return this['git_branch'];
    }
    public withLanguage(language: Array<string>): CreateTaskRequestV2 {
        this['language'] = language;
        return this;
    }
    public withRuleSets(ruleSets: Array<RuleSetV2>): CreateTaskRequestV2 {
        this['rule_sets'] = ruleSets;
        return this;
    }
    public set ruleSets(ruleSets: Array<RuleSetV2>  | undefined) {
        this['rule_sets'] = ruleSets;
    }
    public get ruleSets(): Array<RuleSetV2> | undefined {
        return this['rule_sets'];
    }
    public withTaskType(taskType: string): CreateTaskRequestV2 {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
    public withUsername(username: string): CreateTaskRequestV2 {
        this['username'] = username;
        return this;
    }
    public withAccessToken(accessToken: string): CreateTaskRequestV2 {
        this['access_token'] = accessToken;
        return this;
    }
    public set accessToken(accessToken: string  | undefined) {
        this['access_token'] = accessToken;
    }
    public get accessToken(): string | undefined {
        return this['access_token'];
    }
    public withEndpointId(endpointId: string): CreateTaskRequestV2 {
        this['endpoint_id'] = endpointId;
        return this;
    }
    public set endpointId(endpointId: string  | undefined) {
        this['endpoint_id'] = endpointId;
    }
    public get endpointId(): string | undefined {
        return this['endpoint_id'];
    }
    public withIncConfig(incConfig: IncConfigV2): CreateTaskRequestV2 {
        this['inc_config'] = incConfig;
        return this;
    }
    public set incConfig(incConfig: IncConfigV2  | undefined) {
        this['inc_config'] = incConfig;
    }
    public get incConfig(): IncConfigV2 | undefined {
        return this['inc_config'];
    }
    public withEnableFossbot(enableFossbot: boolean): CreateTaskRequestV2 {
        this['enable_fossbot'] = enableFossbot;
        return this;
    }
    public set enableFossbot(enableFossbot: boolean  | undefined) {
        this['enable_fossbot'] = enableFossbot;
    }
    public get enableFossbot(): boolean | undefined {
        return this['enable_fossbot'];
    }
    public withResourcePoolId(resourcePoolId: string): CreateTaskRequestV2 {
        this['resource_pool_id'] = resourcePoolId;
        return this;
    }
    public set resourcePoolId(resourcePoolId: string  | undefined) {
        this['resource_pool_id'] = resourcePoolId;
    }
    public get resourcePoolId(): string | undefined {
        return this['resource_pool_id'];
    }
}