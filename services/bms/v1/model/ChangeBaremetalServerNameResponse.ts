import { ChangeBaremetalNameResponsesServers } from './ChangeBaremetalNameResponsesServers';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeBaremetalServerNameResponse extends SdkResponse {
    public server?: ChangeBaremetalNameResponsesServers;
    public constructor() { 
        super();
    }
    public withServer(server: ChangeBaremetalNameResponsesServers): ChangeBaremetalServerNameResponse {
        this['server'] = server;
        return this;
    }
}