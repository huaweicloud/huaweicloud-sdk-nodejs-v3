import { ComponentView } from './ComponentView';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListComponentsResponse extends SdkResponse {
    public count?: number;
    public components?: Array<ComponentView>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListComponentsResponse {
        this['count'] = count;
        return this;
    }
    public withComponents(components: Array<ComponentView>): ListComponentsResponse {
        this['components'] = components;
        return this;
    }
}