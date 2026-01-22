

export class LivePullTaskInfo {
    private 'task_id'?: string;
    public status?: string;
    private 'create_time'?: Date;
    public region?: string;
    private 'source_type'?: string;
    private 'source_urls'?: Array<string>;
    public domain?: string;
    private 'app_name'?: string;
    private 'stream_name'?: string;
    private 'push_args'?: string;
    private 'destination_url'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'callback_events'?: Array<string>;
    private 'callback_url'?: string;
    private 'backup_source_type'?: string;
    private 'backup_source_urls'?: Array<string>;
    private 'vod_loop_time'?: string;
    private 'vod_start_video_index'?: number;
    private 'vod_start_video_time'?: number;
    private 'vod_refresh_type'?: LivePullTaskInfoVodRefreshTypeEnum | string;
    public constructor() { 
    }
    public withTaskId(taskId: string): LivePullTaskInfo {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withStatus(status: string): LivePullTaskInfo {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: Date): LivePullTaskInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withRegion(region: string): LivePullTaskInfo {
        this['region'] = region;
        return this;
    }
    public withSourceType(sourceType: string): LivePullTaskInfo {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: string  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): string | undefined {
        return this['source_type'];
    }
    public withSourceUrls(sourceUrls: Array<string>): LivePullTaskInfo {
        this['source_urls'] = sourceUrls;
        return this;
    }
    public set sourceUrls(sourceUrls: Array<string>  | undefined) {
        this['source_urls'] = sourceUrls;
    }
    public get sourceUrls(): Array<string> | undefined {
        return this['source_urls'];
    }
    public withDomain(domain: string): LivePullTaskInfo {
        this['domain'] = domain;
        return this;
    }
    public withAppName(appName: string): LivePullTaskInfo {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withStreamName(streamName: string): LivePullTaskInfo {
        this['stream_name'] = streamName;
        return this;
    }
    public set streamName(streamName: string  | undefined) {
        this['stream_name'] = streamName;
    }
    public get streamName(): string | undefined {
        return this['stream_name'];
    }
    public withPushArgs(pushArgs: string): LivePullTaskInfo {
        this['push_args'] = pushArgs;
        return this;
    }
    public set pushArgs(pushArgs: string  | undefined) {
        this['push_args'] = pushArgs;
    }
    public get pushArgs(): string | undefined {
        return this['push_args'];
    }
    public withDestinationUrl(destinationUrl: string): LivePullTaskInfo {
        this['destination_url'] = destinationUrl;
        return this;
    }
    public set destinationUrl(destinationUrl: string  | undefined) {
        this['destination_url'] = destinationUrl;
    }
    public get destinationUrl(): string | undefined {
        return this['destination_url'];
    }
    public withStartTime(startTime: string): LivePullTaskInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): LivePullTaskInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withCallbackEvents(callbackEvents: Array<string>): LivePullTaskInfo {
        this['callback_events'] = callbackEvents;
        return this;
    }
    public set callbackEvents(callbackEvents: Array<string>  | undefined) {
        this['callback_events'] = callbackEvents;
    }
    public get callbackEvents(): Array<string> | undefined {
        return this['callback_events'];
    }
    public withCallbackUrl(callbackUrl: string): LivePullTaskInfo {
        this['callback_url'] = callbackUrl;
        return this;
    }
    public set callbackUrl(callbackUrl: string  | undefined) {
        this['callback_url'] = callbackUrl;
    }
    public get callbackUrl(): string | undefined {
        return this['callback_url'];
    }
    public withBackupSourceType(backupSourceType: string): LivePullTaskInfo {
        this['backup_source_type'] = backupSourceType;
        return this;
    }
    public set backupSourceType(backupSourceType: string  | undefined) {
        this['backup_source_type'] = backupSourceType;
    }
    public get backupSourceType(): string | undefined {
        return this['backup_source_type'];
    }
    public withBackupSourceUrls(backupSourceUrls: Array<string>): LivePullTaskInfo {
        this['backup_source_urls'] = backupSourceUrls;
        return this;
    }
    public set backupSourceUrls(backupSourceUrls: Array<string>  | undefined) {
        this['backup_source_urls'] = backupSourceUrls;
    }
    public get backupSourceUrls(): Array<string> | undefined {
        return this['backup_source_urls'];
    }
    public withVodLoopTime(vodLoopTime: string): LivePullTaskInfo {
        this['vod_loop_time'] = vodLoopTime;
        return this;
    }
    public set vodLoopTime(vodLoopTime: string  | undefined) {
        this['vod_loop_time'] = vodLoopTime;
    }
    public get vodLoopTime(): string | undefined {
        return this['vod_loop_time'];
    }
    public withVodStartVideoIndex(vodStartVideoIndex: number): LivePullTaskInfo {
        this['vod_start_video_index'] = vodStartVideoIndex;
        return this;
    }
    public set vodStartVideoIndex(vodStartVideoIndex: number  | undefined) {
        this['vod_start_video_index'] = vodStartVideoIndex;
    }
    public get vodStartVideoIndex(): number | undefined {
        return this['vod_start_video_index'];
    }
    public withVodStartVideoTime(vodStartVideoTime: number): LivePullTaskInfo {
        this['vod_start_video_time'] = vodStartVideoTime;
        return this;
    }
    public set vodStartVideoTime(vodStartVideoTime: number  | undefined) {
        this['vod_start_video_time'] = vodStartVideoTime;
    }
    public get vodStartVideoTime(): number | undefined {
        return this['vod_start_video_time'];
    }
    public withVodRefreshType(vodRefreshType: LivePullTaskInfoVodRefreshTypeEnum | string): LivePullTaskInfo {
        this['vod_refresh_type'] = vodRefreshType;
        return this;
    }
    public set vodRefreshType(vodRefreshType: LivePullTaskInfoVodRefreshTypeEnum | string  | undefined) {
        this['vod_refresh_type'] = vodRefreshType;
    }
    public get vodRefreshType(): LivePullTaskInfoVodRefreshTypeEnum | string | undefined {
        return this['vod_refresh_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LivePullTaskInfoVodRefreshTypeEnum {
    IMMEDIATE_NEW_SOURCE = 'immediate_new_source',
    CONTINUE_FROM_FILE_START = 'continue_from_file_start',
    CONTINUE_FROM_BREAK_POINT = 'continue_from_break_point'
}
