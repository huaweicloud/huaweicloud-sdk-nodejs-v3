import { ComponentList } from './ComponentList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowComponentsResponse extends SdkResponse {
    public count?: number;
    public components?: Array<ComponentList>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ShowComponentsResponse {
        this['count'] = count;
        return this;
    }
    public withComponents(components: Array<ComponentList>): ShowComponentsResponse {
        this['components'] = components;
        return this;
    }
}