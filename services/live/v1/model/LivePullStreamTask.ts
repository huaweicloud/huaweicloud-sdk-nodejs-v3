

export class LivePullStreamTask {
    public region?: string;
    private 'source_type'?: LivePullStreamTaskSourceTypeEnum | string;
    private 'source_urls'?: Array<string>;
    public domain?: string;
    private 'app_name'?: string;
    private 'stream_name'?: string;
    private 'push_args'?: string;
    private 'destination_url'?: string;
    private 'start_time'?: Date;
    private 'end_time'?: Date;
    private 'vod_loop_time'?: string;
    private 'vod_refresh_type'?: LivePullStreamTaskVodRefreshTypeEnum | string;
    private 'vod_start_video_index'?: number;
    private 'vod_start_video_time'?: number;
    private 'backup_source_type'?: string;
    private 'backup_source_urls'?: Array<string>;
    private 'callback_events'?: Array<LivePullStreamTaskCallbackEventsEnum> | Array<string>;
    private 'callback_url'?: string;
    public constructor(sourceType?: string, sourceUrls?: Array<string>) { 
        this['source_type'] = sourceType;
        this['source_urls'] = sourceUrls;
    }
    public withRegion(region: string): LivePullStreamTask {
        this['region'] = region;
        return this;
    }
    public withSourceType(sourceType: LivePullStreamTaskSourceTypeEnum | string): LivePullStreamTask {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: LivePullStreamTaskSourceTypeEnum | string  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): LivePullStreamTaskSourceTypeEnum | string | undefined {
        return this['source_type'];
    }
    public withSourceUrls(sourceUrls: Array<string>): LivePullStreamTask {
        this['source_urls'] = sourceUrls;
        return this;
    }
    public set sourceUrls(sourceUrls: Array<string>  | undefined) {
        this['source_urls'] = sourceUrls;
    }
    public get sourceUrls(): Array<string> | undefined {
        return this['source_urls'];
    }
    public withDomain(domain: string): LivePullStreamTask {
        this['domain'] = domain;
        return this;
    }
    public withAppName(appName: string): LivePullStreamTask {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withStreamName(streamName: string): LivePullStreamTask {
        this['stream_name'] = streamName;
        return this;
    }
    public set streamName(streamName: string  | undefined) {
        this['stream_name'] = streamName;
    }
    public get streamName(): string | undefined {
        return this['stream_name'];
    }
    public withPushArgs(pushArgs: string): LivePullStreamTask {
        this['push_args'] = pushArgs;
        return this;
    }
    public set pushArgs(pushArgs: string  | undefined) {
        this['push_args'] = pushArgs;
    }
    public get pushArgs(): string | undefined {
        return this['push_args'];
    }
    public withDestinationUrl(destinationUrl: string): LivePullStreamTask {
        this['destination_url'] = destinationUrl;
        return this;
    }
    public set destinationUrl(destinationUrl: string  | undefined) {
        this['destination_url'] = destinationUrl;
    }
    public get destinationUrl(): string | undefined {
        return this['destination_url'];
    }
    public withStartTime(startTime: Date): LivePullStreamTask {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: Date  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): Date | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: Date): LivePullStreamTask {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): Date | undefined {
        return this['end_time'];
    }
    public withVodLoopTime(vodLoopTime: string): LivePullStreamTask {
        this['vod_loop_time'] = vodLoopTime;
        return this;
    }
    public set vodLoopTime(vodLoopTime: string  | undefined) {
        this['vod_loop_time'] = vodLoopTime;
    }
    public get vodLoopTime(): string | undefined {
        return this['vod_loop_time'];
    }
    public withVodRefreshType(vodRefreshType: LivePullStreamTaskVodRefreshTypeEnum | string): LivePullStreamTask {
        this['vod_refresh_type'] = vodRefreshType;
        return this;
    }
    public set vodRefreshType(vodRefreshType: LivePullStreamTaskVodRefreshTypeEnum | string  | undefined) {
        this['vod_refresh_type'] = vodRefreshType;
    }
    public get vodRefreshType(): LivePullStreamTaskVodRefreshTypeEnum | string | undefined {
        return this['vod_refresh_type'];
    }
    public withVodStartVideoIndex(vodStartVideoIndex: number): LivePullStreamTask {
        this['vod_start_video_index'] = vodStartVideoIndex;
        return this;
    }
    public set vodStartVideoIndex(vodStartVideoIndex: number  | undefined) {
        this['vod_start_video_index'] = vodStartVideoIndex;
    }
    public get vodStartVideoIndex(): number | undefined {
        return this['vod_start_video_index'];
    }
    public withVodStartVideoTime(vodStartVideoTime: number): LivePullStreamTask {
        this['vod_start_video_time'] = vodStartVideoTime;
        return this;
    }
    public set vodStartVideoTime(vodStartVideoTime: number  | undefined) {
        this['vod_start_video_time'] = vodStartVideoTime;
    }
    public get vodStartVideoTime(): number | undefined {
        return this['vod_start_video_time'];
    }
    public withBackupSourceType(backupSourceType: string): LivePullStreamTask {
        this['backup_source_type'] = backupSourceType;
        return this;
    }
    public set backupSourceType(backupSourceType: string  | undefined) {
        this['backup_source_type'] = backupSourceType;
    }
    public get backupSourceType(): string | undefined {
        return this['backup_source_type'];
    }
    public withBackupSourceUrls(backupSourceUrls: Array<string>): LivePullStreamTask {
        this['backup_source_urls'] = backupSourceUrls;
        return this;
    }
    public set backupSourceUrls(backupSourceUrls: Array<string>  | undefined) {
        this['backup_source_urls'] = backupSourceUrls;
    }
    public get backupSourceUrls(): Array<string> | undefined {
        return this['backup_source_urls'];
    }
    public withCallbackEvents(callbackEvents: Array<LivePullStreamTaskCallbackEventsEnum> | Array<string>): LivePullStreamTask {
        this['callback_events'] = callbackEvents;
        return this;
    }
    public set callbackEvents(callbackEvents: Array<LivePullStreamTaskCallbackEventsEnum> | Array<string>  | undefined) {
        this['callback_events'] = callbackEvents;
    }
    public get callbackEvents(): Array<LivePullStreamTaskCallbackEventsEnum> | Array<string> | undefined {
        return this['callback_events'];
    }
    public withCallbackUrl(callbackUrl: string): LivePullStreamTask {
        this['callback_url'] = callbackUrl;
        return this;
    }
    public set callbackUrl(callbackUrl: string  | undefined) {
        this['callback_url'] = callbackUrl;
    }
    public get callbackUrl(): string | undefined {
        return this['callback_url'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LivePullStreamTaskSourceTypeEnum {
    PULLLIVEPUSHLIVE = 'PullLivePushLive',
    PULLVODPUSHLIVE = 'PullVodPushLive'
}
/**
    * @export
    * @enum {string}
    */
export enum LivePullStreamTaskVodRefreshTypeEnum {
    IMMEDIATE_NEW_SOURCE = 'immediate_new_source',
    CONTINUE_FROM_FILE_START = 'continue_from_file_start',
    CONTINUE_FROM_BREAK_POINT = 'continue_from_break_point'
}
/**
    * @export
    * @enum {string}
    */
export enum LivePullStreamTaskCallbackEventsEnum {
    TASKSTART = 'TaskStart',
    VODSOURCEFILESTART = 'VodSourceFileStart',
    VODSOURCEFILEFINISH = 'VodSourceFileFinish',
    RESETTASKCONFIG = 'ResetTaskConfig',
    TASKEXIT = 'TaskExit',
    TASKALARM = 'TaskAlarm'
}
