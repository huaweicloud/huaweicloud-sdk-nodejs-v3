import { Catalog } from './Catalog';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppCatalogsResponse extends SdkResponse {
    public items?: Array<Catalog>;
    public constructor() { 
        super();
    }
    public withItems(items: Array<Catalog>): ListAppCatalogsResponse {
        this['items'] = items;
        return this;
    }
}