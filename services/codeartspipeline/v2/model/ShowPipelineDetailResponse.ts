import { PipelineConcurrencyMgmt } from './PipelineConcurrencyMgmt';
import { PipelineSchedule } from './PipelineSchedule';
import { PipelineSource } from './PipelineSource';
import { PipelineTrigger } from './PipelineTrigger';
import { PipelineVariable } from './PipelineVariable';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPipelineDetailResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'manifest_version'?: string;
    public region?: string;
    private 'domain_id'?: string;
    private 'project_id'?: string;
    private 'component_id'?: string;
    private 'is_publish'?: boolean;
    private 'creator_id'?: string;
    private 'creator_name'?: string;
    private 'updater_id'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'is_collect'?: boolean;
    public sources?: Array<PipelineSource>;
    public variables?: Array<PipelineVariable>;
    public schedules?: Array<PipelineSchedule>;
    public triggers?: Array<PipelineTrigger>;
    private 'group_id'?: string;
    public definition?: string;
    private 'security_level'?: number;
    private 'origin_id'?: string;
    private 'disable_release_branch_management'?: boolean;
    public deleted?: boolean;
    public banned?: boolean;
    private 'from_git_code'?: boolean;
    private 'from_git_code_repo'?: boolean;
    private 'git_code_repo_id'?: string;
    private 'yaml_definition'?: string;
    private 'pac_repo_relation'?: object;
    private 'yaml_content'?: string;
    private 'agency_name'?: string;
    private 'execution_plans'?: Array<object>;
    private 'from_source'?: number;
    private 'project_name'?: string;
    private 'group_name'?: string;
    private 'concurrency_control'?: PipelineConcurrencyMgmt;
    private 'cancel_strategy'?: object;
    private 'tag_ids'?: Array<string>;
    private 'variable_groups'?: Array<string>;
    private 'security_level_code'?: string;
    public permissions?: object;
    private 'subject_id'?: string;
    private 'detail_url'?: string;
    private 'modify_url'?: string;
    public tags?: Array<object>;
    private 'is_cr_model'?: boolean;
    private 'archive_source'?: object;
    private 'yaml_repo_properties'?: object;
    private 'variable_group_ids'?: Array<string>;
    private 'pac_source_alias'?: string;
    private 'pac_source_repo_https_endpoint'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowPipelineDetailResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowPipelineDetailResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowPipelineDetailResponse {
        this['description'] = description;
        return this;
    }
    public withManifestVersion(manifestVersion: string): ShowPipelineDetailResponse {
        this['manifest_version'] = manifestVersion;
        return this;
    }
    public set manifestVersion(manifestVersion: string  | undefined) {
        this['manifest_version'] = manifestVersion;
    }
    public get manifestVersion(): string | undefined {
        return this['manifest_version'];
    }
    public withRegion(region: string): ShowPipelineDetailResponse {
        this['region'] = region;
        return this;
    }
    public withDomainId(domainId: string): ShowPipelineDetailResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withProjectId(projectId: string): ShowPipelineDetailResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withComponentId(componentId: string): ShowPipelineDetailResponse {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withIsPublish(isPublish: boolean): ShowPipelineDetailResponse {
        this['is_publish'] = isPublish;
        return this;
    }
    public set isPublish(isPublish: boolean  | undefined) {
        this['is_publish'] = isPublish;
    }
    public get isPublish(): boolean | undefined {
        return this['is_publish'];
    }
    public withCreatorId(creatorId: string): ShowPipelineDetailResponse {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withCreatorName(creatorName: string): ShowPipelineDetailResponse {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withUpdaterId(updaterId: string): ShowPipelineDetailResponse {
        this['updater_id'] = updaterId;
        return this;
    }
    public set updaterId(updaterId: string  | undefined) {
        this['updater_id'] = updaterId;
    }
    public get updaterId(): string | undefined {
        return this['updater_id'];
    }
    public withCreateTime(createTime: number): ShowPipelineDetailResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): ShowPipelineDetailResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withIsCollect(isCollect: boolean): ShowPipelineDetailResponse {
        this['is_collect'] = isCollect;
        return this;
    }
    public set isCollect(isCollect: boolean  | undefined) {
        this['is_collect'] = isCollect;
    }
    public get isCollect(): boolean | undefined {
        return this['is_collect'];
    }
    public withSources(sources: Array<PipelineSource>): ShowPipelineDetailResponse {
        this['sources'] = sources;
        return this;
    }
    public withVariables(variables: Array<PipelineVariable>): ShowPipelineDetailResponse {
        this['variables'] = variables;
        return this;
    }
    public withSchedules(schedules: Array<PipelineSchedule>): ShowPipelineDetailResponse {
        this['schedules'] = schedules;
        return this;
    }
    public withTriggers(triggers: Array<PipelineTrigger>): ShowPipelineDetailResponse {
        this['triggers'] = triggers;
        return this;
    }
    public withGroupId(groupId: string): ShowPipelineDetailResponse {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withDefinition(definition: string): ShowPipelineDetailResponse {
        this['definition'] = definition;
        return this;
    }
    public withSecurityLevel(securityLevel: number): ShowPipelineDetailResponse {
        this['security_level'] = securityLevel;
        return this;
    }
    public set securityLevel(securityLevel: number  | undefined) {
        this['security_level'] = securityLevel;
    }
    public get securityLevel(): number | undefined {
        return this['security_level'];
    }
    public withOriginId(originId: string): ShowPipelineDetailResponse {
        this['origin_id'] = originId;
        return this;
    }
    public set originId(originId: string  | undefined) {
        this['origin_id'] = originId;
    }
    public get originId(): string | undefined {
        return this['origin_id'];
    }
    public withDisableReleaseBranchManagement(disableReleaseBranchManagement: boolean): ShowPipelineDetailResponse {
        this['disable_release_branch_management'] = disableReleaseBranchManagement;
        return this;
    }
    public set disableReleaseBranchManagement(disableReleaseBranchManagement: boolean  | undefined) {
        this['disable_release_branch_management'] = disableReleaseBranchManagement;
    }
    public get disableReleaseBranchManagement(): boolean | undefined {
        return this['disable_release_branch_management'];
    }
    public withDeleted(deleted: boolean): ShowPipelineDetailResponse {
        this['deleted'] = deleted;
        return this;
    }
    public withBanned(banned: boolean): ShowPipelineDetailResponse {
        this['banned'] = banned;
        return this;
    }
    public withFromGitCode(fromGitCode: boolean): ShowPipelineDetailResponse {
        this['from_git_code'] = fromGitCode;
        return this;
    }
    public set fromGitCode(fromGitCode: boolean  | undefined) {
        this['from_git_code'] = fromGitCode;
    }
    public get fromGitCode(): boolean | undefined {
        return this['from_git_code'];
    }
    public withFromGitCodeRepo(fromGitCodeRepo: boolean): ShowPipelineDetailResponse {
        this['from_git_code_repo'] = fromGitCodeRepo;
        return this;
    }
    public set fromGitCodeRepo(fromGitCodeRepo: boolean  | undefined) {
        this['from_git_code_repo'] = fromGitCodeRepo;
    }
    public get fromGitCodeRepo(): boolean | undefined {
        return this['from_git_code_repo'];
    }
    public withGitCodeRepoId(gitCodeRepoId: string): ShowPipelineDetailResponse {
        this['git_code_repo_id'] = gitCodeRepoId;
        return this;
    }
    public set gitCodeRepoId(gitCodeRepoId: string  | undefined) {
        this['git_code_repo_id'] = gitCodeRepoId;
    }
    public get gitCodeRepoId(): string | undefined {
        return this['git_code_repo_id'];
    }
    public withYamlDefinition(yamlDefinition: string): ShowPipelineDetailResponse {
        this['yaml_definition'] = yamlDefinition;
        return this;
    }
    public set yamlDefinition(yamlDefinition: string  | undefined) {
        this['yaml_definition'] = yamlDefinition;
    }
    public get yamlDefinition(): string | undefined {
        return this['yaml_definition'];
    }
    public withPacRepoRelation(pacRepoRelation: object): ShowPipelineDetailResponse {
        this['pac_repo_relation'] = pacRepoRelation;
        return this;
    }
    public set pacRepoRelation(pacRepoRelation: object  | undefined) {
        this['pac_repo_relation'] = pacRepoRelation;
    }
    public get pacRepoRelation(): object | undefined {
        return this['pac_repo_relation'];
    }
    public withYamlContent(yamlContent: string): ShowPipelineDetailResponse {
        this['yaml_content'] = yamlContent;
        return this;
    }
    public set yamlContent(yamlContent: string  | undefined) {
        this['yaml_content'] = yamlContent;
    }
    public get yamlContent(): string | undefined {
        return this['yaml_content'];
    }
    public withAgencyName(agencyName: string): ShowPipelineDetailResponse {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): string | undefined {
        return this['agency_name'];
    }
    public withExecutionPlans(executionPlans: Array<object>): ShowPipelineDetailResponse {
        this['execution_plans'] = executionPlans;
        return this;
    }
    public set executionPlans(executionPlans: Array<object>  | undefined) {
        this['execution_plans'] = executionPlans;
    }
    public get executionPlans(): Array<object> | undefined {
        return this['execution_plans'];
    }
    public withFromSource(fromSource: number): ShowPipelineDetailResponse {
        this['from_source'] = fromSource;
        return this;
    }
    public set fromSource(fromSource: number  | undefined) {
        this['from_source'] = fromSource;
    }
    public get fromSource(): number | undefined {
        return this['from_source'];
    }
    public withProjectName(projectName: string): ShowPipelineDetailResponse {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withGroupName(groupName: string): ShowPipelineDetailResponse {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withConcurrencyControl(concurrencyControl: PipelineConcurrencyMgmt): ShowPipelineDetailResponse {
        this['concurrency_control'] = concurrencyControl;
        return this;
    }
    public set concurrencyControl(concurrencyControl: PipelineConcurrencyMgmt  | undefined) {
        this['concurrency_control'] = concurrencyControl;
    }
    public get concurrencyControl(): PipelineConcurrencyMgmt | undefined {
        return this['concurrency_control'];
    }
    public withCancelStrategy(cancelStrategy: object): ShowPipelineDetailResponse {
        this['cancel_strategy'] = cancelStrategy;
        return this;
    }
    public set cancelStrategy(cancelStrategy: object  | undefined) {
        this['cancel_strategy'] = cancelStrategy;
    }
    public get cancelStrategy(): object | undefined {
        return this['cancel_strategy'];
    }
    public withTagIds(tagIds: Array<string>): ShowPipelineDetailResponse {
        this['tag_ids'] = tagIds;
        return this;
    }
    public set tagIds(tagIds: Array<string>  | undefined) {
        this['tag_ids'] = tagIds;
    }
    public get tagIds(): Array<string> | undefined {
        return this['tag_ids'];
    }
    public withVariableGroups(variableGroups: Array<string>): ShowPipelineDetailResponse {
        this['variable_groups'] = variableGroups;
        return this;
    }
    public set variableGroups(variableGroups: Array<string>  | undefined) {
        this['variable_groups'] = variableGroups;
    }
    public get variableGroups(): Array<string> | undefined {
        return this['variable_groups'];
    }
    public withSecurityLevelCode(securityLevelCode: string): ShowPipelineDetailResponse {
        this['security_level_code'] = securityLevelCode;
        return this;
    }
    public set securityLevelCode(securityLevelCode: string  | undefined) {
        this['security_level_code'] = securityLevelCode;
    }
    public get securityLevelCode(): string | undefined {
        return this['security_level_code'];
    }
    public withPermissions(permissions: object): ShowPipelineDetailResponse {
        this['permissions'] = permissions;
        return this;
    }
    public withSubjectId(subjectId: string): ShowPipelineDetailResponse {
        this['subject_id'] = subjectId;
        return this;
    }
    public set subjectId(subjectId: string  | undefined) {
        this['subject_id'] = subjectId;
    }
    public get subjectId(): string | undefined {
        return this['subject_id'];
    }
    public withDetailUrl(detailUrl: string): ShowPipelineDetailResponse {
        this['detail_url'] = detailUrl;
        return this;
    }
    public set detailUrl(detailUrl: string  | undefined) {
        this['detail_url'] = detailUrl;
    }
    public get detailUrl(): string | undefined {
        return this['detail_url'];
    }
    public withModifyUrl(modifyUrl: string): ShowPipelineDetailResponse {
        this['modify_url'] = modifyUrl;
        return this;
    }
    public set modifyUrl(modifyUrl: string  | undefined) {
        this['modify_url'] = modifyUrl;
    }
    public get modifyUrl(): string | undefined {
        return this['modify_url'];
    }
    public withTags(tags: Array<object>): ShowPipelineDetailResponse {
        this['tags'] = tags;
        return this;
    }
    public withIsCrModel(isCrModel: boolean): ShowPipelineDetailResponse {
        this['is_cr_model'] = isCrModel;
        return this;
    }
    public set isCrModel(isCrModel: boolean  | undefined) {
        this['is_cr_model'] = isCrModel;
    }
    public get isCrModel(): boolean | undefined {
        return this['is_cr_model'];
    }
    public withArchiveSource(archiveSource: object): ShowPipelineDetailResponse {
        this['archive_source'] = archiveSource;
        return this;
    }
    public set archiveSource(archiveSource: object  | undefined) {
        this['archive_source'] = archiveSource;
    }
    public get archiveSource(): object | undefined {
        return this['archive_source'];
    }
    public withYamlRepoProperties(yamlRepoProperties: object): ShowPipelineDetailResponse {
        this['yaml_repo_properties'] = yamlRepoProperties;
        return this;
    }
    public set yamlRepoProperties(yamlRepoProperties: object  | undefined) {
        this['yaml_repo_properties'] = yamlRepoProperties;
    }
    public get yamlRepoProperties(): object | undefined {
        return this['yaml_repo_properties'];
    }
    public withVariableGroupIds(variableGroupIds: Array<string>): ShowPipelineDetailResponse {
        this['variable_group_ids'] = variableGroupIds;
        return this;
    }
    public set variableGroupIds(variableGroupIds: Array<string>  | undefined) {
        this['variable_group_ids'] = variableGroupIds;
    }
    public get variableGroupIds(): Array<string> | undefined {
        return this['variable_group_ids'];
    }
    public withPacSourceAlias(pacSourceAlias: string): ShowPipelineDetailResponse {
        this['pac_source_alias'] = pacSourceAlias;
        return this;
    }
    public set pacSourceAlias(pacSourceAlias: string  | undefined) {
        this['pac_source_alias'] = pacSourceAlias;
    }
    public get pacSourceAlias(): string | undefined {
        return this['pac_source_alias'];
    }
    public withPacSourceRepoHttpsEndpoint(pacSourceRepoHttpsEndpoint: string): ShowPipelineDetailResponse {
        this['pac_source_repo_https_endpoint'] = pacSourceRepoHttpsEndpoint;
        return this;
    }
    public set pacSourceRepoHttpsEndpoint(pacSourceRepoHttpsEndpoint: string  | undefined) {
        this['pac_source_repo_https_endpoint'] = pacSourceRepoHttpsEndpoint;
    }
    public get pacSourceRepoHttpsEndpoint(): string | undefined {
        return this['pac_source_repo_https_endpoint'];
    }
}