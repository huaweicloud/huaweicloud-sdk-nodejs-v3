import { ThreatMapResponseBodyLocale } from './ThreatMapResponseBodyLocale';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ConfirmThreatMapResponse extends SdkResponse {
    public threats?: Array<string>;
    public locale?: ThreatMapResponseBodyLocale;
    public constructor() { 
        super();
    }
    public withThreats(threats: Array<string>): ConfirmThreatMapResponse {
        this['threats'] = threats;
        return this;
    }
    public withLocale(locale: ThreatMapResponseBodyLocale): ConfirmThreatMapResponse {
        this['locale'] = locale;
        return this;
    }
}