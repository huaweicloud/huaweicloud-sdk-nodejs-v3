import { ErrorResponse } from './ErrorResponse';
import { ModelInfo } from './ModelInfo';
import { SharedConfig } from './SharedConfig';


export class SmartLiveRoomBaseInfo {
    private 'room_id'?: string;
    private 'project_id'?: string;
    private 'room_name'?: string;
    private 'room_type'?: SmartLiveRoomBaseInfoRoomTypeEnum | string;
    private 'room_state'?: SmartLiveRoomBaseInfoRoomStateEnum | string;
    private 'view_mode'?: SmartLiveRoomBaseInfoViewModeEnum | string;
    private 'error_info'?: ErrorResponse;
    private 'shared_config'?: SharedConfig;
    private 'room_description'?: string;
    private 'cover_url'?: string;
    public thumbnail?: string;
    private 'model_infos'?: Array<ModelInfo>;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'last_job_start_time'?: string;
    private 'last_job_end_time'?: string;
    private 'last_job_status'?: SmartLiveRoomBaseInfoLastJobStatusEnum | string;
    private 'priv_data'?: string;
    private 'confirm_state'?: SmartLiveRoomBaseInfoConfirmStateEnum | string;
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
    public withProjectId(projectId: string): SmartLiveRoomBaseInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
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
    public withViewMode(viewMode: SmartLiveRoomBaseInfoViewModeEnum | string): SmartLiveRoomBaseInfo {
        this['view_mode'] = viewMode;
        return this;
    }
    public set viewMode(viewMode: SmartLiveRoomBaseInfoViewModeEnum | string  | undefined) {
        this['view_mode'] = viewMode;
    }
    public get viewMode(): SmartLiveRoomBaseInfoViewModeEnum | string | undefined {
        return this['view_mode'];
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
    public withSharedConfig(sharedConfig: SharedConfig): SmartLiveRoomBaseInfo {
        this['shared_config'] = sharedConfig;
        return this;
    }
    public set sharedConfig(sharedConfig: SharedConfig  | undefined) {
        this['shared_config'] = sharedConfig;
    }
    public get sharedConfig(): SharedConfig | undefined {
        return this['shared_config'];
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
    public withThumbnail(thumbnail: string): SmartLiveRoomBaseInfo {
        this['thumbnail'] = thumbnail;
        return this;
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
    public withPrivData(privData: string): SmartLiveRoomBaseInfo {
        this['priv_data'] = privData;
        return this;
    }
    public set privData(privData: string  | undefined) {
        this['priv_data'] = privData;
    }
    public get privData(): string | undefined {
        return this['priv_data'];
    }
    public withConfirmState(confirmState: SmartLiveRoomBaseInfoConfirmStateEnum | string): SmartLiveRoomBaseInfo {
        this['confirm_state'] = confirmState;
        return this;
    }
    public set confirmState(confirmState: SmartLiveRoomBaseInfoConfirmStateEnum | string  | undefined) {
        this['confirm_state'] = confirmState;
    }
    public get confirmState(): SmartLiveRoomBaseInfoConfirmStateEnum | string | undefined {
        return this['confirm_state'];
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
export enum SmartLiveRoomBaseInfoViewModeEnum {
    LANDSCAPE = 'LANDSCAPE',
    VERTICAL = 'VERTICAL'
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
    CANCELED = 'CANCELED',
    BLOCKED = 'BLOCKED'
}
/**
    * @export
    * @enum {string}
    */
export enum SmartLiveRoomBaseInfoConfirmStateEnum {
    UNCONFIRM = 'UNCONFIRM',
    CONFIRMED = 'CONFIRMED',
    REJECT = 'REJECT'
}
