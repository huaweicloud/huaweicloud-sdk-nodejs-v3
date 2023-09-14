import { ListPipelinesPageLatestRunArtifactParams } from './ListPipelinesPageLatestRunArtifactParams';
import { ListPipelinesPageLatestRunBuildParams } from './ListPipelinesPageLatestRunBuildParams';
import { ListPipelinesPageLatestRunStageStatusList } from './ListPipelinesPageLatestRunStageStatusList';


export class ListPipelinesPageLatestRun {
    private 'pipeline_id'?: string;
    private 'pipeline_run_id'?: string;
    private 'executor_id'?: string;
    private 'executor_name'?: string;
    private 'stage_status_list'?: Array<ListPipelinesPageLatestRunStageStatusList>;
    public status?: string;
    private 'run_number'?: number;
    private 'trigger_type'?: string;
    private 'build_params'?: ListPipelinesPageLatestRunBuildParams;
    private 'artifact_params'?: ListPipelinesPageLatestRunArtifactParams;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'modify_url'?: string;
    private 'detail_url'?: string;
    public constructor() { 
    }
    public withPipelineId(pipelineId: string): ListPipelinesPageLatestRun {
        this['pipeline_id'] = pipelineId;
        return this;
    }
    public set pipelineId(pipelineId: string  | undefined) {
        this['pipeline_id'] = pipelineId;
    }
    public get pipelineId(): string | undefined {
        return this['pipeline_id'];
    }
    public withPipelineRunId(pipelineRunId: string): ListPipelinesPageLatestRun {
        this['pipeline_run_id'] = pipelineRunId;
        return this;
    }
    public set pipelineRunId(pipelineRunId: string  | undefined) {
        this['pipeline_run_id'] = pipelineRunId;
    }
    public get pipelineRunId(): string | undefined {
        return this['pipeline_run_id'];
    }
    public withExecutorId(executorId: string): ListPipelinesPageLatestRun {
        this['executor_id'] = executorId;
        return this;
    }
    public set executorId(executorId: string  | undefined) {
        this['executor_id'] = executorId;
    }
    public get executorId(): string | undefined {
        return this['executor_id'];
    }
    public withExecutorName(executorName: string): ListPipelinesPageLatestRun {
        this['executor_name'] = executorName;
        return this;
    }
    public set executorName(executorName: string  | undefined) {
        this['executor_name'] = executorName;
    }
    public get executorName(): string | undefined {
        return this['executor_name'];
    }
    public withStageStatusList(stageStatusList: Array<ListPipelinesPageLatestRunStageStatusList>): ListPipelinesPageLatestRun {
        this['stage_status_list'] = stageStatusList;
        return this;
    }
    public set stageStatusList(stageStatusList: Array<ListPipelinesPageLatestRunStageStatusList>  | undefined) {
        this['stage_status_list'] = stageStatusList;
    }
    public get stageStatusList(): Array<ListPipelinesPageLatestRunStageStatusList> | undefined {
        return this['stage_status_list'];
    }
    public withStatus(status: string): ListPipelinesPageLatestRun {
        this['status'] = status;
        return this;
    }
    public withRunNumber(runNumber: number): ListPipelinesPageLatestRun {
        this['run_number'] = runNumber;
        return this;
    }
    public set runNumber(runNumber: number  | undefined) {
        this['run_number'] = runNumber;
    }
    public get runNumber(): number | undefined {
        return this['run_number'];
    }
    public withTriggerType(triggerType: string): ListPipelinesPageLatestRun {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: string  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): string | undefined {
        return this['trigger_type'];
    }
    public withBuildParams(buildParams: ListPipelinesPageLatestRunBuildParams): ListPipelinesPageLatestRun {
        this['build_params'] = buildParams;
        return this;
    }
    public set buildParams(buildParams: ListPipelinesPageLatestRunBuildParams  | undefined) {
        this['build_params'] = buildParams;
    }
    public get buildParams(): ListPipelinesPageLatestRunBuildParams | undefined {
        return this['build_params'];
    }
    public withArtifactParams(artifactParams: ListPipelinesPageLatestRunArtifactParams): ListPipelinesPageLatestRun {
        this['artifact_params'] = artifactParams;
        return this;
    }
    public set artifactParams(artifactParams: ListPipelinesPageLatestRunArtifactParams  | undefined) {
        this['artifact_params'] = artifactParams;
    }
    public get artifactParams(): ListPipelinesPageLatestRunArtifactParams | undefined {
        return this['artifact_params'];
    }
    public withStartTime(startTime: number): ListPipelinesPageLatestRun {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListPipelinesPageLatestRun {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withModifyUrl(modifyUrl: string): ListPipelinesPageLatestRun {
        this['modify_url'] = modifyUrl;
        return this;
    }
    public set modifyUrl(modifyUrl: string  | undefined) {
        this['modify_url'] = modifyUrl;
    }
    public get modifyUrl(): string | undefined {
        return this['modify_url'];
    }
    public withDetailUrl(detailUrl: string): ListPipelinesPageLatestRun {
        this['detail_url'] = detailUrl;
        return this;
    }
    public set detailUrl(detailUrl: string  | undefined) {
        this['detail_url'] = detailUrl;
    }
    public get detailUrl(): string | undefined {
        return this['detail_url'];
    }
}