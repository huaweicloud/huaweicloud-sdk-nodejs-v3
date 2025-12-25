import { DpeCompareFunctionDetail } from './DpeCompareFunctionDetail';
import { DpeOperateFunctionDetail } from './DpeOperateFunctionDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMappingFunctionResponse extends SdkResponse {
    private 'compare_list'?: Array<DpeCompareFunctionDetail>;
    private 'operation_list'?: Array<DpeOperateFunctionDetail>;
    public constructor() { 
        super();
    }
    public withCompareList(compareList: Array<DpeCompareFunctionDetail>): ShowMappingFunctionResponse {
        this['compare_list'] = compareList;
        return this;
    }
    public set compareList(compareList: Array<DpeCompareFunctionDetail>  | undefined) {
        this['compare_list'] = compareList;
    }
    public get compareList(): Array<DpeCompareFunctionDetail> | undefined {
        return this['compare_list'];
    }
    public withOperationList(operationList: Array<DpeOperateFunctionDetail>): ShowMappingFunctionResponse {
        this['operation_list'] = operationList;
        return this;
    }
    public set operationList(operationList: Array<DpeOperateFunctionDetail>  | undefined) {
        this['operation_list'] = operationList;
    }
    public get operationList(): Array<DpeOperateFunctionDetail> | undefined {
        return this['operation_list'];
    }
}