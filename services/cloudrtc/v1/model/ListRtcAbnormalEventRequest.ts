

export class ListRtcAbnormalEventRequest {
    private 'app_id'?: string;
    private 'room_id'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor(appId?: string, startTime?: string, endTime?: string) { 
        this['app_id'] = appId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withAppId(appId: string): ListRtcAbnormalEventRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withRoomId(roomId: string): ListRtcAbnormalEventRequest {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string  | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId(): string | undefined {
        return this['room_id'];
    }
    public withStartTime(startTime: string): ListRtcAbnormalEventRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListRtcAbnormalEventRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}