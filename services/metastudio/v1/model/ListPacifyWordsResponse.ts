import { PacifyWordsInfo } from './PacifyWordsInfo';
import { Pages } from './Pages';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPacifyWordsResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<PacifyWordsInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): ListPacifyWordsResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPacifyWordsResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): ListPacifyWordsResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<PacifyWordsInfo>): ListPacifyWordsResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ListPacifyWordsResponse {
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