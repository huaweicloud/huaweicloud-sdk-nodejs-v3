
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckTextLanguageResponse extends SdkResponse {
    public result?: CheckTextLanguageResponseResultEnum | string;
    public constructor() { 
        super();
    }
    public withResult(result: CheckTextLanguageResponseResultEnum | string): CheckTextLanguageResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CheckTextLanguageResponseResultEnum {
    MATCHED = 'MATCHED',
    UNMATCHED = 'UNMATCHED'
}
