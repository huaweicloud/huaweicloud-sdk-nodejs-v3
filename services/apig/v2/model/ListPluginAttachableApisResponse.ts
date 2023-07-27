import { BasePage } from './BasePage';
import { PluginApiInfo } from './PluginApiInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPluginAttachableApisResponse extends SdkResponse {
    public size?: number;
    public total?: number;
    public apis?: Array<PluginApiInfo>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListPluginAttachableApisResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListPluginAttachableApisResponse {
        this['total'] = total;
        return this;
    }
    public withApis(apis: Array<PluginApiInfo>): ListPluginAttachableApisResponse {
        this['apis'] = apis;
        return this;
    }
}