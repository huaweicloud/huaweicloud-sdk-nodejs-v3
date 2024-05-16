import { Pages } from './Pages';
import { WelcomeSpeechInfo } from './WelcomeSpeechInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWelcomeSpeechResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<WelcomeSpeechInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): ListWelcomeSpeechResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListWelcomeSpeechResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): ListWelcomeSpeechResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<WelcomeSpeechInfo>): ListWelcomeSpeechResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ListWelcomeSpeechResponse {
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