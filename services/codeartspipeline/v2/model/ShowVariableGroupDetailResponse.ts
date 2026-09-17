import { QueryVariableGroupDetailRespRelatedPipelines } from './QueryVariableGroupDetailRespRelatedPipelines';
import { QueryVariableGroupDetailRespVariables } from './QueryVariableGroupDetailRespVariables';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVariableGroupDetailResponse extends SdkResponse {
    public id?: string;
    private 'project_id'?: string;
    private 'domain_id'?: string;
    public name?: string;
    public description?: string;
    public variables?: Array<QueryVariableGroupDetailRespVariables>;
    private 'related_pipelines'?: Array<QueryVariableGroupDetailRespRelatedPipelines>;
    private 'creator_id'?: string;
    private 'updater_id'?: string;
    private 'creator_name'?: string;
    private 'updater_name'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowVariableGroupDetailResponse {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): ShowVariableGroupDetailResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDomainId(domainId: string): ShowVariableGroupDetailResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withName(name: string): ShowVariableGroupDetailResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowVariableGroupDetailResponse {
        this['description'] = description;
        return this;
    }
    public withVariables(variables: Array<QueryVariableGroupDetailRespVariables>): ShowVariableGroupDetailResponse {
        this['variables'] = variables;
        return this;
    }
    public withRelatedPipelines(relatedPipelines: Array<QueryVariableGroupDetailRespRelatedPipelines>): ShowVariableGroupDetailResponse {
        this['related_pipelines'] = relatedPipelines;
        return this;
    }
    public set relatedPipelines(relatedPipelines: Array<QueryVariableGroupDetailRespRelatedPipelines>  | undefined) {
        this['related_pipelines'] = relatedPipelines;
    }
    public get relatedPipelines(): Array<QueryVariableGroupDetailRespRelatedPipelines> | undefined {
        return this['related_pipelines'];
    }
    public withCreatorId(creatorId: string): ShowVariableGroupDetailResponse {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withUpdaterId(updaterId: string): ShowVariableGroupDetailResponse {
        this['updater_id'] = updaterId;
        return this;
    }
    public set updaterId(updaterId: string  | undefined) {
        this['updater_id'] = updaterId;
    }
    public get updaterId(): string | undefined {
        return this['updater_id'];
    }
    public withCreatorName(creatorName: string): ShowVariableGroupDetailResponse {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withUpdaterName(updaterName: string): ShowVariableGroupDetailResponse {
        this['updater_name'] = updaterName;
        return this;
    }
    public set updaterName(updaterName: string  | undefined) {
        this['updater_name'] = updaterName;
    }
    public get updaterName(): string | undefined {
        return this['updater_name'];
    }
    public withCreateTime(createTime: number): ShowVariableGroupDetailResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): ShowVariableGroupDetailResponse {
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