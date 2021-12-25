import { PipelineStageResp } from './PipelineStageResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPipelineLastStatusV2Response extends SdkResponse {
    private 'pipeline_id'?: string | undefined;
    public name?: string;
    public status?: string;
    public result?: string;
    public executor?: string;
    private 'start_time'?: string | undefined;
    private 'finish_time'?: string | undefined;
    private 'detail_url'?: string | undefined;
    private 'modify_url'?: string | undefined;
    private 'build_id'?: string | undefined;
    public stages?: Array<PipelineStageResp>;
    public constructor() { 
        super();
    }
    public withPipelineId(pipelineId: string): ShowPipelineLastStatusV2Response {
        this['pipeline_id'] = pipelineId;
        return this;
    }
    public set pipelineId(pipelineId: string | undefined) {
        this['pipeline_id'] = pipelineId;
    }
    public get pipelineId() {
        return this['pipeline_id'];
    }
    public withName(name: string): ShowPipelineLastStatusV2Response {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ShowPipelineLastStatusV2Response {
        this['status'] = status;
        return this;
    }
    public withResult(result: string): ShowPipelineLastStatusV2Response {
        this['result'] = result;
        return this;
    }
    public withExecutor(executor: string): ShowPipelineLastStatusV2Response {
        this['executor'] = executor;
        return this;
    }
    public withStartTime(startTime: string): ShowPipelineLastStatusV2Response {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withFinishTime(finishTime: string): ShowPipelineLastStatusV2Response {
        this['finish_time'] = finishTime;
        return this;
    }
    public set finishTime(finishTime: string | undefined) {
        this['finish_time'] = finishTime;
    }
    public get finishTime() {
        return this['finish_time'];
    }
    public withDetailUrl(detailUrl: string): ShowPipelineLastStatusV2Response {
        this['detail_url'] = detailUrl;
        return this;
    }
    public set detailUrl(detailUrl: string | undefined) {
        this['detail_url'] = detailUrl;
    }
    public get detailUrl() {
        return this['detail_url'];
    }
    public withModifyUrl(modifyUrl: string): ShowPipelineLastStatusV2Response {
        this['modify_url'] = modifyUrl;
        return this;
    }
    public set modifyUrl(modifyUrl: string | undefined) {
        this['modify_url'] = modifyUrl;
    }
    public get modifyUrl() {
        return this['modify_url'];
    }
    public withBuildId(buildId: string): ShowPipelineLastStatusV2Response {
        this['build_id'] = buildId;
        return this;
    }
    public set buildId(buildId: string | undefined) {
        this['build_id'] = buildId;
    }
    public get buildId() {
        return this['build_id'];
    }
    public withStages(stages: Array<PipelineStageResp>): ShowPipelineLastStatusV2Response {
        this['stages'] = stages;
        return this;
    }
}