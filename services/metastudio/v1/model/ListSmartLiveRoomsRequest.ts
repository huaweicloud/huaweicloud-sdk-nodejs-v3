

export class ListSmartLiveRoomsRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    private 'X-App-UserId'?: string;
    public offset?: number;
    public limit?: number;
    private 'room_name'?: string;
    private 'dh_id'?: string;
    private 'model_name'?: string;
    private 'live_state'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'room_type'?: string;
    private 'template_own_type'?: string;
    public constructor() { 
    }
    public withAuthorization(authorization: string): ListSmartLiveRoomsRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ListSmartLiveRoomsRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): ListSmartLiveRoomsRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withXAppUserId(xAppUserId: string): ListSmartLiveRoomsRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withOffset(offset: number): ListSmartLiveRoomsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSmartLiveRoomsRequest {
        this['limit'] = limit;
        return this;
    }
    public withRoomName(roomName: string): ListSmartLiveRoomsRequest {
        this['room_name'] = roomName;
        return this;
    }
    public set roomName(roomName: string  | undefined) {
        this['room_name'] = roomName;
    }
    public get roomName(): string | undefined {
        return this['room_name'];
    }
    public withDhId(dhId: string): ListSmartLiveRoomsRequest {
        this['dh_id'] = dhId;
        return this;
    }
    public set dhId(dhId: string  | undefined) {
        this['dh_id'] = dhId;
    }
    public get dhId(): string | undefined {
        return this['dh_id'];
    }
    public withModelName(modelName: string): ListSmartLiveRoomsRequest {
        this['model_name'] = modelName;
        return this;
    }
    public set modelName(modelName: string  | undefined) {
        this['model_name'] = modelName;
    }
    public get modelName(): string | undefined {
        return this['model_name'];
    }
    public withLiveState(liveState: string): ListSmartLiveRoomsRequest {
        this['live_state'] = liveState;
        return this;
    }
    public set liveState(liveState: string  | undefined) {
        this['live_state'] = liveState;
    }
    public get liveState(): string | undefined {
        return this['live_state'];
    }
    public withStartTime(startTime: string): ListSmartLiveRoomsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListSmartLiveRoomsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withRoomType(roomType: string): ListSmartLiveRoomsRequest {
        this['room_type'] = roomType;
        return this;
    }
    public set roomType(roomType: string  | undefined) {
        this['room_type'] = roomType;
    }
    public get roomType(): string | undefined {
        return this['room_type'];
    }
    public withTemplateOwnType(templateOwnType: string): ListSmartLiveRoomsRequest {
        this['template_own_type'] = templateOwnType;
        return this;
    }
    public set templateOwnType(templateOwnType: string  | undefined) {
        this['template_own_type'] = templateOwnType;
    }
    public get templateOwnType(): string | undefined {
        return this['template_own_type'];
    }
}