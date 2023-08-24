import { RTCRoomInfoList } from './RTCRoomInfoList';


export class InputInfo {
    private 'rtc_room_info'?: RTCRoomInfoList;
    public constructor() { 
    }
    public withRtcRoomInfo(rtcRoomInfo: RTCRoomInfoList): InputInfo {
        this['rtc_room_info'] = rtcRoomInfo;
        return this;
    }
    public set rtcRoomInfo(rtcRoomInfo: RTCRoomInfoList  | undefined) {
        this['rtc_room_info'] = rtcRoomInfo;
    }
    public get rtcRoomInfo(): RTCRoomInfoList | undefined {
        return this['rtc_room_info'];
    }
}