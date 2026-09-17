import { ListVariableGroupsRespRelatedPipelines } from './ListVariableGroupsRespRelatedPipelines';
import { QueryVariableGroupDetailRespVariables } from './QueryVariableGroupDetailRespVariables';


export class ListVariableGroupsRespPipelineVariableGroups {
    public id?: string;
    private 'project_id'?: string;
    private 'domain_id'?: string;
    public name?: string;
    public description?: string;
    public variables?: Array<QueryVariableGroupDetailRespVariables>;
    private 'related_pipelines'?: Array<ListVariableGroupsRespRelatedPipelines>;
    private 'creator_id'?: string;
    private 'updater_id'?: string;
    private 'creator_name'?: string;
    private 'updater_name'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public constructor() { 
    }
    public withId(id: string): ListVariableGroupsRespPipelineVariableGroups {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): ListVariableGroupsRespPipelineVariableGroups {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDomainId(domainId: string): ListVariableGroupsRespPipelineVariableGroups {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withName(name: string): ListVariableGroupsRespPipelineVariableGroups {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ListVariableGroupsRespPipelineVariableGroups {
        this['description'] = description;
        return this;
    }
    public withVariables(variables: Array<QueryVariableGroupDetailRespVariables>): ListVariableGroupsRespPipelineVariableGroups {
        this['variables'] = variables;
        return this;
    }
    public withRelatedPipelines(relatedPipelines: Array<ListVariableGroupsRespRelatedPipelines>): ListVariableGroupsRespPipelineVariableGroups {
        this['related_pipelines'] = relatedPipelines;
        return this;
    }
    public set relatedPipelines(relatedPipelines: Array<ListVariableGroupsRespRelatedPipelines>  | undefined) {
        this['related_pipelines'] = relatedPipelines;
    }
    public get relatedPipelines(): Array<ListVariableGroupsRespRelatedPipelines> | undefined {
        return this['related_pipelines'];
    }
    public withCreatorId(creatorId: string): ListVariableGroupsRespPipelineVariableGroups {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withUpdaterId(updaterId: string): ListVariableGroupsRespPipelineVariableGroups {
        this['updater_id'] = updaterId;
        return this;
    }
    public set updaterId(updaterId: string  | undefined) {
        this['updater_id'] = updaterId;
    }
    public get updaterId(): string | undefined {
        return this['updater_id'];
    }
    public withCreatorName(creatorName: string): ListVariableGroupsRespPipelineVariableGroups {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withUpdaterName(updaterName: string): ListVariableGroupsRespPipelineVariableGroups {
        this['updater_name'] = updaterName;
        return this;
    }
    public set updaterName(updaterName: string  | undefined) {
        this['updater_name'] = updaterName;
    }
    public get updaterName(): string | undefined {
        return this['updater_name'];
    }
    public withCreateTime(createTime: number): ListVariableGroupsRespPipelineVariableGroups {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): ListVariableGroupsRespPipelineVariableGroups {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}