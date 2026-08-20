import { EndpointList } from './EndpointList';
import { ErrorInfo } from './ErrorInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEndpointsDetailsResponse extends SdkResponse {
    public error?: ErrorInfo;
    public result?: EndpointList;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: ErrorInfo): ListEndpointsDetailsResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: EndpointList): ListEndpointsDetailsResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListEndpointsDetailsResponse {
        this['status'] = status;
        return this;
    }
}