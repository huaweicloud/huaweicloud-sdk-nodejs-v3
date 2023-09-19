
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSmartLiveRoomResponse extends SdkResponse {
    private 'room_id'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRoomId(roomId: string): CreateSmartLiveRoomResponse {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string  | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId(): string | undefined {
        return this['room_id'];
    }
    public withXRequestId(xRequestId: string): CreateSmartLiveRoomResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}