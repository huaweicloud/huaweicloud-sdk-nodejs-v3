import { CodeSource } from './CodeSource';
import { CustomVariable } from './CustomVariable';
import { PipelineConcurrencyMgmt } from './PipelineConcurrencyMgmt';
import { PipelineSchedule } from './PipelineSchedule';
import { PipelineTrigger } from './PipelineTrigger';


export class PipelineDTO {
    public name?: string;
    public description?: string;
    private 'is_publish'?: boolean;
    public sources?: Array<CodeSource>;
    public variables?: Array<CustomVariable>;
    public schedules?: Array<PipelineSchedule>;
    public triggers?: Array<PipelineTrigger>;
    private 'manifest_version'?: string;
    public definition?: string;
    private 'project_name'?: string;
    private 'group_id'?: string;
    public id?: string;
    private 'concurrency_control'?: PipelineConcurrencyMgmt;
    private 'security_level'?: number;
    private 'disable_release_branch_management'?: boolean;
    private 'execution_plans'?: Array<object>;
    private 'project_id'?: string;
    private 'cancel_strategy'?: object;
    private 'confidentiality_code'?: string;
    private 'agency_name'?: string;
    private 'variable_group_ids'?: Array<string>;
    public constructor(name?: string, isPublish?: boolean, definition?: string) { 
        this['name'] = name;
        this['is_publish'] = isPublish;
        this['definition'] = definition;
    }
    public withName(name: string): PipelineDTO {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): PipelineDTO {
        this['description'] = description;
        return this;
    }
    public withIsPublish(isPublish: boolean): PipelineDTO {
        this['is_publish'] = isPublish;
        return this;
    }
    public set isPublish(isPublish: boolean  | undefined) {
        this['is_publish'] = isPublish;
    }
    public get isPublish(): boolean | undefined {
        return this['is_publish'];
    }
    public withSources(sources: Array<CodeSource>): PipelineDTO {
        this['sources'] = sources;
        return this;
    }
    public withVariables(variables: Array<CustomVariable>): PipelineDTO {
        this['variables'] = variables;
        return this;
    }
    public withSchedules(schedules: Array<PipelineSchedule>): PipelineDTO {
        this['schedules'] = schedules;
        return this;
    }
    public withTriggers(triggers: Array<PipelineTrigger>): PipelineDTO {
        this['triggers'] = triggers;
        return this;
    }
    public withManifestVersion(manifestVersion: string): PipelineDTO {
        this['manifest_version'] = manifestVersion;
        return this;
    }
    public set manifestVersion(manifestVersion: string  | undefined) {
        this['manifest_version'] = manifestVersion;
    }
    public get manifestVersion(): string | undefined {
        return this['manifest_version'];
    }
    public withDefinition(definition: string): PipelineDTO {
        this['definition'] = definition;
        return this;
    }
    public withProjectName(projectName: string): PipelineDTO {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withGroupId(groupId: string): PipelineDTO {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withId(id: string): PipelineDTO {
        this['id'] = id;
        return this;
    }
    public withConcurrencyControl(concurrencyControl: PipelineConcurrencyMgmt): PipelineDTO {
        this['concurrency_control'] = concurrencyControl;
        return this;
    }
    public set concurrencyControl(concurrencyControl: PipelineConcurrencyMgmt  | undefined) {
        this['concurrency_control'] = concurrencyControl;
    }
    public get concurrencyControl(): PipelineConcurrencyMgmt | undefined {
        return this['concurrency_control'];
    }
    public withSecurityLevel(securityLevel: number): PipelineDTO {
        this['security_level'] = securityLevel;
        return this;
    }
    public set securityLevel(securityLevel: number  | undefined) {
        this['security_level'] = securityLevel;
    }
    public get securityLevel(): number | undefined {
        return this['security_level'];
    }
    public withDisableReleaseBranchManagement(disableReleaseBranchManagement: boolean): PipelineDTO {
        this['disable_release_branch_management'] = disableReleaseBranchManagement;
        return this;
    }
    public set disableReleaseBranchManagement(disableReleaseBranchManagement: boolean  | undefined) {
        this['disable_release_branch_management'] = disableReleaseBranchManagement;
    }
    public get disableReleaseBranchManagement(): boolean | undefined {
        return this['disable_release_branch_management'];
    }
    public withExecutionPlans(executionPlans: Array<object>): PipelineDTO {
        this['execution_plans'] = executionPlans;
        return this;
    }
    public set executionPlans(executionPlans: Array<object>  | undefined) {
        this['execution_plans'] = executionPlans;
    }
    public get executionPlans(): Array<object> | undefined {
        return this['execution_plans'];
    }
    public withProjectId(projectId: string): PipelineDTO {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCancelStrategy(cancelStrategy: object): PipelineDTO {
        this['cancel_strategy'] = cancelStrategy;
        return this;
    }
    public set cancelStrategy(cancelStrategy: object  | undefined) {
        this['cancel_strategy'] = cancelStrategy;
    }
    public get cancelStrategy(): object | undefined {
        return this['cancel_strategy'];
    }
    public withConfidentialityCode(confidentialityCode: string): PipelineDTO {
        this['confidentiality_code'] = confidentialityCode;
        return this;
    }
    public set confidentialityCode(confidentialityCode: string  | undefined) {
        this['confidentiality_code'] = confidentialityCode;
    }
    public get confidentialityCode(): string | undefined {
        return this['confidentiality_code'];
    }
    public withAgencyName(agencyName: string): PipelineDTO {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): string | undefined {
        return this['agency_name'];
    }
    public withVariableGroupIds(variableGroupIds: Array<string>): PipelineDTO {
        this['variable_group_ids'] = variableGroupIds;
        return this;
    }
    public set variableGroupIds(variableGroupIds: Array<string>  | undefined) {
        this['variable_group_ids'] = variableGroupIds;
    }
    public get variableGroupIds(): Array<string> | undefined {
        return this['variable_group_ids'];
    }
}