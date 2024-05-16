import { HouseholdRegisterResult } from './HouseholdRegisterResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeHouseholdRegisterResponse extends SdkResponse {
    public result?: Array<HouseholdRegisterResult>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withResult(result: Array<HouseholdRegisterResult>): RecognizeHouseholdRegisterResponse {
        this['result'] = result;
        return this;
    }
    public withXRequestId(xRequestId: string): RecognizeHouseholdRegisterResponse {
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