import { RecordParam } from './RecordParam';


export class IndividualStreamJobReq {
    private 'room_id'?: string;
    private 'user_id'?: string;
    private 'is_record_audio'?: boolean;
    private 'video_type'?: IndividualStreamJobReqVideoTypeEnum | string;
    private 'select_stream_type'?: IndividualStreamJobReqSelectStreamTypeEnum | string;
    private 'max_idle_time'?: number;
    private 'record_param'?: RecordParam;
    public constructor(roomId?: string, userId?: string) { 
        this['room_id'] = roomId;
        this['user_id'] = userId;
    }
    public withRoomId(roomId: string): IndividualStreamJobReq {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string  | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId(): string | undefined {
        return this['room_id'];
    }
    public withUserId(userId: string): IndividualStreamJobReq {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withIsRecordAudio(isRecordAudio: boolean): IndividualStreamJobReq {
        this['is_record_audio'] = isRecordAudio;
        return this;
    }
    public set isRecordAudio(isRecordAudio: boolean  | undefined) {
        this['is_record_audio'] = isRecordAudio;
    }
    public get isRecordAudio(): boolean | undefined {
        return this['is_record_audio'];
    }
    public withVideoType(videoType: IndividualStreamJobReqVideoTypeEnum | string): IndividualStreamJobReq {
        this['video_type'] = videoType;
        return this;
    }
    public set videoType(videoType: IndividualStreamJobReqVideoTypeEnum | string  | undefined) {
        this['video_type'] = videoType;
    }
    public get videoType(): IndividualStreamJobReqVideoTypeEnum | string | undefined {
        return this['video_type'];
    }
    public withSelectStreamType(selectStreamType: IndividualStreamJobReqSelectStreamTypeEnum | string): IndividualStreamJobReq {
        this['select_stream_type'] = selectStreamType;
        return this;
    }
    public set selectStreamType(selectStreamType: IndividualStreamJobReqSelectStreamTypeEnum | string  | undefined) {
        this['select_stream_type'] = selectStreamType;
    }
    public get selectStreamType(): IndividualStreamJobReqSelectStreamTypeEnum | string | undefined {
        return this['select_stream_type'];
    }
    public withMaxIdleTime(maxIdleTime: number): IndividualStreamJobReq {
        this['max_idle_time'] = maxIdleTime;
        return this;
    }
    public set maxIdleTime(maxIdleTime: number  | undefined) {
        this['max_idle_time'] = maxIdleTime;
    }
    public get maxIdleTime(): number | undefined {
        return this['max_idle_time'];
    }
    public withRecordParam(recordParam: RecordParam): IndividualStreamJobReq {
        this['record_param'] = recordParam;
        return this;
    }
    public set recordParam(recordParam: RecordParam  | undefined) {
        this['record_param'] = recordParam;
    }
    public get recordParam(): RecordParam | undefined {
        return this['record_param'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum IndividualStreamJobReqVideoTypeEnum {
    CAMERASTREAM = 'CAMERASTREAM',
    SCREENSTREAM = 'SCREENSTREAM'
}
/**
    * @export
    * @enum {string}
    */
export enum IndividualStreamJobReqSelectStreamTypeEnum {
    LD = 'LD',
    SD = 'SD',
    HD = 'HD',
    FHD = 'FHD'
}
