import { DeleteTerminalsBindingDesktopsResult } from './DeleteTerminalsBindingDesktopsResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteTerminalsBindingDesktopsResponse extends SdkResponse {
    private 'result_list'?: Array<DeleteTerminalsBindingDesktopsResult>;
    public constructor() { 
        super();
    }
    public withResultList(resultList: Array<DeleteTerminalsBindingDesktopsResult>): DeleteTerminalsBindingDesktopsResponse {
        this['result_list'] = resultList;
        return this;
    }
    public set resultList(resultList: Array<DeleteTerminalsBindingDesktopsResult>  | undefined) {
        this['result_list'] = resultList;
    }
    public get resultList(): Array<DeleteTerminalsBindingDesktopsResult> | undefined {
        return this['result_list'];
    }
}