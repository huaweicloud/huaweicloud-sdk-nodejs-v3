import { Rack } from './Rack';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRackResponse extends SdkResponse {
    public rack?: Rack;
    public constructor() { 
        super();
    }
    public withRack(rack: Rack): ShowRackResponse {
        this['rack'] = rack;
        return this;
    }
}