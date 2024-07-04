import { BindingsDetails } from './BindingsDetails';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBindingsResponse extends SdkResponse {
    public size?: number;
    public total?: number;
    public items?: Array<BindingsDetails>;
    public constructor() { 
        super();
    }
    public withSize(size: number): ListBindingsResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListBindingsResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<BindingsDetails>): ListBindingsResponse {
        this['items'] = items;
        return this;
    }
}