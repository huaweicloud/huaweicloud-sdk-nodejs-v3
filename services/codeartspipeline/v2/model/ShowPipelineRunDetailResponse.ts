import { PackageInfo } from './PackageInfo';
import { RunPipelineSource } from './RunPipelineSource';
import { StageRun } from './StageRun';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPipelineRunDetailResponse extends SdkResponse {
    public id?: string;
    private 'pipeline_id'?: string;
    private 'manifest_version'?: string;
    public name?: string;
    public description?: string;
    private 'is_publish'?: boolean;
    private 'executor_id'?: string;
    private 'executor_name'?: string;
    public status?: string;
    private 'trigger_type'?: string;
    private 'run_number'?: number;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public stages?: Array<StageRun>;
    private 'domain_id'?: string;
    private 'project_id'?: string;
    public region?: string;
    private 'component_id'?: string;
    public language?: string;
    public sources?: Array<RunPipelineSource>;
    public artifacts?: Array<PackageInfo>;
    private 'subject_id'?: string;
    private 'group_id'?: string;
    private 'group_name'?: string;
    private 'detail_url'?: string;
    private 'current_system_time'?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowPipelineRunDetailResponse {
        this['id'] = id;
        return this;
    }
    public withPipelineId(pipelineId: string): ShowPipelineRunDetailResponse {
        this['pipeline_id'] = pipelineId;
        return this;
    }
    public set pipelineId(pipelineId: string  | undefined) {
        this['pipeline_id'] = pipelineId;
    }
    public get pipelineId(): string | undefined {
        return this['pipeline_id'];
    }
    public withManifestVersion(manifestVersion: string): ShowPipelineRunDetailResponse {
        this['manifest_version'] = manifestVersion;
        return this;
    }
    public set manifestVersion(manifestVersion: string  | undefined) {
        this['manifest_version'] = manifestVersion;
    }
    public get manifestVersion(): string | undefined {
        return this['manifest_version'];
    }
    public withName(name: string): ShowPipelineRunDetailResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowPipelineRunDetailResponse {
        this['description'] = description;
        return this;
    }
    public withIsPublish(isPublish: boolean): ShowPipelineRunDetailResponse {
        this['is_publish'] = isPublish;
        return this;
    }
    public set isPublish(isPublish: boolean  | undefined) {
        this['is_publish'] = isPublish;
    }
    public get isPublish(): boolean | undefined {
        return this['is_publish'];
    }
    public withExecutorId(executorId: string): ShowPipelineRunDetailResponse {
        this['executor_id'] = executorId;
        return this;
    }
    public set executorId(executorId: string  | undefined) {
        this['executor_id'] = executorId;
    }
    public get executorId(): string | undefined {
        return this['executor_id'];
    }
    public withExecutorName(executorName: string): ShowPipelineRunDetailResponse {
        this['executor_name'] = executorName;
        return this;
    }
    public set executorName(executorName: string  | undefined) {
        this['executor_name'] = executorName;
    }
    public get executorName(): string | undefined {
        return this['executor_name'];
    }
    public withStatus(status: string): ShowPipelineRunDetailResponse {
        this['status'] = status;
        return this;
    }
    public withTriggerType(triggerType: string): ShowPipelineRunDetailResponse {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: string  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): string | undefined {
        return this['trigger_type'];
    }
    public withRunNumber(runNumber: number): ShowPipelineRunDetailResponse {
        this['run_number'] = runNumber;
        return this;
    }
    public set runNumber(runNumber: number  | undefined) {
        this['run_number'] = runNumber;
    }
    public get runNumber(): number | undefined {
        return this['run_number'];
    }
    public withStartTime(startTime: number): ShowPipelineRunDetailResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowPipelineRunDetailResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withStages(stages: Array<StageRun>): ShowPipelineRunDetailResponse {
        this['stages'] = stages;
        return this;
    }
    public withDomainId(domainId: string): ShowPipelineRunDetailResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withProjectId(projectId: string): ShowPipelineRunDetailResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRegion(region: string): ShowPipelineRunDetailResponse {
        this['region'] = region;
        return this;
    }
    public withComponentId(componentId: string): ShowPipelineRunDetailResponse {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withLanguage(language: string): ShowPipelineRunDetailResponse {
        this['language'] = language;
        return this;
    }
    public withSources(sources: Array<RunPipelineSource>): ShowPipelineRunDetailResponse {
        this['sources'] = sources;
        return this;
    }
    public withArtifacts(artifacts: Array<PackageInfo>): ShowPipelineRunDetailResponse {
        this['artifacts'] = artifacts;
        return this;
    }
    public withSubjectId(subjectId: string): ShowPipelineRunDetailResponse {
        this['subject_id'] = subjectId;
        return this;
    }
    public set subjectId(subjectId: string  | undefined) {
        this['subject_id'] = subjectId;
    }
    public get subjectId(): string | undefined {
        return this['subject_id'];
    }
    public withGroupId(groupId: string): ShowPipelineRunDetailResponse {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): ShowPipelineRunDetailResponse {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withDetailUrl(detailUrl: string): ShowPipelineRunDetailResponse {
        this['detail_url'] = detailUrl;
        return this;
    }
    public set detailUrl(detailUrl: string  | undefined) {
        this['detail_url'] = detailUrl;
    }
    public get detailUrl(): string | undefined {
        return this['detail_url'];
    }
    public withCurrentSystemTime(currentSystemTime: number): ShowPipelineRunDetailResponse {
        this['current_system_time'] = currentSystemTime;
        return this;
    }
    public set currentSystemTime(currentSystemTime: number  | undefined) {
        this['current_system_time'] = currentSystemTime;
    }
    public get currentSystemTime(): number | undefined {
        return this['current_system_time'];
    }
}