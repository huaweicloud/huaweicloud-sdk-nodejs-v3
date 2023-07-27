import { ApiAclInfoWithBindNum } from './ApiAclInfoWithBindNum';
import { BasePage } from './BasePage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAclStrategiesV2Response extends SdkResponse {
    public size?: number;
    public total?: number;
    public acls?: Array<ApiAclInfoWithBindNum>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListAclStrategiesV2Response {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListAclStrategiesV2Response {
        this['total'] = total;
        return this;
    }
    public withAcls(acls: Array<ApiAclInfoWithBindNum>): ListAclStrategiesV2Response {
        this['acls'] = acls;
        return this;
    }
}