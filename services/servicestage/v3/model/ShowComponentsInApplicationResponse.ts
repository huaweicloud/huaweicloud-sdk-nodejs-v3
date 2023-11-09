import { ComponentList } from './ComponentList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowComponentsInApplicationResponse extends SdkResponse {
    public count?: number;
    public components?: Array<ComponentList>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ShowComponentsInApplicationResponse {
        this['count'] = count;
        return this;
    }
    public withComponents(components: Array<ComponentList>): ShowComponentsInApplicationResponse {
        this['components'] = components;
        return this;
    }
}