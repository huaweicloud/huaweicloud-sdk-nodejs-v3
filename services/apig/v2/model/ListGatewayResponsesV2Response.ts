import { BasePage } from './BasePage';
import { ResponsesInfo } from './ResponsesInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGatewayResponsesV2Response extends SdkResponse {
    public size?: number;
    public total?: number;
    public responses?: Array<ResponsesInfo>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListGatewayResponsesV2Response {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListGatewayResponsesV2Response {
        this['total'] = total;
        return this;
    }
    public withResponses(responses: Array<ResponsesInfo>): ListGatewayResponsesV2Response {
        this['responses'] = responses;
        return this;
    }
}