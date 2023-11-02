import { ApiTestRequestHeader } from './ApiTestRequestHeader';
import { ApiTestResponseHeader } from './ApiTestResponseHeader';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DebugApiResponse extends SdkResponse {
    private 'request_id'?: string;
    public url?: string;
    public result?: string;
    public timeout?: number;
    public success?: boolean;
    private 'request_header'?: ApiTestRequestHeader;
    private 'response_header'?: ApiTestResponseHeader;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): DebugApiResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withUrl(url: string): DebugApiResponse {
        this['url'] = url;
        return this;
    }
    public withResult(result: string): DebugApiResponse {
        this['result'] = result;
        return this;
    }
    public withTimeout(timeout: number): DebugApiResponse {
        this['timeout'] = timeout;
        return this;
    }
    public withSuccess(success: boolean): DebugApiResponse {
        this['success'] = success;
        return this;
    }
    public withRequestHeader(requestHeader: ApiTestRequestHeader): DebugApiResponse {
        this['request_header'] = requestHeader;
        return this;
    }
    public set requestHeader(requestHeader: ApiTestRequestHeader  | undefined) {
        this['request_header'] = requestHeader;
    }
    public get requestHeader(): ApiTestRequestHeader | undefined {
        return this['request_header'];
    }
    public withResponseHeader(responseHeader: ApiTestResponseHeader): DebugApiResponse {
        this['response_header'] = responseHeader;
        return this;
    }
    public set responseHeader(responseHeader: ApiTestResponseHeader  | undefined) {
        this['response_header'] = responseHeader;
    }
    public get responseHeader(): ApiTestResponseHeader | undefined {
        return this['response_header'];
    }
}