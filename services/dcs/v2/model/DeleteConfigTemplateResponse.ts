
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteConfigTemplateResponse extends SdkResponse {
    public result?: DeleteConfigTemplateResponseResultEnum | string;
    public constructor() { 
        super();
    }
    public withResult(result: DeleteConfigTemplateResponseResultEnum | string): DeleteConfigTemplateResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteConfigTemplateResponseResultEnum {
    SUCCESS = 'success'
}
