

export class ListRtcAbnormalEventDimensionRequest {
    public app?: string;
    private 'room_id'?: string;
    public dimension?: ListRtcAbnormalEventDimensionRequestDimensionEnum | string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor(app?: string) { 
        this['app'] = app;
    }
    public withApp(app: string): ListRtcAbnormalEventDimensionRequest {
        this['app'] = app;
        return this;
    }
    public withRoomId(roomId: string): ListRtcAbnormalEventDimensionRequest {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string  | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId(): string | undefined {
        return this['room_id'];
    }
    public withDimension(dimension: ListRtcAbnormalEventDimensionRequestDimensionEnum | string): ListRtcAbnormalEventDimensionRequest {
        this['dimension'] = dimension;
        return this;
    }
    public withStartTime(startTime: string): ListRtcAbnormalEventDimensionRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListRtcAbnormalEventDimensionRequest {
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

/**
    * @export
    * @enum {string}
    */
export enum ListRtcAbnormalEventDimensionRequestDimensionEnum {
    ABNORMAL_TYPE = 'abnormal_type',
    ABNORMAL_FACTOR = 'abnormal_factor'
}
