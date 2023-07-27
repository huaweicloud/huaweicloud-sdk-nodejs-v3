import { ApiForSign } from './ApiForSign';
import { BasePage } from './BasePage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApisNotBoundWithSignatureKeyV2Response extends SdkResponse {
    public size?: number;
    public total?: number;
    public apis?: Array<ApiForSign>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListApisNotBoundWithSignatureKeyV2Response {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListApisNotBoundWithSignatureKeyV2Response {
        this['total'] = total;
        return this;
    }
    public withApis(apis: Array<ApiForSign>): ListApisNotBoundWithSignatureKeyV2Response {
        this['apis'] = apis;
        return this;
    }
}