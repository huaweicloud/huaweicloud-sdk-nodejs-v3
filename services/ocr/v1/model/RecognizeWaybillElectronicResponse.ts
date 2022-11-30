import { WaybillElectronicResult } from './WaybillElectronicResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeWaybillElectronicResponse extends SdkResponse {
    public result?: WaybillElectronicResult;
    public constructor() { 
        super();
    }
    public withResult(result: WaybillElectronicResult): RecognizeWaybillElectronicResponse {
        this['result'] = result;
        return this;
    }
}