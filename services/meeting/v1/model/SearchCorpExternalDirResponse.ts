import { ExternalContactDTO } from './ExternalContactDTO';
import { Pages } from './Pages';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchCorpExternalDirResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<ExternalContactDTO>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): SearchCorpExternalDirResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchCorpExternalDirResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): SearchCorpExternalDirResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<ExternalContactDTO>): SearchCorpExternalDirResponse {
        this['data'] = data;
        return this;
    }
}