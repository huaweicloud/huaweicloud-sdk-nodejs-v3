
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunImageWisedesignCombineResponse extends SdkResponse {
    private 'result_base64'?: string | undefined;
    public constructor() { 
        super();
    }
    public withResultBase64(resultBase64: string): RunImageWisedesignCombineResponse {
        this['result_base64'] = resultBase64;
        return this;
    }
    public set resultBase64(resultBase64: string | undefined) {
        this['result_base64'] = resultBase64;
    }
    public get resultBase64() {
        return this['result_base64'];
    }
}