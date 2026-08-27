
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SaveImChannelsResponse extends SdkResponse {
    private 'config_ids'?: Array<string>;
    public constructor() { 
        super();
    }
    public withConfigIds(configIds: Array<string>): SaveImChannelsResponse {
        this['config_ids'] = configIds;
        return this;
    }
    public set configIds(configIds: Array<string>  | undefined) {
        this['config_ids'] = configIds;
    }
    public get configIds(): Array<string> | undefined {
        return this['config_ids'];
    }
}