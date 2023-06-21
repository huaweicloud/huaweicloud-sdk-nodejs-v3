

export class ListRtcRealtimeQualityRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    private 'X-Project-Id'?: string | undefined;
    public app: string;
    private 'room_id'?: string | undefined;
    public metric: string;
    private 'sdk_type': string | undefined;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    public constructor(app?: any, metric?: any, sdkType?: any) { 
        this['app'] = app;
        this['metric'] = metric;
        this['sdk_type'] = sdkType;
    }
    public withAuthorization(authorization: string): ListRtcRealtimeQualityRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ListRtcRealtimeQualityRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): ListRtcRealtimeQualityRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId() {
        return this['X-Project-Id'];
    }
    public withApp(app: string): ListRtcRealtimeQualityRequest {
        this['app'] = app;
        return this;
    }
    public withRoomId(roomId: string): ListRtcRealtimeQualityRequest {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId() {
        return this['room_id'];
    }
    public withMetric(metric: string): ListRtcRealtimeQualityRequest {
        this['metric'] = metric;
        return this;
    }
    public withSdkType(sdkType: string): ListRtcRealtimeQualityRequest {
        this['sdk_type'] = sdkType;
        return this;
    }
    public set sdkType(sdkType: string | undefined) {
        this['sdk_type'] = sdkType;
    }
    public get sdkType() {
        return this['sdk_type'];
    }
    public withStartTime(startTime: string): ListRtcRealtimeQualityRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListRtcRealtimeQualityRequest {
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