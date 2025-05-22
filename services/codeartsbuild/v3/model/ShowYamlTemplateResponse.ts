
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowYamlTemplateResponse extends SdkResponse {
    public status?: string;
    public error?: object;
    public result?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowYamlTemplateResponse {
        this['status'] = status;
        return this;
    }
    public withError(error: object): ShowYamlTemplateResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: string): ShowYamlTemplateResponse {
        this['result'] = result;
        return this;
    }
}