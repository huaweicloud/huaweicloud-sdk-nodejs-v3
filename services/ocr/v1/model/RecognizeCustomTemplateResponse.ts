
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeCustomTemplateResponse extends SdkResponse {
    public result?: object;
    private 'template_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withResult(result: object): RecognizeCustomTemplateResponse {
        this['result'] = result;
        return this;
    }
    public withTemplateId(templateId: string): RecognizeCustomTemplateResponse {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId() {
        return this['template_id'];
    }
}