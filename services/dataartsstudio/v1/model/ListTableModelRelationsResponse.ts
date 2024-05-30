import { ListTableModelRelationsResultData } from './ListTableModelRelationsResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTableModelRelationsResponse extends SdkResponse {
    public data?: ListTableModelRelationsResultData;
    public constructor() { 
        super();
    }
    public withData(data: ListTableModelRelationsResultData): ListTableModelRelationsResponse {
        this['data'] = data;
        return this;
    }
}