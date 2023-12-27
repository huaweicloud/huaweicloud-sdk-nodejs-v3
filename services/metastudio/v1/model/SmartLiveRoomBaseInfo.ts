import { ErrorResponse } from './ErrorResponse';
import { ModelInfo } from './ModelInfo';


export class SmartLiveRoomBaseInfo {
    private 'room_id'?: string;
    private 'room_name'?: string;
    private 'room_type'?: SmartLiveRoomBaseInfoRoomTypeEnum | string;
    private 'room_state'?: SmartLiveRoomBaseInfoRoomStateEnum | string;
    private 'error_info'?: ErrorResponse;
    private 'room_description'?: string;
    private 'cover_url'?: string;
    private 'model_infos'?: Array<ModelInfo>;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'last_job_start_time'?: string;
    private 'last_job_end_time'?: string;
    private 'last_job_status'?: SmartLiveRoomBaseInfoLastJobStatusEnum | string;
    public constructor() { 
    }
    public withRoomId(roomId: string): SmartLiveRoomBaseInfo {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string  | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId(): string | undefined {
        return this['room_id'];
    }
    public withRoomName(roomName: string): SmartLiveRoomBaseInfo {
        this['room_name'] = roomName;
        return this;
    }
    public set roomName(roomName: string  | undefined) {
        this['room_name'] = roomName;
    }
    public get roomName(): string | undefined {
        return this['room_name'];
    }
    public withRoomType(roomType: SmartLiveRoomBaseInfoRoomTypeEnum | string): SmartLiveRoomBaseInfo {
        this['room_type'] = roomType;
        return this;
    }
    public set roomType(roomType: SmartLiveRoomBaseInfoRoomTypeEnum | string  | undefined) {
        this['room_type'] = roomType;
    }
    public get roomType(): SmartLiveRoomBaseInfoRoomTypeEnum | string | undefined {
        return this['room_type'];
    }
    public withRoomState(roomState: SmartLiveRoomBaseInfoRoomStateEnum | string): SmartLiveRoomBaseInfo {
        this['room_state'] = roomState;
        return this;
    }
    public set roomState(roomState: SmartLiveRoomBaseInfoRoomStateEnum | string  | undefined) {
        this['room_state'] = roomState;
    }
    public get roomState(): SmartLiveRoomBaseInfoRoomStateEnum | string | undefined {
        return this['room_state'];
    }
    public withErrorInfo(errorInfo: ErrorResponse): SmartLiveRoomBaseInfo {
        this['error_info'] = errorInfo;
        return this;
    }
    public set errorInfo(errorInfo: ErrorResponse  | undefined) {
        this['error_info'] = errorInfo;
    }
    public get errorInfo(): ErrorResponse | undefined {
        return this['error_info'];
    }
    public withRoomDescription(roomDescription: string): SmartLiveRoomBaseInfo {
        this['room_description'] = roomDescription;
        return this;
    }
    public set roomDescription(roomDescription: string  | undefined) {
        this['room_description'] = roomDescription;
    }
    public get roomDescription(): string | undefined {
        return this['room_description'];
    }
    public withCoverUrl(coverUrl: string): SmartLiveRoomBaseInfo {
        this['cover_url'] = coverUrl;
        return this;
    }
    public set coverUrl(coverUrl: string  | undefined) {
        this['cover_url'] = coverUrl;
    }
    public get coverUrl(): string | undefined {
        return this['cover_url'];
    }
    public withModelInfos(modelInfos: Array<ModelInfo>): SmartLiveRoomBaseInfo {
        this['model_infos'] = modelInfos;
        return this;
    }
    public set modelInfos(modelInfos: Array<ModelInfo>  | undefined) {
        this['model_infos'] = modelInfos;
    }
    public get modelInfos(): Array<ModelInfo> | undefined {
        return this['model_infos'];
    }
    public withCreateTime(createTime: string): SmartLiveRoomBaseInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): SmartLiveRoomBaseInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withLastJobStartTime(lastJobStartTime: string): SmartLiveRoomBaseInfo {
        this['last_job_start_time'] = lastJobStartTime;
        return this;
    }
    public set lastJobStartTime(lastJobStartTime: string  | undefined) {
        this['last_job_start_time'] = lastJobStartTime;
    }
    public get lastJobStartTime(): string | undefined {
        return this['last_job_start_time'];
    }
    public withLastJobEndTime(lastJobEndTime: string): SmartLiveRoomBaseInfo {
        this['last_job_end_time'] = lastJobEndTime;
        return this;
    }
    public set lastJobEndTime(lastJobEndTime: string  | undefined) {
        this['last_job_end_time'] = lastJobEndTime;
    }
    public get lastJobEndTime(): string | undefined {
        return this['last_job_end_time'];
    }
    public withLastJobStatus(lastJobStatus: SmartLiveRoomBaseInfoLastJobStatusEnum | string): SmartLiveRoomBaseInfo {
        this['last_job_status'] = lastJobStatus;
        return this;
    }
    public set lastJobStatus(lastJobStatus: SmartLiveRoomBaseInfoLastJobStatusEnum | string  | undefined) {
        this['last_job_status'] = lastJobStatus;
    }
    public get lastJobStatus(): SmartLiveRoomBaseInfoLastJobStatusEnum | string | undefined {
        return this['last_job_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SmartLiveRoomBaseInfoRoomTypeEnum {
    NORMAL = 'NORMAL',
    TEMP = 'TEMP',
    TEMPLATE = 'TEMPLATE'
}
/**
    * @export
    * @enum {string}
    */
export enum SmartLiveRoomBaseInfoRoomStateEnum {
    ENABLE = 'ENABLE',
    DISABLE = 'DISABLE',
    BLOCKED = 'BLOCKED'
}
/**
    * @export
    * @enum {string}
    */
export enum SmartLiveRoomBaseInfoLastJobStatusEnum {
    WAITING = 'WAITING',
    PROCESSING = 'PROCESSING',
    SUCCEED = 'SUCCEED',
    FAILED = 'FAILED',
    CANCELED = 'CANCELED'
}
