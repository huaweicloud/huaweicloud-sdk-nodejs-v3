import { RateLimitResponse } from './RateLimitResponse';


export class ServiceLimitResponse {
    private 'rate_limit'?: RateLimitResponse;
    private 'request_size_limit'?: number;
    private 'request_timeout'?: number;
    private 'ip_white_list'?: Array<string>;
    private 'ip_black_list'?: Array<string>;
    public constructor(rateLimit?: RateLimitResponse, requestSizeLimit?: number, requestTimeout?: number) { 
        this['rate_limit'] = rateLimit;
        this['request_size_limit'] = requestSizeLimit;
        this['request_timeout'] = requestTimeout;
    }
    public withRateLimit(rateLimit: RateLimitResponse): ServiceLimitResponse {
        this['rate_limit'] = rateLimit;
        return this;
    }
    public set rateLimit(rateLimit: RateLimitResponse  | undefined) {
        this['rate_limit'] = rateLimit;
    }
    public get rateLimit(): RateLimitResponse | undefined {
        return this['rate_limit'];
    }
    public withRequestSizeLimit(requestSizeLimit: number): ServiceLimitResponse {
        this['request_size_limit'] = requestSizeLimit;
        return this;
    }
    public set requestSizeLimit(requestSizeLimit: number  | undefined) {
        this['request_size_limit'] = requestSizeLimit;
    }
    public get requestSizeLimit(): number | undefined {
        return this['request_size_limit'];
    }
    public withRequestTimeout(requestTimeout: number): ServiceLimitResponse {
        this['request_timeout'] = requestTimeout;
        return this;
    }
    public set requestTimeout(requestTimeout: number  | undefined) {
        this['request_timeout'] = requestTimeout;
    }
    public get requestTimeout(): number | undefined {
        return this['request_timeout'];
    }
    public withIpWhiteList(ipWhiteList: Array<string>): ServiceLimitResponse {
        this['ip_white_list'] = ipWhiteList;
        return this;
    }
    public set ipWhiteList(ipWhiteList: Array<string>  | undefined) {
        this['ip_white_list'] = ipWhiteList;
    }
    public get ipWhiteList(): Array<string> | undefined {
        return this['ip_white_list'];
    }
    public withIpBlackList(ipBlackList: Array<string>): ServiceLimitResponse {
        this['ip_black_list'] = ipBlackList;
        return this;
    }
    public set ipBlackList(ipBlackList: Array<string>  | undefined) {
        this['ip_black_list'] = ipBlackList;
    }
    public get ipBlackList(): Array<string> | undefined {
        return this['ip_black_list'];
    }
}