import { ClientInfo } from './ClientInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClientsResponse extends SdkResponse {
    public time?: string;
    public clients?: Array<ClientInfo>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withTime(time: string): ListClientsResponse {
        this['time'] = time;
        return this;
    }
    public withClients(clients: Array<ClientInfo>): ListClientsResponse {
        this['clients'] = clients;
        return this;
    }
    public withCount(count: number): ListClientsResponse {
        this['count'] = count;
        return this;
    }
}