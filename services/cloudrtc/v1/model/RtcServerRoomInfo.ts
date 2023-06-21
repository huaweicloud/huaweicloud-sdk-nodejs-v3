

export class RtcServerRoomInfo {
    public domain?: string;
    public app?: string;
    private 'room_id'?: string | undefined;
    public state?: RtcServerRoomInfoStateEnum;
    public duration?: number;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    public constructor() { 
    }
    public withDomain(domain: string): RtcServerRoomInfo {
        this['domain'] = domain;
        return this;
    }
    public withApp(app: string): RtcServerRoomInfo {
        this['app'] = app;
        return this;
    }
    public withRoomId(roomId: string): RtcServerRoomInfo {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId() {
        return this['room_id'];
    }
    public withState(state: RtcServerRoomInfoStateEnum): RtcServerRoomInfo {
        this['state'] = state;
        return this;
    }
    public withDuration(duration: number): RtcServerRoomInfo {
        this['duration'] = duration;
        return this;
    }
    public withStartTime(startTime: string): RtcServerRoomInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): RtcServerRoomInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RtcServerRoomInfoStateEnum {
    RUNNING = 'RUNNING',
    CLOSED = 'CLOSED'
}
