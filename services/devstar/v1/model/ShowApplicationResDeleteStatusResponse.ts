import { PipelineDeleteStatus } from './PipelineDeleteStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowApplicationResDeleteStatusResponse extends SdkResponse {
    private 'repo_status'?: ShowApplicationResDeleteStatusResponseRepoStatusEnum | undefined;
    private 'pipeline_status'?: Array<PipelineDeleteStatus> | undefined;
    public constructor() { 
        super();
    }
    public withRepoStatus(repoStatus: ShowApplicationResDeleteStatusResponseRepoStatusEnum): ShowApplicationResDeleteStatusResponse {
        this['repo_status'] = repoStatus;
        return this;
    }
    public set repoStatus(repoStatus: ShowApplicationResDeleteStatusResponseRepoStatusEnum | undefined) {
        this['repo_status'] = repoStatus;
    }
    public get repoStatus() {
        return this['repo_status'];
    }
    public withPipelineStatus(pipelineStatus: Array<PipelineDeleteStatus>): ShowApplicationResDeleteStatusResponse {
        this['pipeline_status'] = pipelineStatus;
        return this;
    }
    public set pipelineStatus(pipelineStatus: Array<PipelineDeleteStatus> | undefined) {
        this['pipeline_status'] = pipelineStatus;
    }
    public get pipelineStatus() {
        return this['pipeline_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowApplicationResDeleteStatusResponseRepoStatusEnum {
    DELETED = 'deleted',
    FAILED = 'failed',
    GOING = 'going'
}
