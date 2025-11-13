import { AntileakageMapResponseBodyLeakagemap } from './AntileakageMapResponseBodyLeakagemap';
import { AntileakageMapResponseBodyLocale } from './AntileakageMapResponseBodyLocale';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ConfirmPolicyAntileakageMapResponse extends SdkResponse {
    public leakagemap?: AntileakageMapResponseBodyLeakagemap;
    public locale?: AntileakageMapResponseBodyLocale;
    public constructor() { 
        super();
    }
    public withLeakagemap(leakagemap: AntileakageMapResponseBodyLeakagemap): ConfirmPolicyAntileakageMapResponse {
        this['leakagemap'] = leakagemap;
        return this;
    }
    public withLocale(locale: AntileakageMapResponseBodyLocale): ConfirmPolicyAntileakageMapResponse {
        this['locale'] = locale;
        return this;
    }
}