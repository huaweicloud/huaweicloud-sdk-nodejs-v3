import { Stages } from './Stages';


export class PipelineExecuteStates {
    public result?: string;
    public status?: string;
    public stages?: Array<Stages>;
    public executor?: string;
    private 'pipeline_name'?: string;
    private 'pipeline_id'?: string;
    private 'build_id'?: string;
    private 'detail_url'?: string;
    private 'modify_url'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor(result?: string, status?: string, stages?: Array<Stages>, executor?: string, pipelineName?: string, pipelineId?: string, buildId?: string, detailUrl?: string, modifyUrl?: string, startTime?: string, endTime?: string) { 
        this['result'] = result;
        this['status'] = status;
        this['stages'] = stages;
        this['executor'] = executor;
        this['pipeline_name'] = pipelineName;
        this['pipeline_id'] = pipelineId;
        this['build_id'] = buildId;
        this['detail_url'] = detailUrl;
        this['modify_url'] = modifyUrl;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withResult(result: string): PipelineExecuteStates {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): PipelineExecuteStates {
        this['status'] = status;
        return this;
    }
    public withStages(stages: Array<Stages>): PipelineExecuteStates {
        this['stages'] = stages;
        return this;
    }
    public withExecutor(executor: string): PipelineExecuteStates {
        this['executor'] = executor;
        return this;
    }
    public withPipelineName(pipelineName: string): PipelineExecuteStates {
        this['pipeline_name'] = pipelineName;
        return this;
    }
    public set pipelineName(pipelineName: string  | undefined) {
        this['pipeline_name'] = pipelineName;
    }
    public get pipelineName(): string | undefined {
        return this['pipeline_name'];
    }
    public withPipelineId(pipelineId: string): PipelineExecuteStates {
        this['pipeline_id'] = pipelineId;
        return this;
    }
    public set pipelineId(pipelineId: string  | undefined) {
        this['pipeline_id'] = pipelineId;
    }
    public get pipelineId(): string | undefined {
        return this['pipeline_id'];
    }
    public withBuildId(buildId: string): PipelineExecuteStates {
        this['build_id'] = buildId;
        return this;
    }
    public set buildId(buildId: string  | undefined) {
        this['build_id'] = buildId;
    }
    public get buildId(): string | undefined {
        return this['build_id'];
    }
    public withDetailUrl(detailUrl: string): PipelineExecuteStates {
        this['detail_url'] = detailUrl;
        return this;
    }
    public set detailUrl(detailUrl: string  | undefined) {
        this['detail_url'] = detailUrl;
    }
    public get detailUrl(): string | undefined {
        return this['detail_url'];
    }
    public withModifyUrl(modifyUrl: string): PipelineExecuteStates {
        this['modify_url'] = modifyUrl;
        return this;
    }
    public set modifyUrl(modifyUrl: string  | undefined) {
        this['modify_url'] = modifyUrl;
    }
    public get modifyUrl(): string | undefined {
        return this['modify_url'];
    }
    public withStartTime(startTime: string): PipelineExecuteStates {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): PipelineExecuteStates {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}