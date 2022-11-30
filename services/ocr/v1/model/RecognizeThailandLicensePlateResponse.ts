import { ThailandLicensePlateItem } from './ThailandLicensePlateItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeThailandLicensePlateResponse extends SdkResponse {
    public result?: ThailandLicensePlateItem;
    public constructor() { 
        super();
    }
    public withResult(result: ThailandLicensePlateItem): RecognizeThailandLicensePlateResponse {
        this['result'] = result;
        return this;
    }
}