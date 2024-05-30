import { BridgeResponse } from './BridgeResponse';
import { Page } from './Page';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBridgesResponse extends SdkResponse {
    public bridges?: Array<BridgeResponse>;
    public page?: Page;
    public constructor() { 
        super();
    }
    public withBridges(bridges: Array<BridgeResponse>): ListBridgesResponse {
        this['bridges'] = bridges;
        return this;
    }
    public withPage(page: Page): ListBridgesResponse {
        this['page'] = page;
        return this;
    }
}