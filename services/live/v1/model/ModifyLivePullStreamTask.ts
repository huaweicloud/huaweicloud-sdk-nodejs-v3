

export class ModifyLivePullStreamTask {
    private 'task_id'?: string;
    public status?: ModifyLivePullStreamTaskStatusEnum | string;
    private 'source_urls'?: Array<string>;
    private 'vod_loop_time'?: string;
    private 'vod_refresh_type'?: ModifyLivePullStreamTaskVodRefreshTypeEnum | string;
    private 'vod_start_video_index'?: number;
    private 'start_time'?: Date;
    private 'end_time'?: Date;
    private 'vod_start_video_time'?: number;
    private 'callback_events'?: Array<ModifyLivePullStreamTaskCallbackEventsEnum> | Array<string>;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: string): ModifyLivePullStreamTask {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withStatus(status: ModifyLivePullStreamTaskStatusEnum | string): ModifyLivePullStreamTask {
        this['status'] = status;
        return this;
    }
    public withSourceUrls(sourceUrls: Array<string>): ModifyLivePullStreamTask {
        this['source_urls'] = sourceUrls;
        return this;
    }
    public set sourceUrls(sourceUrls: Array<string>  | undefined) {
        this['source_urls'] = sourceUrls;
    }
    public get sourceUrls(): Array<string> | undefined {
        return this['source_urls'];
    }
    public withVodLoopTime(vodLoopTime: string): ModifyLivePullStreamTask {
        this['vod_loop_time'] = vodLoopTime;
        return this;
    }
    public set vodLoopTime(vodLoopTime: string  | undefined) {
        this['vod_loop_time'] = vodLoopTime;
    }
    public get vodLoopTime(): string | undefined {
        return this['vod_loop_time'];
    }
    public withVodRefreshType(vodRefreshType: ModifyLivePullStreamTaskVodRefreshTypeEnum | string): ModifyLivePullStreamTask {
        this['vod_refresh_type'] = vodRefreshType;
        return this;
    }
    public set vodRefreshType(vodRefreshType: ModifyLivePullStreamTaskVodRefreshTypeEnum | string  | undefined) {
        this['vod_refresh_type'] = vodRefreshType;
    }
    public get vodRefreshType(): ModifyLivePullStreamTaskVodRefreshTypeEnum | string | undefined {
        return this['vod_refresh_type'];
    }
    public withVodStartVideoIndex(vodStartVideoIndex: number): ModifyLivePullStreamTask {
        this['vod_start_video_index'] = vodStartVideoIndex;
        return this;
    }
    public set vodStartVideoIndex(vodStartVideoIndex: number  | undefined) {
        this['vod_start_video_index'] = vodStartVideoIndex;
    }
    public get vodStartVideoIndex(): number | undefined {
        return this['vod_start_video_index'];
    }
    public withStartTime(startTime: Date): ModifyLivePullStreamTask {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: Date  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): Date | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: Date): ModifyLivePullStreamTask {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): Date | undefined {
        return this['end_time'];
    }
    public withVodStartVideoTime(vodStartVideoTime: number): ModifyLivePullStreamTask {
        this['vod_start_video_time'] = vodStartVideoTime;
        return this;
    }
    public set vodStartVideoTime(vodStartVideoTime: number  | undefined) {
        this['vod_start_video_time'] = vodStartVideoTime;
    }
    public get vodStartVideoTime(): number | undefined {
        return this['vod_start_video_time'];
    }
    public withCallbackEvents(callbackEvents: Array<ModifyLivePullStreamTaskCallbackEventsEnum> | Array<string>): ModifyLivePullStreamTask {
        this['callback_events'] = callbackEvents;
        return this;
    }
    public set callbackEvents(callbackEvents: Array<ModifyLivePullStreamTaskCallbackEventsEnum> | Array<string>  | undefined) {
        this['callback_events'] = callbackEvents;
    }
    public get callbackEvents(): Array<ModifyLivePullStreamTaskCallbackEventsEnum> | Array<string> | undefined {
        return this['callback_events'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ModifyLivePullStreamTaskStatusEnum {
    PAUSE = 'pause',
    ENABLE = 'enable'
}
/**
    * @export
    * @enum {string}
    */
export enum ModifyLivePullStreamTaskVodRefreshTypeEnum {
    IMMEDIATE_NEW_SOURCE = 'immediate_new_source',
    CONTINUE_FROM_FILE_START = 'continue_from_file_start',
    CONTINUE_FROM_BREAK_POINT = 'continue_from_break_point'
}
/**
    * @export
    * @enum {string}
    */
export enum ModifyLivePullStreamTaskCallbackEventsEnum {
    TASKSTART = 'TaskStart',
    VODSOURCEFILESTART = 'VodSourceFileStart',
    VODSOURCEFILEFINISH = 'VodSourceFileFinish',
    RESETTASKCONFIG = 'ResetTaskConfig',
    TASKEXIT = 'TaskExit',
    TASKALARM = 'TaskAlarm'
}
