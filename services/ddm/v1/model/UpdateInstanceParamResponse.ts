
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateInstanceParamResponse extends SdkResponse {
    public nodeList?: string;
    public needRestart?: boolean;
    public jobId?: string;
    public configId?: string;
    public configName?: string;
    public constructor() { 
        super();
    }
    public withNodeList(nodeList: string): UpdateInstanceParamResponse {
        this['nodeList'] = nodeList;
        return this;
    }
    public withNeedRestart(needRestart: boolean): UpdateInstanceParamResponse {
        this['needRestart'] = needRestart;
        return this;
    }
    public withJobId(jobId: string): UpdateInstanceParamResponse {
        this['jobId'] = jobId;
        return this;
    }
    public withConfigId(configId: string): UpdateInstanceParamResponse {
        this['configId'] = configId;
        return this;
    }
    public withConfigName(configName: string): UpdateInstanceParamResponse {
        this['configName'] = configName;
        return this;
    }
}