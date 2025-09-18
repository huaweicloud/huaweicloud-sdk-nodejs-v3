import { ListPipelineRunsPageBuildParams } from './ListPipelineRunsPageBuildParams';
import { ListPipelineRunsPageStageStatusList } from './ListPipelineRunsPageStageStatusList';
import { PipelineLatestRunArtifactParams } from './PipelineLatestRunArtifactParams';


export class ListPipelineRunsPagePipelineRuns {
    private 'pipeline_id'?: string;
    private 'pipeline_run_id'?: string;
    private 'executor_id'?: string;
    private 'executor_name'?: string;
    private 'stage_status_list'?: Array<ListPipelineRunsPageStageStatusList>;
    public status?: string;
    private 'run_number'?: number;
    private 'trigger_type'?: string;
    private 'build_params'?: ListPipelineRunsPageBuildParams;
    private 'artifact_params'?: PipelineLatestRunArtifactParams;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'detail_url'?: string;
    private 'modify_url'?: string;
    public constructor() { 
    }
    public withPipelineId(pipelineId: string): ListPipelineRunsPagePipelineRuns {
        this['pipeline_id'] = pipelineId;
        return this;
    }
    public set pipelineId(pipelineId: string  | undefined) {
        this['pipeline_id'] = pipelineId;
    }
    public get pipelineId(): string | undefined {
        return this['pipeline_id'];
    }
    public withPipelineRunId(pipelineRunId: string): ListPipelineRunsPagePipelineRuns {
        this['pipeline_run_id'] = pipelineRunId;
        return this;
    }
    public set pipelineRunId(pipelineRunId: string  | undefined) {
        this['pipeline_run_id'] = pipelineRunId;
    }
    public get pipelineRunId(): string | undefined {
        return this['pipeline_run_id'];
    }
    public withExecutorId(executorId: string): ListPipelineRunsPagePipelineRuns {
        this['executor_id'] = executorId;
        return this;
    }
    public set executorId(executorId: string  | undefined) {
        this['executor_id'] = executorId;
    }
    public get executorId(): string | undefined {
        return this['executor_id'];
    }
    public withExecutorName(executorName: string): ListPipelineRunsPagePipelineRuns {
        this['executor_name'] = executorName;
        return this;
    }
    public set executorName(executorName: string  | undefined) {
        this['executor_name'] = executorName;
    }
    public get executorName(): string | undefined {
        return this['executor_name'];
    }
    public withStageStatusList(stageStatusList: Array<ListPipelineRunsPageStageStatusList>): ListPipelineRunsPagePipelineRuns {
        this['stage_status_list'] = stageStatusList;
        return this;
    }
    public set stageStatusList(stageStatusList: Array<ListPipelineRunsPageStageStatusList>  | undefined) {
        this['stage_status_list'] = stageStatusList;
    }
    public get stageStatusList(): Array<ListPipelineRunsPageStageStatusList> | undefined {
        return this['stage_status_list'];
    }
    public withStatus(status: string): ListPipelineRunsPagePipelineRuns {
        this['status'] = status;
        return this;
    }
    public withRunNumber(runNumber: number): ListPipelineRunsPagePipelineRuns {
        this['run_number'] = runNumber;
        return this;
    }
    public set runNumber(runNumber: number  | undefined) {
        this['run_number'] = runNumber;
    }
    public get runNumber(): number | undefined {
        return this['run_number'];
    }
    public withTriggerType(triggerType: string): ListPipelineRunsPagePipelineRuns {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: string  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): string | undefined {
        return this['trigger_type'];
    }
    public withBuildParams(buildParams: ListPipelineRunsPageBuildParams): ListPipelineRunsPagePipelineRuns {
        this['build_params'] = buildParams;
        return this;
    }
    public set buildParams(buildParams: ListPipelineRunsPageBuildParams  | undefined) {
        this['build_params'] = buildParams;
    }
    public get buildParams(): ListPipelineRunsPageBuildParams | undefined {
        return this['build_params'];
    }
    public withArtifactParams(artifactParams: PipelineLatestRunArtifactParams): ListPipelineRunsPagePipelineRuns {
        this['artifact_params'] = artifactParams;
        return this;
    }
    public set artifactParams(artifactParams: PipelineLatestRunArtifactParams  | undefined) {
        this['artifact_params'] = artifactParams;
    }
    public get artifactParams(): PipelineLatestRunArtifactParams | undefined {
        return this['artifact_params'];
    }
    public withStartTime(startTime: number): ListPipelineRunsPagePipelineRuns {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListPipelineRunsPagePipelineRuns {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withDetailUrl(detailUrl: string): ListPipelineRunsPagePipelineRuns {
        this['detail_url'] = detailUrl;
        return this;
    }
    public set detailUrl(detailUrl: string  | undefined) {
        this['detail_url'] = detailUrl;
    }
    public get detailUrl(): string | undefined {
        return this['detail_url'];
    }
    public withModifyUrl(modifyUrl: string): ListPipelineRunsPagePipelineRuns {
        this['modify_url'] = modifyUrl;
        return this;
    }
    public set modifyUrl(modifyUrl: string  | undefined) {
        this['modify_url'] = modifyUrl;
    }
    public get modifyUrl(): string | undefined {
        return this['modify_url'];
    }
}