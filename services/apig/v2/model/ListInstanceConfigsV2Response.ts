import { BasePage } from './BasePage';
import { InstanceConfig } from './InstanceConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceConfigsV2Response extends SdkResponse {
    public size?: number;
    public total?: number;
    public configs?: Array<InstanceConfig>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListInstanceConfigsV2Response {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListInstanceConfigsV2Response {
        this['total'] = total;
        return this;
    }
    public withConfigs(configs: Array<InstanceConfig>): ListInstanceConfigsV2Response {
        this['configs'] = configs;
        return this;
    }
}