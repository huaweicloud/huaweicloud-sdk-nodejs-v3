import { CommonCreateTaskRsp } from './CommonCreateTaskRsp';
import { MetaData } from './MetaData';
import { ObsObjInfo } from './ObsObjInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateExtractTaskResponse extends SdkResponse {
    private 'task_id'?: string;
    public status?: string;
    private 'create_time'?: string;
    public output?: ObsObjInfo;
    private 'output_file_name'?: string;
    public description?: string;
    public metadata?: MetaData;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): CreateExtractTaskResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withStatus(status: string): CreateExtractTaskResponse {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: string): CreateExtractTaskResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withOutput(output: ObsObjInfo): CreateExtractTaskResponse {
        this['output'] = output;
        return this;
    }
    public withOutputFileName(outputFileName: string): CreateExtractTaskResponse {
        this['output_file_name'] = outputFileName;
        return this;
    }
    public set outputFileName(outputFileName: string  | undefined) {
        this['output_file_name'] = outputFileName;
    }
    public get outputFileName(): string | undefined {
        return this['output_file_name'];
    }
    public withDescription(description: string): CreateExtractTaskResponse {
        this['description'] = description;
        return this;
    }
    public withMetadata(metadata: MetaData): CreateExtractTaskResponse {
        this['metadata'] = metadata;
        return this;
    }
}