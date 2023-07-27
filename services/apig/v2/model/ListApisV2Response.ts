import { ApiInfoPerPage } from './ApiInfoPerPage';
import { BasePage } from './BasePage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApisV2Response extends SdkResponse {
    public size?: number;
    public total?: number;
    public apis?: Array<ApiInfoPerPage>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListApisV2Response {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListApisV2Response {
        this['total'] = total;
        return this;
    }
    public withApis(apis: Array<ApiInfoPerPage>): ListApisV2Response {
        this['apis'] = apis;
        return this;
    }
}