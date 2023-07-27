import { BasePage } from './BasePage';
import { Config } from './Config';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectCofigsV2Response extends SdkResponse {
    public size?: number;
    public total?: number;
    public configs?: Array<Config>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListProjectCofigsV2Response {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListProjectCofigsV2Response {
        this['total'] = total;
        return this;
    }
    public withConfigs(configs: Array<Config>): ListProjectCofigsV2Response {
        this['configs'] = configs;
        return this;
    }
}