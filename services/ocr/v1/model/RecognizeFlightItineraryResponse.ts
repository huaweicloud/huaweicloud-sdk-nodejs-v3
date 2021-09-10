import { FlightItineraryResult } from './FlightItineraryResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeFlightItineraryResponse extends SdkResponse {
    public result?: FlightItineraryResult;
    public constructor() { 
        super();
    }
    public withResult(result: FlightItineraryResult): RecognizeFlightItineraryResponse {
        this['result'] = result;
        return this;
    }
}