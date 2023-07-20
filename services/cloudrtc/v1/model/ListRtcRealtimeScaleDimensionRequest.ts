

export class ListRtcRealtimeScaleDimensionRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    public app?: string;
    private 'room_id'?: string;
    public metric?: string;
    public dimension?: string;
    public time?: string;
    public constructor(app?: string, metric?: string, dimension?: string, time?: string) { 
        this['app'] = app;
        this['metric'] = metric;
        this['dimension'] = dimension;
        this['time'] = time;
    }
    public withAuthorization(authorization: string): ListRtcRealtimeScaleDimensionRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ListRtcRealtimeScaleDimensionRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): ListRtcRealtimeScaleDimensionRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withApp(app: string): ListRtcRealtimeScaleDimensionRequest {
        this['app'] = app;
        return this;
    }
    public withRoomId(roomId: string): ListRtcRealtimeScaleDimensionRequest {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string  | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId(): string | undefined {
        return this['room_id'];
    }
    public withMetric(metric: string): ListRtcRealtimeScaleDimensionRequest {
        this['metric'] = metric;
        return this;
    }
    public withDimension(dimension: string): ListRtcRealtimeScaleDimensionRequest {
        this['dimension'] = dimension;
        return this;
    }
    public withTime(time: string): ListRtcRealtimeScaleDimensionRequest {
        this['time'] = time;
        return this;
    }
}