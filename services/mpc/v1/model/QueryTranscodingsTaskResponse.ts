import { AvParameters } from './AvParameters';
import { ObsObjInfo } from './ObsObjInfo';
import { PicInfo } from './PicInfo';
import { TranscodeDetail } from './TranscodeDetail';


export class QueryTranscodingsTaskResponse {
    private 'task_id'?: string | undefined;
    public status?: QueryTranscodingsTaskResponseStatusEnum;
    private 'create_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    private 'trans_template_id'?: Array<number> | undefined;
    public input?: ObsObjInfo;
    public output?: ObsObjInfo;
    private 'output_file_name'?: Array<string> | undefined;
    private 'user_data'?: string | undefined;
    private 'error_code'?: string | undefined;
    public description?: string;
    public tips?: string;
    private 'transcode_detail'?: TranscodeDetail | undefined;
    private 'thumbnail_output'?: ObsObjInfo | undefined;
    private 'thumbnail_outputname'?: string | undefined;
    private 'pic_info'?: Array<PicInfo> | undefined;
    private 'av_parameters'?: Array<AvParameters> | undefined;
    public constructor() { 
    }
    public withTaskId(taskId: string): QueryTranscodingsTaskResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withStatus(status: QueryTranscodingsTaskResponseStatusEnum): QueryTranscodingsTaskResponse {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: string): QueryTranscodingsTaskResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withEndTime(endTime: string): QueryTranscodingsTaskResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withTransTemplateId(transTemplateId: Array<number>): QueryTranscodingsTaskResponse {
        this['trans_template_id'] = transTemplateId;
        return this;
    }
    public set transTemplateId(transTemplateId: Array<number> | undefined) {
        this['trans_template_id'] = transTemplateId;
    }
    public get transTemplateId() {
        return this['trans_template_id'];
    }
    public withInput(input: ObsObjInfo): QueryTranscodingsTaskResponse {
        this['input'] = input;
        return this;
    }
    public withOutput(output: ObsObjInfo): QueryTranscodingsTaskResponse {
        this['output'] = output;
        return this;
    }
    public withOutputFileName(outputFileName: Array<string>): QueryTranscodingsTaskResponse {
        this['output_file_name'] = outputFileName;
        return this;
    }
    public set outputFileName(outputFileName: Array<string> | undefined) {
        this['output_file_name'] = outputFileName;
    }
    public get outputFileName() {
        return this['output_file_name'];
    }
    public withUserData(userData: string): QueryTranscodingsTaskResponse {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string | undefined) {
        this['user_data'] = userData;
    }
    public get userData() {
        return this['user_data'];
    }
    public withErrorCode(errorCode: string): QueryTranscodingsTaskResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
    public withDescription(description: string): QueryTranscodingsTaskResponse {
        this['description'] = description;
        return this;
    }
    public withTips(tips: string): QueryTranscodingsTaskResponse {
        this['tips'] = tips;
        return this;
    }
    public withTranscodeDetail(transcodeDetail: TranscodeDetail): QueryTranscodingsTaskResponse {
        this['transcode_detail'] = transcodeDetail;
        return this;
    }
    public set transcodeDetail(transcodeDetail: TranscodeDetail | undefined) {
        this['transcode_detail'] = transcodeDetail;
    }
    public get transcodeDetail() {
        return this['transcode_detail'];
    }
    public withThumbnailOutput(thumbnailOutput: ObsObjInfo): QueryTranscodingsTaskResponse {
        this['thumbnail_output'] = thumbnailOutput;
        return this;
    }
    public set thumbnailOutput(thumbnailOutput: ObsObjInfo | undefined) {
        this['thumbnail_output'] = thumbnailOutput;
    }
    public get thumbnailOutput() {
        return this['thumbnail_output'];
    }
    public withThumbnailOutputname(thumbnailOutputname: string): QueryTranscodingsTaskResponse {
        this['thumbnail_outputname'] = thumbnailOutputname;
        return this;
    }
    public set thumbnailOutputname(thumbnailOutputname: string | undefined) {
        this['thumbnail_outputname'] = thumbnailOutputname;
    }
    public get thumbnailOutputname() {
        return this['thumbnail_outputname'];
    }
    public withPicInfo(picInfo: Array<PicInfo>): QueryTranscodingsTaskResponse {
        this['pic_info'] = picInfo;
        return this;
    }
    public set picInfo(picInfo: Array<PicInfo> | undefined) {
        this['pic_info'] = picInfo;
    }
    public get picInfo() {
        return this['pic_info'];
    }
    public withAvParameters(avParameters: Array<AvParameters>): QueryTranscodingsTaskResponse {
        this['av_parameters'] = avParameters;
        return this;
    }
    public set avParameters(avParameters: Array<AvParameters> | undefined) {
        this['av_parameters'] = avParameters;
    }
    public get avParameters() {
        return this['av_parameters'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum QueryTranscodingsTaskResponseStatusEnum {
    NO_TASK = 'NO_TASK',
    WAITING = 'WAITING',
    TRANSCODING = 'TRANSCODING',
    SUCCEEDED = 'SUCCEEDED',
    FAILED = 'FAILED',
    CANCELED = 'CANCELED',
    NEED_TO_BE_AUDIT = 'NEED_TO_BE_AUDIT'
}
