
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeCustomTemplateResponse extends SdkResponse {
    public result?: object;
    private 'template_id'?: string;
    private 'X-Request-Id'?: string;
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
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withXRequestId(xRequestId: string): RecognizeCustomTemplateResponse {
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