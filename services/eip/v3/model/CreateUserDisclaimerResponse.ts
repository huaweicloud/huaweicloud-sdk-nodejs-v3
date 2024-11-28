import { CreateUserDisclaimerRecord } from './CreateUserDisclaimerRecord';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateUserDisclaimerResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'user_disclaimer_record'?: CreateUserDisclaimerRecord;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): CreateUserDisclaimerResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withUserDisclaimerRecord(userDisclaimerRecord: CreateUserDisclaimerRecord): CreateUserDisclaimerResponse {
        this['user_disclaimer_record'] = userDisclaimerRecord;
        return this;
    }
    public set userDisclaimerRecord(userDisclaimerRecord: CreateUserDisclaimerRecord  | undefined) {
        this['user_disclaimer_record'] = userDisclaimerRecord;
    }
    public get userDisclaimerRecord(): CreateUserDisclaimerRecord | undefined {
        return this['user_disclaimer_record'];
    }
    public withXRequestId(xRequestId: string): CreateUserDisclaimerResponse {
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