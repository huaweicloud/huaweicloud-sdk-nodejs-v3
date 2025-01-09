

export class QueryScreenRecordDetailRsp {
    public id?: string;
    private 'desktop_id'?: string;
    private 'desktop_name'?: string;
    private 'desktop_pool_id'?: string;
    public username?: string;
    public size?: number;
    public type?: string;
    public status?: string;
    private 'video_filename'?: string;
    private 'event_filename'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'update_time'?: string;
    public duration?: number;
    public constructor() { 
    }
    public withId(id: string): QueryScreenRecordDetailRsp {
        this['id'] = id;
        return this;
    }
    public withDesktopId(desktopId: string): QueryScreenRecordDetailRsp {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withDesktopName(desktopName: string): QueryScreenRecordDetailRsp {
        this['desktop_name'] = desktopName;
        return this;
    }
    public set desktopName(desktopName: string  | undefined) {
        this['desktop_name'] = desktopName;
    }
    public get desktopName(): string | undefined {
        return this['desktop_name'];
    }
    public withDesktopPoolId(desktopPoolId: string): QueryScreenRecordDetailRsp {
        this['desktop_pool_id'] = desktopPoolId;
        return this;
    }
    public set desktopPoolId(desktopPoolId: string  | undefined) {
        this['desktop_pool_id'] = desktopPoolId;
    }
    public get desktopPoolId(): string | undefined {
        return this['desktop_pool_id'];
    }
    public withUsername(username: string): QueryScreenRecordDetailRsp {
        this['username'] = username;
        return this;
    }
    public withSize(size: number): QueryScreenRecordDetailRsp {
        this['size'] = size;
        return this;
    }
    public withType(type: string): QueryScreenRecordDetailRsp {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): QueryScreenRecordDetailRsp {
        this['status'] = status;
        return this;
    }
    public withVideoFilename(videoFilename: string): QueryScreenRecordDetailRsp {
        this['video_filename'] = videoFilename;
        return this;
    }
    public set videoFilename(videoFilename: string  | undefined) {
        this['video_filename'] = videoFilename;
    }
    public get videoFilename(): string | undefined {
        return this['video_filename'];
    }
    public withEventFilename(eventFilename: string): QueryScreenRecordDetailRsp {
        this['event_filename'] = eventFilename;
        return this;
    }
    public set eventFilename(eventFilename: string  | undefined) {
        this['event_filename'] = eventFilename;
    }
    public get eventFilename(): string | undefined {
        return this['event_filename'];
    }
    public withStartTime(startTime: string): QueryScreenRecordDetailRsp {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): QueryScreenRecordDetailRsp {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withUpdateTime(updateTime: string): QueryScreenRecordDetailRsp {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withDuration(duration: number): QueryScreenRecordDetailRsp {
        this['duration'] = duration;
        return this;
    }
}