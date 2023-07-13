import { AppAutoRecordMode } from './AppAutoRecordMode';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAutoRecordResponse extends SdkResponse {
    private 'app_id'?: string | undefined;
    private 'auto_record_mode'?: AppAutoRecordMode | undefined;
    private 'X-request-Id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withAppId(appId: string): UpdateAutoRecordResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withAutoRecordMode(autoRecordMode: AppAutoRecordMode): UpdateAutoRecordResponse {
        this['auto_record_mode'] = autoRecordMode;
        return this;
    }
    public set autoRecordMode(autoRecordMode: AppAutoRecordMode | undefined) {
        this['auto_record_mode'] = autoRecordMode;
    }
    public get autoRecordMode() {
        return this['auto_record_mode'];
    }
    public withXRequestId(xRequestId: string): UpdateAutoRecordResponse {
        this['X-request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-request-Id'];
    }
}