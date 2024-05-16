import { FlightItineraryResult } from './FlightItineraryResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeFlightItineraryResponse extends SdkResponse {
    public result?: FlightItineraryResult;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withResult(result: FlightItineraryResult): RecognizeFlightItineraryResponse {
        this['result'] = result;
        return this;
    }
    public withXRequestId(xRequestId: string): RecognizeFlightItineraryResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}