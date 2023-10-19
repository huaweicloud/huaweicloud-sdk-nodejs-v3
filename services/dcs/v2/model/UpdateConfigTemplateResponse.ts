
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateConfigTemplateResponse extends SdkResponse {
    public result?: UpdateConfigTemplateResponseResultEnum | string;
    public constructor() { 
        super();
    }
    public withResult(result: UpdateConfigTemplateResponseResultEnum | string): UpdateConfigTemplateResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateConfigTemplateResponseResultEnum {
    SUCCESS = 'success'
}
