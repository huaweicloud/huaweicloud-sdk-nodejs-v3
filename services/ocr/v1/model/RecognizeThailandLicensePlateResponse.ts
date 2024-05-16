import { ThailandLicensePlateItem } from './ThailandLicensePlateItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeThailandLicensePlateResponse extends SdkResponse {
    public result?: Array<ThailandLicensePlateItem>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withResult(result: Array<ThailandLicensePlateItem>): RecognizeThailandLicensePlateResponse {
        this['result'] = result;
        return this;
    }
    public withXRequestId(xRequestId: string): RecognizeThailandLicensePlateResponse {
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