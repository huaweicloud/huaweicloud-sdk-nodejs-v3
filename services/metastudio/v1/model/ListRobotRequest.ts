

export class ListRobotRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    private 'X-App-UserId'?: string;
    public offset?: number;
    public limit?: number;
    private 'room_id'?: string;
    private 'robot_type'?: ListRobotRequestRobotTypeEnum | string;
    public constructor() { 
    }
    public withAuthorization(authorization: string): ListRobotRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ListRobotRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): ListRobotRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withXAppUserId(xAppUserId: string): ListRobotRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withOffset(offset: number): ListRobotRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRobotRequest {
        this['limit'] = limit;
        return this;
    }
    public withRoomId(roomId: string): ListRobotRequest {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string  | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId(): string | undefined {
        return this['room_id'];
    }
    public withRobotType(robotType: ListRobotRequestRobotTypeEnum | string): ListRobotRequest {
        this['robot_type'] = robotType;
        return this;
    }
    public set robotType(robotType: ListRobotRequestRobotTypeEnum | string  | undefined) {
        this['robot_type'] = robotType;
    }
    public get robotType(): ListRobotRequestRobotTypeEnum | string | undefined {
        return this['robot_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRobotRequestRobotTypeEnum {
    LIVE = 'LIVE',
    CHAT = 'CHAT'
}
