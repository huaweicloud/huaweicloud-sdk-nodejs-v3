import { ListConnectionNumberData } from './ListConnectionNumberData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDDoSConnectionNumberResponse extends SdkResponse {
    public data?: Array<ListConnectionNumberData>;
    public constructor() { 
        super();
    }
    public withData(data: Array<ListConnectionNumberData>): ListDDoSConnectionNumberResponse {
        this['data'] = data;
        return this;
    }
}