import { AtlasImageItem } from './AtlasImageItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImagesResponse extends SdkResponse {
    public total?: number;
    public items?: Array<AtlasImageItem>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListImagesResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<AtlasImageItem>): ListImagesResponse {
        this['items'] = items;
        return this;
    }
}