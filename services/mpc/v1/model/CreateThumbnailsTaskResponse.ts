import { ObsObjInfo } from './ObsObjInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateThumbnailsTaskResponse extends SdkResponse {
    private 'task_id'?: string | undefined;
    public status?: string;
    private 'create_time'?: string | undefined;
    public output?: ObsObjInfo;
    private 'output_file_name'?: string | undefined;
    private 'thumbnail_time'?: string | undefined;
    public description?: string;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): CreateThumbnailsTaskResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withStatus(status: string): CreateThumbnailsTaskResponse {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: string): CreateThumbnailsTaskResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withOutput(output: ObsObjInfo): CreateThumbnailsTaskResponse {
        this['output'] = output;
        return this;
    }
    public withOutputFileName(outputFileName: string): CreateThumbnailsTaskResponse {
        this['output_file_name'] = outputFileName;
        return this;
    }
    public set outputFileName(outputFileName: string | undefined) {
        this['output_file_name'] = outputFileName;
    }
    public get outputFileName() {
        return this['output_file_name'];
    }
    public withThumbnailTime(thumbnailTime: string): CreateThumbnailsTaskResponse {
        this['thumbnail_time'] = thumbnailTime;
        return this;
    }
    public set thumbnailTime(thumbnailTime: string | undefined) {
        this['thumbnail_time'] = thumbnailTime;
    }
    public get thumbnailTime() {
        return this['thumbnail_time'];
    }
    public withDescription(description: string): CreateThumbnailsTaskResponse {
        this['description'] = description;
        return this;
    }
}