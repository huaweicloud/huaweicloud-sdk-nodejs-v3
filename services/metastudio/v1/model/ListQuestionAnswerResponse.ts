import { Pages } from './Pages';
import { QuestionAnswerInfo } from './QuestionAnswerInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListQuestionAnswerResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<QuestionAnswerInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): ListQuestionAnswerResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListQuestionAnswerResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): ListQuestionAnswerResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<QuestionAnswerInfo>): ListQuestionAnswerResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ListQuestionAnswerResponse {
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