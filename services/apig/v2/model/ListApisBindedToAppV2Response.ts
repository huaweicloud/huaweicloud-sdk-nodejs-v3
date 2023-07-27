import { ApiAuthInfo } from './ApiAuthInfo';
import { BasePage } from './BasePage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApisBindedToAppV2Response extends SdkResponse {
    public size?: number;
    public total?: number;
    public auths?: Array<ApiAuthInfo>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListApisBindedToAppV2Response {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListApisBindedToAppV2Response {
        this['total'] = total;
        return this;
    }
    public withAuths(auths: Array<ApiAuthInfo>): ListApisBindedToAppV2Response {
        this['auths'] = auths;
        return this;
    }
}