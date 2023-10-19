import { InstanceReplicationListInfo } from './InstanceReplicationListInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowReplicationStatesResponse extends SdkResponse {
    public body?: Array<InstanceReplicationListInfo>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<InstanceReplicationListInfo>): ShowReplicationStatesResponse {
        this['body'] = body;
        return this;
    }
}