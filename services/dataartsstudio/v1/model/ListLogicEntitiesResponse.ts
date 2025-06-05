import { Entity } from './Entity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLogicEntitiesResponse extends SdkResponse {
    public body?: Array<Entity>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<Entity>): ListLogicEntitiesResponse {
        this['body'] = body;
        return this;
    }
}