import { PublishParam } from './PublishParam';
import { RecordParam } from './RecordParam';


export class IndividualStreamJobReq {
    private 'room_id': string | undefined;
    private 'user_id': string | undefined;
    private 'is_record_audio'?: boolean | undefined;
    private 'video_type'?: IndividualStreamJobReqVideoTypeEnum | undefined;
    private 'select_stream_type'?: IndividualStreamJobReqSelectStreamTypeEnum | undefined;
    private 'max_idle_time'?: number | undefined;
    private 'publish_param'?: PublishParam | undefined;
    private 'record_param'?: RecordParam | undefined;
    public constructor(roomId?: any, userId?: any) { 
        this['room_id'] = roomId;
        this['user_id'] = userId;
    }
    public withRoomId(roomId: string): IndividualStreamJobReq {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId() {
        return this['room_id'];
    }
    public withUserId(userId: string): IndividualStreamJobReq {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string | undefined) {
        this['user_id'] = userId;
    }
    public get userId() {
        return this['user_id'];
    }
    public withIsRecordAudio(isRecordAudio: boolean): IndividualStreamJobReq {
        this['is_record_audio'] = isRecordAudio;
        return this;
    }
    public set isRecordAudio(isRecordAudio: boolean | undefined) {
        this['is_record_audio'] = isRecordAudio;
    }
    public get isRecordAudio() {
        return this['is_record_audio'];
    }
    public withVideoType(videoType: IndividualStreamJobReqVideoTypeEnum): IndividualStreamJobReq {
        this['video_type'] = videoType;
        return this;
    }
    public set videoType(videoType: IndividualStreamJobReqVideoTypeEnum | undefined) {
        this['video_type'] = videoType;
    }
    public get videoType() {
        return this['video_type'];
    }
    public withSelectStreamType(selectStreamType: IndividualStreamJobReqSelectStreamTypeEnum): IndividualStreamJobReq {
        this['select_stream_type'] = selectStreamType;
        return this;
    }
    public set selectStreamType(selectStreamType: IndividualStreamJobReqSelectStreamTypeEnum | undefined) {
        this['select_stream_type'] = selectStreamType;
    }
    public get selectStreamType() {
        return this['select_stream_type'];
    }
    public withMaxIdleTime(maxIdleTime: number): IndividualStreamJobReq {
        this['max_idle_time'] = maxIdleTime;
        return this;
    }
    public set maxIdleTime(maxIdleTime: number | undefined) {
        this['max_idle_time'] = maxIdleTime;
    }
    public get maxIdleTime() {
        return this['max_idle_time'];
    }
    public withPublishParam(publishParam: PublishParam): IndividualStreamJobReq {
        this['publish_param'] = publishParam;
        return this;
    }
    public set publishParam(publishParam: PublishParam | undefined) {
        this['publish_param'] = publishParam;
    }
    public get publishParam() {
        return this['publish_param'];
    }
    public withRecordParam(recordParam: RecordParam): IndividualStreamJobReq {
        this['record_param'] = recordParam;
        return this;
    }
    public set recordParam(recordParam: RecordParam | undefined) {
        this['record_param'] = recordParam;
    }
    public get recordParam() {
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
