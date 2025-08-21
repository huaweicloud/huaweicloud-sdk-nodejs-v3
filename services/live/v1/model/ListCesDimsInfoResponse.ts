import { CesQueryRespQuery } from './CesQueryRespQuery';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCesDimsInfoResponse extends SdkResponse {
    public query?: CesQueryRespQuery;
    public constructor() { 
        super();
    }
    public withQuery(query: CesQueryRespQuery): ListCesDimsInfoResponse {
        this['query'] = query;
        return this;
    }
}