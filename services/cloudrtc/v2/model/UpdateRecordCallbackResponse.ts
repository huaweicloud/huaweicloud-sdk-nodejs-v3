import { AppCallbackUrl } from './AppCallbackUrl';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateRecordCallbackResponse extends SdkResponse {
    private 'app_id'?: string;
    private 'record_callback'?: AppCallbackUrl;
    private 'X-request-Id'?: string;
    public constructor() { 
        super();
    }
    public withAppId(appId: string): UpdateRecordCallbackResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withRecordCallback(recordCallback: AppCallbackUrl): UpdateRecordCallbackResponse {
        this['record_callback'] = recordCallback;
        return this;
    }
    public set recordCallback(recordCallback: AppCallbackUrl  | undefined) {
        this['record_callback'] = recordCallback;
    }
    public get recordCallback(): AppCallbackUrl | undefined {
        return this['record_callback'];
    }
    public withXRequestId(xRequestId: string): UpdateRecordCallbackResponse {
        this['X-request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-Id'];
    }
}