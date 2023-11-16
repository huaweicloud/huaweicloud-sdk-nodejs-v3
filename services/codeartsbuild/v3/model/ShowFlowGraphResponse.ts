import { FlowGraphResult } from './FlowGraphResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFlowGraphResponse extends SdkResponse {
    public success?: boolean;
    public message?: string;
    private 'err_code'?: string;
    public result?: FlowGraphResult;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): ShowFlowGraphResponse {
        this['success'] = success;
        return this;
    }
    public withMessage(message: string): ShowFlowGraphResponse {
        this['message'] = message;
        return this;
    }
    public withErrCode(errCode: string): ShowFlowGraphResponse {
        this['err_code'] = errCode;
        return this;
    }
    public set errCode(errCode: string  | undefined) {
        this['err_code'] = errCode;
    }
    public get errCode(): string | undefined {
        return this['err_code'];
    }
    public withResult(result: FlowGraphResult): ShowFlowGraphResponse {
        this['result'] = result;
        return this;
    }
}