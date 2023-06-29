import { Pages } from './Pages';
import { PublicationResponseBase } from './PublicationResponseBase';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchPublicationsResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<PublicationResponseBase>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): SearchPublicationsResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchPublicationsResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): SearchPublicationsResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<PublicationResponseBase>): SearchPublicationsResponse {
        this['data'] = data;
        return this;
    }
}