import { VehicleLicenseResult } from './VehicleLicenseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeVehicleLicenseResponse extends SdkResponse {
    public result?: VehicleLicenseResult;
    public constructor() { 
        super();
    }
    public withResult(result: VehicleLicenseResult): RecognizeVehicleLicenseResponse {
        this['result'] = result;
        return this;
    }
}