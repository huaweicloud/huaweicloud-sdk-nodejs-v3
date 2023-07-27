import { ServerDetails } from './ServerDetails';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBareMetalServerDetailsResponse extends SdkResponse {
    public server?: ServerDetails;
    public constructor() { 
        super();
    }
    public withServer(server: ServerDetails): ListBareMetalServerDetailsResponse {
        this['server'] = server;
        return this;
    }
}