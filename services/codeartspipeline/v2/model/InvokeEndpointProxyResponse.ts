import { ErrorInfo } from './ErrorInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class InvokeEndpointProxyResponse extends SdkResponse {
    public error?: ErrorInfo;
    public result?: object;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: ErrorInfo): InvokeEndpointProxyResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: object): InvokeEndpointProxyResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): InvokeEndpointProxyResponse {
        this['status'] = status;
        return this;
    }
}