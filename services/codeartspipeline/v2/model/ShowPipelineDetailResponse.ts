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
}