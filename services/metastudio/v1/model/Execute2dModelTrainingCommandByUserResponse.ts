import { MultipartUploadInfo } from './MultipartUploadInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class Execute2dModelTrainingCommandByUserResponse extends SdkResponse {
    private 'commond_result'?: Execute2dModelTrainingCommandByUserResponseCommondResultEnum | string;
    private 'attachment_upload_url'?: Array<string>;
    private 'multipart_data'?: Array<MultipartUploadInfo>;
    private 'excute_failed_msg'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withCommondResult(commondResult: Execute2dModelTrainingCommandByUserResponseCommondResultEnum | string): Execute2dModelTrainingCommandByUserResponse {
        this['commond_result'] = commondResult;
        return this;
    }
    public set commondResult(commondResult: Execute2dModelTrainingCommandByUserResponseCommondResultEnum | string  | undefined) {
        this['commond_result'] = commondResult;
    }
    public get commondResult(): Execute2dModelTrainingCommandByUserResponseCommondResultEnum | string | undefined {
        return this['commond_result'];
    }
    public withAttachmentUploadUrl(attachmentUploadUrl: Array<string>): Execute2dModelTrainingCommandByUserResponse {
        this['attachment_upload_url'] = attachmentUploadUrl;
        return this;
    }
    public set attachmentUploadUrl(attachmentUploadUrl: Array<string>  | undefined) {
        this['attachment_upload_url'] = attachmentUploadUrl;
    }
    public get attachmentUploadUrl(): Array<string> | undefined {
        return this['attachment_upload_url'];
    }
    public withMultipartData(multipartData: Array<MultipartUploadInfo>): Execute2dModelTrainingCommandByUserResponse {
        this['multipart_data'] = multipartData;
        return this;
    }
    public set multipartData(multipartData: Array<MultipartUploadInfo>  | undefined) {
        this['multipart_data'] = multipartData;
    }
    public get multipartData(): Array<MultipartUploadInfo> | undefined {
        return this['multipart_data'];
    }
    public withExcuteFailedMsg(excuteFailedMsg: string): Execute2dModelTrainingCommandByUserResponse {
        this['excute_failed_msg'] = excuteFailedMsg;
        return this;
    }
    public set excuteFailedMsg(excuteFailedMsg: string  | undefined) {
        this['excute_failed_msg'] = excuteFailedMsg;
    }
    public get excuteFailedMsg(): string | undefined {
        return this['excute_failed_msg'];
    }
    public withXRequestId(xRequestId: string): Execute2dModelTrainingCommandByUserResponse {
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

/**
    * @export
    * @enum {string}
    */
export enum Execute2dModelTrainingCommandByUserResponseCommondResultEnum {
    EXCUTE_SUCCESS = 'EXCUTE_SUCCESS',
    EXCUTE_FAILED = 'EXCUTE_FAILED'
}
