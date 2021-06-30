import { FileTreeNode } from './FileTreeNode';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunDevstarTemplateJobResponse extends SdkResponse {
    private 'job_id'?: string | undefined;
    private 'file_list'?: Array<FileTreeNode> | undefined;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): RunDevstarTemplateJobResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withFileList(fileList: Array<FileTreeNode>): RunDevstarTemplateJobResponse {
        this['file_list'] = fileList;
        return this;
    }
    public set fileList(fileList: Array<FileTreeNode> | undefined) {
        this['file_list'] = fileList;
    }
    public get fileList() {
        return this['file_list'];
    }
}