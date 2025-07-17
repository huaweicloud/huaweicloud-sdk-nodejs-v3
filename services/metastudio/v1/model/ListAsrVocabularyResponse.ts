import { AsrVocabularyInfo } from './AsrVocabularyInfo';
import { Pages } from './Pages';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAsrVocabularyResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<AsrVocabularyInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): ListAsrVocabularyResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAsrVocabularyResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): ListAsrVocabularyResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<AsrVocabularyInfo>): ListAsrVocabularyResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ListAsrVocabularyResponse {
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