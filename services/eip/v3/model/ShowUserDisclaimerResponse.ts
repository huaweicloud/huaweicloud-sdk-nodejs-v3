import { ShowUserDisclaimerRecord } from './ShowUserDisclaimerRecord';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUserDisclaimerResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'user_disclaimer_record'?: ShowUserDisclaimerRecord;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ShowUserDisclaimerResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withUserDisclaimerRecord(userDisclaimerRecord: ShowUserDisclaimerRecord): ShowUserDisclaimerResponse {
        this['user_disclaimer_record'] = userDisclaimerRecord;
        return this;
    }
    public set userDisclaimerRecord(userDisclaimerRecord: ShowUserDisclaimerRecord  | undefined) {
        this['user_disclaimer_record'] = userDisclaimerRecord;
    }
    public get userDisclaimerRecord(): ShowUserDisclaimerRecord | undefined {
        return this['user_disclaimer_record'];
    }
    public withXRequestId(xRequestId: string): ShowUserDisclaimerResponse {
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