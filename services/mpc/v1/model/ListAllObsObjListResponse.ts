import { ObsObject } from './ObsObject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAllObsObjListResponse extends SdkResponse {
    public objects?: Array<ObsObject>;
    public constructor() { 
        super();
    }
    public withObjects(objects: Array<ObsObject>): ListAllObsObjListResponse {
        this['objects'] = objects;
        return this;
    }
}