import { VehicleCertificateResult } from './VehicleCertificateResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeVehicleCertificateResponse extends SdkResponse {
    public result?: VehicleCertificateResult;
    public constructor() { 
        super();
    }
    public withResult(result: VehicleCertificateResult): RecognizeVehicleCertificateResponse {
        this['result'] = result;
        return this;
    }
}