import { ApiOutline } from './ApiOutline';
import { BasePage } from './BasePage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApisUnbindedToAppV2Response extends SdkResponse {
    public size?: number;
    public total?: number;
    public apis?: Array<ApiOutline>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListApisUnbindedToAppV2Response {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListApisUnbindedToAppV2Response {
        this['total'] = total;
        return this;
    }
    public withApis(apis: Array<ApiOutline>): ListApisUnbindedToAppV2Response {
        this['apis'] = apis;
        return this;
    }
}