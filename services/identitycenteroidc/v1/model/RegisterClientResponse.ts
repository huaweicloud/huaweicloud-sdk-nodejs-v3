import { ClientInfoDto } from './ClientInfoDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RegisterClientResponse extends SdkResponse {
    private 'client_info'?: ClientInfoDto;
    public constructor() { 
        super();
    }
    public withClientInfo(clientInfo: ClientInfoDto): RegisterClientResponse {
        this['client_info'] = clientInfo;
        return this;
    }
    public set clientInfo(clientInfo: ClientInfoDto  | undefined) {
        this['client_info'] = clientInfo;
    }
    public get clientInfo(): ClientInfoDto | undefined {
        return this['client_info'];
    }
}