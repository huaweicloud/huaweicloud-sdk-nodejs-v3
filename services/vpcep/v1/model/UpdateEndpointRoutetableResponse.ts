import { RoutetableInfoError } from './RoutetableInfoError';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateEndpointRoutetableResponse extends SdkResponse {
    public routetables?: Array<string>;
    public error?: Array<RoutetableInfoError>;
    public constructor() { 
        super();
    }
    public withRoutetables(routetables: Array<string>): UpdateEndpointRoutetableResponse {
        this['routetables'] = routetables;
        return this;
    }
    public withError(error: Array<RoutetableInfoError>): UpdateEndpointRoutetableResponse {
        this['error'] = error;
        return this;
    }
}