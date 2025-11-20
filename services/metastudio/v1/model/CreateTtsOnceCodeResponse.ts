
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTtsOnceCodeResponse extends SdkResponse {
    private 'once_code'?: string;
    public constructor() { 
        super();
    }
    public withOnceCode(onceCode: string): CreateTtsOnceCodeResponse {
        this['once_code'] = onceCode;
        return this;
    }
    public set onceCode(onceCode: string  | undefined) {
        this['once_code'] = onceCode;
    }
    public get onceCode(): string | undefined {
        return this['once_code'];
    }
}