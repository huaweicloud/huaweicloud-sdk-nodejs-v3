import { BasePage } from './BasePage';
import { PluginApiInfo } from './PluginApiInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPluginAttachedApisResponse extends SdkResponse {
    public size?: number;
    public total?: number;
    public apis?: Array<PluginApiInfo>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListPluginAttachedApisResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListPluginAttachedApisResponse {
        this['total'] = total;
        return this;
    }
    public withApis(apis: Array<PluginApiInfo>): ListPluginAttachedApisResponse {
        this['apis'] = apis;
        return this;
    }
}