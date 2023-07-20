import { ApplicationBaseV3 } from './ApplicationBaseV3';
import { PipelineCreationResult } from './PipelineCreationResult';
import { RepositoryCreationResult } from './RepositoryCreationResult';
import { TemplateType } from './TemplateType';


export class ApplicationV3 {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'region_id'?: string;
    private 'region_name'?: string;
    private 'project_id'?: string;
    private 'project_name'?: string;
    public icon?: string;
    private 'pipeline_creation_result'?: Array<PipelineCreationResult>;
    private 'repository_creation_result'?: RepositoryCreationResult;
    private 'environment_creation_result'?: Array<string>;
    private 'template_types'?: Array<TemplateType>;
    private 'template_deployment'?: string;
    private 'deploy_type'?: ApplicationV3DeployTypeEnum | string;
    private 'creator_name'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public version?: string;
    public constructor(name?: string, regionId?: string, regionName?: string, projectId?: string, projectName?: string) { 
        this['name'] = name;
        this['region_id'] = regionId;
        this['region_name'] = regionName;
        this['project_id'] = projectId;
        this['project_name'] = projectName;
    }
    public withId(id: string): ApplicationV3 {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ApplicationV3 {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ApplicationV3 {
        this['description'] = description;
        return this;
    }
    public withRegionId(regionId: string): ApplicationV3 {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withRegionName(regionName: string): ApplicationV3 {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string  | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName(): string | undefined {
        return this['region_name'];
    }
    public withProjectId(projectId: string): ApplicationV3 {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): ApplicationV3 {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withIcon(icon: string): ApplicationV3 {
        this['icon'] = icon;
        return this;
    }
    public withPipelineCreationResult(pipelineCreationResult: Array<PipelineCreationResult>): ApplicationV3 {
        this['pipeline_creation_result'] = pipelineCreationResult;
        return this;
    }
    public set pipelineCreationResult(pipelineCreationResult: Array<PipelineCreationResult>  | undefined) {
        this['pipeline_creation_result'] = pipelineCreationResult;
    }
    public get pipelineCreationResult(): Array<PipelineCreationResult> | undefined {
        return this['pipeline_creation_result'];
    }
    public withRepositoryCreationResult(repositoryCreationResult: RepositoryCreationResult): ApplicationV3 {
        this['repository_creation_result'] = repositoryCreationResult;
        return this;
    }
    public set repositoryCreationResult(repositoryCreationResult: RepositoryCreationResult  | undefined) {
        this['repository_creation_result'] = repositoryCreationResult;
    }
    public get repositoryCreationResult(): RepositoryCreationResult | undefined {
        return this['repository_creation_result'];
    }
    public withEnvironmentCreationResult(environmentCreationResult: Array<string>): ApplicationV3 {
        this['environment_creation_result'] = environmentCreationResult;
        return this;
    }
    public set environmentCreationResult(environmentCreationResult: Array<string>  | undefined) {
        this['environment_creation_result'] = environmentCreationResult;
    }
    public get environmentCreationResult(): Array<string> | undefined {
        return this['environment_creation_result'];
    }
    public withTemplateTypes(templateTypes: Array<TemplateType>): ApplicationV3 {
        this['template_types'] = templateTypes;
        return this;
    }
    public set templateTypes(templateTypes: Array<TemplateType>  | undefined) {
        this['template_types'] = templateTypes;
    }
    public get templateTypes(): Array<TemplateType> | undefined {
        return this['template_types'];
    }
    public withTemplateDeployment(templateDeployment: string): ApplicationV3 {
        this['template_deployment'] = templateDeployment;
        return this;
    }
    public set templateDeployment(templateDeployment: string  | undefined) {
        this['template_deployment'] = templateDeployment;
    }
    public get templateDeployment(): string | undefined {
        return this['template_deployment'];
    }
    public withDeployType(deployType: ApplicationV3DeployTypeEnum | string): ApplicationV3 {
        this['deploy_type'] = deployType;
        return this;
    }
    public set deployType(deployType: ApplicationV3DeployTypeEnum | string  | undefined) {
        this['deploy_type'] = deployType;
    }
    public get deployType(): ApplicationV3DeployTypeEnum | string | undefined {
        return this['deploy_type'];
    }
    public withCreatorName(creatorName: string): ApplicationV3 {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withCreatedAt(createdAt: string): ApplicationV3 {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ApplicationV3 {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withVersion(version: string): ApplicationV3 {
        this['version'] = version;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApplicationV3DeployTypeEnum {
    FUNCTION = 'function',
    CCI = 'cci',
    SERVICESTAGE_JAR = 'ServiceStage(Jar)',
    SERVICESTAGE_DOCKER = 'ServiceStage(Docker)',
    NONE = 'none'
}
