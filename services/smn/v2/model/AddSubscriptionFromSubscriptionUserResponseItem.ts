

export class AddSubscriptionFromSubscriptionUserResponseItem {
    private 'http_code'?: number;
    private 'request_id'?: string;
    private 'subscription_urn'?: string;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public constructor(httpCode?: number, requestId?: string) { 
        this['http_code'] = httpCode;
        this['request_id'] = requestId;
    }
    public withHttpCode(httpCode: number): AddSubscriptionFromSubscriptionUserResponseItem {
        this['http_code'] = httpCode;
        return this;
    }
    public set httpCode(httpCode: number  | undefined) {
        this['http_code'] = httpCode;
    }
    public get httpCode(): number | undefined {
        return this['http_code'];
    }
    public withRequestId(requestId: string): AddSubscriptionFromSubscriptionUserResponseItem {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withSubscriptionUrn(subscriptionUrn: string): AddSubscriptionFromSubscriptionUserResponseItem {
        this['subscription_urn'] = subscriptionUrn;
        return this;
    }
    public set subscriptionUrn(subscriptionUrn: string  | undefined) {
        this['subscription_urn'] = subscriptionUrn;
    }
    public get subscriptionUrn(): string | undefined {
        return this['subscription_urn'];
    }
    public withErrorCode(errorCode: string): AddSubscriptionFromSubscriptionUserResponseItem {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): AddSubscriptionFromSubscriptionUserResponseItem {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
}