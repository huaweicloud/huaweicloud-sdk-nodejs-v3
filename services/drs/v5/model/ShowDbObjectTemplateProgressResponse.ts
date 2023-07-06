
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDbObjectTemplateProgressResponse extends SdkResponse {
    private 'send_success'?: boolean | undefined;
    private 'process_status'?: string | undefined;
    private 'parsed_success_number'?: string | undefined;
    public constructor() { 
        super();
    }
    public withSendSuccess(sendSuccess: boolean): ShowDbObjectTemplateProgressResponse {
        this['send_success'] = sendSuccess;
        return this;
    }
    public set sendSuccess(sendSuccess: boolean | undefined) {
        this['send_success'] = sendSuccess;
    }
    public get sendSuccess() {
        return this['send_success'];
    }
    public withProcessStatus(processStatus: string): ShowDbObjectTemplateProgressResponse {
        this['process_status'] = processStatus;
        return this;
    }
    public set processStatus(processStatus: string | undefined) {
        this['process_status'] = processStatus;
    }
    public get processStatus() {
        return this['process_status'];
    }
    public withParsedSuccessNumber(parsedSuccessNumber: string): ShowDbObjectTemplateProgressResponse {
        this['parsed_success_number'] = parsedSuccessNumber;
        return this;
    }
    public set parsedSuccessNumber(parsedSuccessNumber: string | undefined) {
        this['parsed_success_number'] = parsedSuccessNumber;
    }
    public get parsedSuccessNumber() {
        return this['parsed_success_number'];
    }
}