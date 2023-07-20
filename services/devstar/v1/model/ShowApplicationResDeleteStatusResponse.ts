import { PipelineDeleteStatus } from './PipelineDeleteStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowApplicationResDeleteStatusResponse extends SdkResponse {
    private 'repo_status'?: ShowApplicationResDeleteStatusResponseRepoStatusEnum | string;
    private 'pipeline_status'?: Array<PipelineDeleteStatus>;
    public constructor() { 
        super();
    }
    public withRepoStatus(repoStatus: ShowApplicationResDeleteStatusResponseRepoStatusEnum | string): ShowApplicationResDeleteStatusResponse {
        this['repo_status'] = repoStatus;
        return this;
    }
    public set repoStatus(repoStatus: ShowApplicationResDeleteStatusResponseRepoStatusEnum | string  | undefined) {
        this['repo_status'] = repoStatus;
    }
    public get repoStatus(): ShowApplicationResDeleteStatusResponseRepoStatusEnum | string | undefined {
        return this['repo_status'];
    }
    public withPipelineStatus(pipelineStatus: Array<PipelineDeleteStatus>): ShowApplicationResDeleteStatusResponse {
        this['pipeline_status'] = pipelineStatus;
        return this;
    }
    public set pipelineStatus(pipelineStatus: Array<PipelineDeleteStatus>  | undefined) {
        this['pipeline_status'] = pipelineStatus;
    }
    public get pipelineStatus(): Array<PipelineDeleteStatus> | undefined {
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
