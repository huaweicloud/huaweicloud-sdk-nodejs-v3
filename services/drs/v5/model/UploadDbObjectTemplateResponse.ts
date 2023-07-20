
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UploadDbObjectTemplateResponse extends SdkResponse {
    private 'send_success'?: boolean;
    private 'process_status'?: string;
    private 'parsed_success_number'?: string;
    public constructor() { 
        super();
    }
    public withSendSuccess(sendSuccess: boolean): UploadDbObjectTemplateResponse {
        this['send_success'] = sendSuccess;
        return this;
    }
    public set sendSuccess(sendSuccess: boolean  | undefined) {
        this['send_success'] = sendSuccess;
    }
    public get sendSuccess(): boolean | undefined {
        return this['send_success'];
    }
    public withProcessStatus(processStatus: string): UploadDbObjectTemplateResponse {
        this['process_status'] = processStatus;
        return this;
    }
    public set processStatus(processStatus: string  | undefined) {
        this['process_status'] = processStatus;
    }
    public get processStatus(): string | undefined {
        return this['process_status'];
    }
    public withParsedSuccessNumber(parsedSuccessNumber: string): UploadDbObjectTemplateResponse {
        this['parsed_success_number'] = parsedSuccessNumber;
        return this;
    }
    public set parsedSuccessNumber(parsedSuccessNumber: string  | undefined) {
        this['parsed_success_number'] = parsedSuccessNumber;
    }
    public get parsedSuccessNumber(): string | undefined {
        return this['parsed_success_number'];
    }
}