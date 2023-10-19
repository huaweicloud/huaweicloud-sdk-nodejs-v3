import { IpsSwitchResponseDTO } from './IpsSwitchResponseDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIpsSwitchStatusResponse extends SdkResponse {
    public data?: IpsSwitchResponseDTO;
    public constructor() { 
        super();
    }
    public withData(data: IpsSwitchResponseDTO): ListIpsSwitchStatusResponse {
        this['data'] = data;
        return this;
    }
}