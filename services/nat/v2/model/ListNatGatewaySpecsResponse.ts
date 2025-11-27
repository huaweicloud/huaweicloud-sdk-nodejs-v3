
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNatGatewaySpecsResponse extends SdkResponse {
    public specs?: Array<ListNatGatewaySpecsResponseSpecsEnum> | Array<string>;
    public constructor() { 
        super();
    }
    public withSpecs(specs: Array<ListNatGatewaySpecsResponseSpecsEnum> | Array<string>): ListNatGatewaySpecsResponse {
        this['specs'] = specs;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListNatGatewaySpecsResponseSpecsEnum {
    E_1 = '1',
    E_2 = '2',
    E_3 = '3',
    E_4 = '4',
    E_5 = '5'
}
