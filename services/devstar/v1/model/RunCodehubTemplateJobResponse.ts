import { FileTreeNode } from './FileTreeNode';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunCodehubTemplateJobResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'file_list'?: Array<FileTreeNode>;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): RunCodehubTemplateJobResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withFileList(fileList: Array<FileTreeNode>): RunCodehubTemplateJobResponse {
        this['file_list'] = fileList;
        return this;
    }
    public set fileList(fileList: Array<FileTreeNode>  | undefined) {
        this['file_list'] = fileList;
    }
    public get fileList(): Array<FileTreeNode> | undefined {
        return this['file_list'];
    }
}