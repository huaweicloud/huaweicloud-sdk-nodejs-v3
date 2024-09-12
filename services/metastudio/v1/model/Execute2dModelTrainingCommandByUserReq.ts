import { CommentData } from './CommentData';


export class Execute2dModelTrainingCommandByUserReq {
    public command?: Execute2dModelTrainingCommandByUserReqCommandEnum | string;
    private 'command_message'?: Execute2dModelTrainingCommandByUserReqCommandMessageEnum | string;
    private 'comment_data'?: CommentData;
    public constructor(command?: string) { 
        this['command'] = command;
    }
    public withCommand(command: Execute2dModelTrainingCommandByUserReqCommandEnum | string): Execute2dModelTrainingCommandByUserReq {
        this['command'] = command;
        return this;
    }
    public withCommandMessage(commandMessage: Execute2dModelTrainingCommandByUserReqCommandMessageEnum | string): Execute2dModelTrainingCommandByUserReq {
        this['command_message'] = commandMessage;
        return this;
    }
    public set commandMessage(commandMessage: Execute2dModelTrainingCommandByUserReqCommandMessageEnum | string  | undefined) {
        this['command_message'] = commandMessage;
    }
    public get commandMessage(): Execute2dModelTrainingCommandByUserReqCommandMessageEnum | string | undefined {
        return this['command_message'];
    }
    public withCommentData(commentData: CommentData): Execute2dModelTrainingCommandByUserReq {
        this['comment_data'] = commentData;
        return this;
    }
    public set commentData(commentData: CommentData  | undefined) {
        this['comment_data'] = commentData;
    }
    public get commentData(): CommentData | undefined {
        return this['comment_data'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum Execute2dModelTrainingCommandByUserReqCommandEnum {
    SUBMITVERIFYING = 'SUBMITVERIFYING',
    CONFIRM_ACCEPT = 'CONFIRM_ACCEPT',
    CONFIRM_REJECT = 'CONFIRM_REJECT',
    CONFIRM_ANSWER = 'CONFIRM_ANSWER',
    CONFIRM_PENDING = 'CONFIRM_PENDING',
    CONFIRM_ACTIVE = 'CONFIRM_ACTIVE',
    GET_MULTIPART_UPLOADED = 'GET_MULTIPART_UPLOADED',
    CONFIRM_REPAIR = 'CONFIRM_REPAIR',
    CONFIRM_MULTIPART_UPLOADED = 'CONFIRM_MULTIPART_UPLOADED',
    GET_ACTION_VIDEO_MULTIPART_UPLOADED = 'GET_ACTION_VIDEO_MULTIPART_UPLOADED',
    CONFIRM_ACTION_VIDEO_MULTIPART_UPLOADED = 'CONFIRM_ACTION_VIDEO_MULTIPART_UPLOADED'
}
/**
    * @export
    * @enum {string}
    */
export enum Execute2dModelTrainingCommandByUserReqCommandMessageEnum {
    UPDATE_VIDEO = 'UPDATE_VIDEO',
    UPLOAD_VIDEO = 'UPLOAD_VIDEO',
    CONFIRM_ACTION_VIDEO = 'CONFIRM_ACTION_VIDEO',
    GET_ACTION_VIDEO_MULTIPART = 'GET_ACTION_VIDEO_MULTIPART'
}
