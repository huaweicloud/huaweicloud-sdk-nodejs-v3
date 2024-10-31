import { DeleteServiceItemResponseBodyData } from './DeleteServiceItemResponseBodyData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteServiceItemResponse extends SdkResponse {
    public data?: DeleteServiceItemResponseBodyData;
    public constructor() { 
        super();
    }
    public withData(data: DeleteServiceItemResponseBodyData): DeleteServiceItemResponse {
        this['data'] = data;
        return this;
    }
}