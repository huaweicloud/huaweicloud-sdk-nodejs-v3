import { FunctionDTO } from './FunctionDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFunctionsResponse extends SdkResponse {
    private 'product_functions'?: Array<FunctionDTO>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withProductFunctions(productFunctions: Array<FunctionDTO>): ListFunctionsResponse {
        this['product_functions'] = productFunctions;
        return this;
    }
    public set productFunctions(productFunctions: Array<FunctionDTO>  | undefined) {
        this['product_functions'] = productFunctions;
    }
    public get productFunctions(): Array<FunctionDTO> | undefined {
        return this['product_functions'];
    }
    public withCount(count: number): ListFunctionsResponse {
        this['count'] = count;
        return this;
    }
}