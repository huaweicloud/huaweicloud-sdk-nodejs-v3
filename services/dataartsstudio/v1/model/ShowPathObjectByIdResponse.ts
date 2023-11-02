import { LayerPath } from './LayerPath';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPathObjectByIdResponse extends SdkResponse {
    public paths?: Array<LayerPath>;
    public constructor() { 
        super();
    }
    public withPaths(paths: Array<LayerPath>): ShowPathObjectByIdResponse {
        this['paths'] = paths;
        return this;
    }
}