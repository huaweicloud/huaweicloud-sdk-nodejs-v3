import { ConfigListRsp } from './ConfigListRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListYmlsJobResponse extends SdkResponse {
    public configList?: Array<ConfigListRsp>;
    public constructor() { 
        super();
    }
    public withConfigList(configList: Array<ConfigListRsp>): ListYmlsJobResponse {
        this['configList'] = configList;
        return this;
    }
}