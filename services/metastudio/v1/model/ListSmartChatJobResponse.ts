import { SmartChatJobBaseInfo } from './SmartChatJobBaseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSmartChatJobResponse extends SdkResponse {
    public count?: number;
    private 'smart_chat_jobs'?: Array<SmartChatJobBaseInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListSmartChatJobResponse {
        this['count'] = count;
        return this;
    }
    public withSmartChatJobs(smartChatJobs: Array<SmartChatJobBaseInfo>): ListSmartChatJobResponse {
        this['smart_chat_jobs'] = smartChatJobs;
        return this;
    }
    public set smartChatJobs(smartChatJobs: Array<SmartChatJobBaseInfo>  | undefined) {
        this['smart_chat_jobs'] = smartChatJobs;
    }
    public get smartChatJobs(): Array<SmartChatJobBaseInfo> | undefined {
        return this['smart_chat_jobs'];
    }
    public withXRequestId(xRequestId: string): ListSmartChatJobResponse {
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