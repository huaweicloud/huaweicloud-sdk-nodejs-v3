

export class RtcHistoryScaleTimeValue {
    public date?: string;
    private 'user_count'?: number;
    private 'session_count'?: number;
    private 'room_count'?: number;
    private 'max_online_user_count'?: number;
    private 'max_online_room_count'?: number;
    private 'communication_duration'?: number;
    private 'video_communication_duration'?: number;
    private 'audio_communication_duration'?: number;
    public constructor() { 
    }
    public withDate(date: string): RtcHistoryScaleTimeValue {
        this['date'] = date;
        return this;
    }
    public withUserCount(userCount: number): RtcHistoryScaleTimeValue {
        this['user_count'] = userCount;
        return this;
    }
    public set userCount(userCount: number  | undefined) {
        this['user_count'] = userCount;
    }
    public get userCount(): number | undefined {
        return this['user_count'];
    }
    public withSessionCount(sessionCount: number): RtcHistoryScaleTimeValue {
        this['session_count'] = sessionCount;
        return this;
    }
    public set sessionCount(sessionCount: number  | undefined) {
        this['session_count'] = sessionCount;
    }
    public get sessionCount(): number | undefined {
        return this['session_count'];
    }
    public withRoomCount(roomCount: number): RtcHistoryScaleTimeValue {
        this['room_count'] = roomCount;
        return this;
    }
    public set roomCount(roomCount: number  | undefined) {
        this['room_count'] = roomCount;
    }
    public get roomCount(): number | undefined {
        return this['room_count'];
    }
    public withMaxOnlineUserCount(maxOnlineUserCount: number): RtcHistoryScaleTimeValue {
        this['max_online_user_count'] = maxOnlineUserCount;
        return this;
    }
    public set maxOnlineUserCount(maxOnlineUserCount: number  | undefined) {
        this['max_online_user_count'] = maxOnlineUserCount;
    }
    public get maxOnlineUserCount(): number | undefined {
        return this['max_online_user_count'];
    }
    public withMaxOnlineRoomCount(maxOnlineRoomCount: number): RtcHistoryScaleTimeValue {
        this['max_online_room_count'] = maxOnlineRoomCount;
        return this;
    }
    public set maxOnlineRoomCount(maxOnlineRoomCount: number  | undefined) {
        this['max_online_room_count'] = maxOnlineRoomCount;
    }
    public get maxOnlineRoomCount(): number | undefined {
        return this['max_online_room_count'];
    }
    public withCommunicationDuration(communicationDuration: number): RtcHistoryScaleTimeValue {
        this['communication_duration'] = communicationDuration;
        return this;
    }
    public set communicationDuration(communicationDuration: number  | undefined) {
        this['communication_duration'] = communicationDuration;
    }
    public get communicationDuration(): number | undefined {
        return this['communication_duration'];
    }
    public withVideoCommunicationDuration(videoCommunicationDuration: number): RtcHistoryScaleTimeValue {
        this['video_communication_duration'] = videoCommunicationDuration;
        return this;
    }
    public set videoCommunicationDuration(videoCommunicationDuration: number  | undefined) {
        this['video_communication_duration'] = videoCommunicationDuration;
    }
    public get videoCommunicationDuration(): number | undefined {
        return this['video_communication_duration'];
    }
    public withAudioCommunicationDuration(audioCommunicationDuration: number): RtcHistoryScaleTimeValue {
        this['audio_communication_duration'] = audioCommunicationDuration;
        return this;
    }
    public set audioCommunicationDuration(audioCommunicationDuration: number  | undefined) {
        this['audio_communication_duration'] = audioCommunicationDuration;
    }
    public get audioCommunicationDuration(): number | undefined {
        return this['audio_communication_duration'];
    }
}