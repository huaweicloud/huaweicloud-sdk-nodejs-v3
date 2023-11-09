import { PlaybookInstanceMonitorDetail } from './PlaybookInstanceMonitorDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPlaybookMonitorsResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: PlaybookInstanceMonitorDetail;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowPlaybookMonitorsResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ShowPlaybookMonitorsResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: PlaybookInstanceMonitorDetail): ShowPlaybookMonitorsResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowPlaybookMonitorsResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}