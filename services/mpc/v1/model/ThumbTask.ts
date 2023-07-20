import { ObsObjInfo } from './ObsObjInfo';
import { PicInfo } from './PicInfo';


export class ThumbTask {
    private 'task_id'?: string;
    public status?: ThumbTaskStatusEnum | string;
    private 'create_time'?: string;
    private 'end_time'?: string;
    public input?: ObsObjInfo;
    public output?: ObsObjInfo;
    private 'output_file_name'?: string;
    private 'user_data'?: string;
    public description?: string;
    private 'thumbnail_info'?: Array<PicInfo>;
    public constructor() { 
    }
    public withTaskId(taskId: string): ThumbTask {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withStatus(status: ThumbTaskStatusEnum | string): ThumbTask {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: string): ThumbTask {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withEndTime(endTime: string): ThumbTask {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withInput(input: ObsObjInfo): ThumbTask {
        this['input'] = input;
        return this;
    }
    public withOutput(output: ObsObjInfo): ThumbTask {
        this['output'] = output;
        return this;
    }
    public withOutputFileName(outputFileName: string): ThumbTask {
        this['output_file_name'] = outputFileName;
        return this;
    }
    public set outputFileName(outputFileName: string  | undefined) {
        this['output_file_name'] = outputFileName;
    }
    public get outputFileName(): string | undefined {
        return this['output_file_name'];
    }
    public withUserData(userData: string): ThumbTask {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string  | undefined) {
        this['user_data'] = userData;
    }
    public get userData(): string | undefined {
        return this['user_data'];
    }
    public withDescription(description: string): ThumbTask {
        this['description'] = description;
        return this;
    }
    public withThumbnailInfo(thumbnailInfo: Array<PicInfo>): ThumbTask {
        this['thumbnail_info'] = thumbnailInfo;
        return this;
    }
    public set thumbnailInfo(thumbnailInfo: Array<PicInfo>  | undefined) {
        this['thumbnail_info'] = thumbnailInfo;
    }
    public get thumbnailInfo(): Array<PicInfo> | undefined {
        return this['thumbnail_info'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ThumbTaskStatusEnum {
    NO_TASK = 'NO_TASK',
    WAITING = 'WAITING',
    PROCESSING = 'PROCESSING',
    SUCCEEDED = 'SUCCEEDED',
    FAILED = 'FAILED',
    CANCELED = 'CANCELED'
}
