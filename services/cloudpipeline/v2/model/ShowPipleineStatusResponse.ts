import { PipelineParameter } from './PipelineParameter';
import { PipelineStateStatus } from './PipelineStateStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPipleineStatusResponse extends SdkResponse {
    private 'pipeline_id'?: string;
    private 'pipeline_name'?: string;
    public executor?: string;
    private 'build_id'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public parameters?: Array<PipelineParameter>;
    public states?: Array<PipelineStateStatus>;
    private 'elapsed_time'?: string;
    public status?: string;
    public outcome?: string;
    private 'detail_url'?: string;
    public constructor() { 
        super();
    }
    public withPipelineId(pipelineId: string): ShowPipleineStatusResponse {
        this['pipeline_id'] = pipelineId;
        return this;
    }
    public set pipelineId(pipelineId: string  | undefined) {
        this['pipeline_id'] = pipelineId;
    }
    public get pipelineId(): string | undefined {
        return this['pipeline_id'];
    }
    public withPipelineName(pipelineName: string): ShowPipleineStatusResponse {
        this['pipeline_name'] = pipelineName;
        return this;
    }
    public set pipelineName(pipelineName: string  | undefined) {
        this['pipeline_name'] = pipelineName;
    }
    public get pipelineName(): string | undefined {
        return this['pipeline_name'];
    }
    public withExecutor(executor: string): ShowPipleineStatusResponse {
        this['executor'] = executor;
        return this;
    }
    public withBuildId(buildId: string): ShowPipleineStatusResponse {
        this['build_id'] = buildId;
        return this;
    }
    public set buildId(buildId: string  | undefined) {
        this['build_id'] = buildId;
    }
    public get buildId(): string | undefined {
        return this['build_id'];
    }
    public withStartTime(startTime: string): ShowPipleineStatusResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowPipleineStatusResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withParameters(parameters: Array<PipelineParameter>): ShowPipleineStatusResponse {
        this['parameters'] = parameters;
        return this;
    }
    public withStates(states: Array<PipelineStateStatus>): ShowPipleineStatusResponse {
        this['states'] = states;
        return this;
    }
    public withElapsedTime(elapsedTime: string): ShowPipleineStatusResponse {
        this['elapsed_time'] = elapsedTime;
        return this;
    }
    public set elapsedTime(elapsedTime: string  | undefined) {
        this['elapsed_time'] = elapsedTime;
    }
    public get elapsedTime(): string | undefined {
        return this['elapsed_time'];
    }
    public withStatus(status: string): ShowPipleineStatusResponse {
        this['status'] = status;
        return this;
    }
    public withOutcome(outcome: string): ShowPipleineStatusResponse {
        this['outcome'] = outcome;
        return this;
    }
    public withDetailUrl(detailUrl: string): ShowPipleineStatusResponse {
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