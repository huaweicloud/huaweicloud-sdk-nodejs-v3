import { ErrorResponse } from './ErrorResponse';
import { MediaDetail } from './MediaDetail';
import { ObsObjInfo } from './ObsObjInfo';


export class TaskDetailInfo {
    private 'task_id'?: string;
    public status?: TaskDetailInfoStatusEnum | string;
    public progress?: number;
    private 'create_time'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public input?: ObsObjInfo;
    public output?: ObsObjInfo;
    private 'user_data'?: string;
    private 'error_code'?: string;
    public description?: string;
    private 'media_detail'?: MediaDetail;
    private 'xcode_error'?: ErrorResponse;
    public constructor() { 
    }
    public withTaskId(taskId: string): TaskDetailInfo {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withStatus(status: TaskDetailInfoStatusEnum | string): TaskDetailInfo {
        this['status'] = status;
        return this;
    }
    public withProgress(progress: number): TaskDetailInfo {
        this['progress'] = progress;
        return this;
    }
    public withCreateTime(createTime: string): TaskDetailInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withStartTime(startTime: string): TaskDetailInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): TaskDetailInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withInput(input: ObsObjInfo): TaskDetailInfo {
        this['input'] = input;
        return this;
    }
    public withOutput(output: ObsObjInfo): TaskDetailInfo {
        this['output'] = output;
        return this;
    }
    public withUserData(userData: string): TaskDetailInfo {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string  | undefined) {
        this['user_data'] = userData;
    }
    public get userData(): string | undefined {
        return this['user_data'];
    }
    public withErrorCode(errorCode: string): TaskDetailInfo {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withDescription(description: string): TaskDetailInfo {
        this['description'] = description;
        return this;
    }
    public withMediaDetail(mediaDetail: MediaDetail): TaskDetailInfo {
        this['media_detail'] = mediaDetail;
        return this;
    }
    public set mediaDetail(mediaDetail: MediaDetail  | undefined) {
        this['media_detail'] = mediaDetail;
    }
    public get mediaDetail(): MediaDetail | undefined {
        return this['media_detail'];
    }
    public withXcodeError(xcodeError: ErrorResponse): TaskDetailInfo {
        this['xcode_error'] = xcodeError;
        return this;
    }
    public set xcodeError(xcodeError: ErrorResponse  | undefined) {
        this['xcode_error'] = xcodeError;
    }
    public get xcodeError(): ErrorResponse | undefined {
        return this['xcode_error'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TaskDetailInfoStatusEnum {
    NO_TASK = 'NO_TASK',
    WAITING = 'WAITING',
    TRANSCODING = 'TRANSCODING',
    SUCCEEDED = 'SUCCEEDED',
    FAILED = 'FAILED',
    CANCELED = 'CANCELED',
    NEED_TO_BE_AUDIT = 'NEED_TO_BE_AUDIT'
}
