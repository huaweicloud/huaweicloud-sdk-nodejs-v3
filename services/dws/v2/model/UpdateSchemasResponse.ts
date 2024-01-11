
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateSchemasResponse extends SdkResponse {
    private 'ret_code'?: number;
    public constructor() { 
        super();
    }
    public withRetCode(retCode: number): UpdateSchemasResponse {
        this['ret_code'] = retCode;
        return this;
    }
    public set retCode(retCode: number  | undefined) {
        this['ret_code'] = retCode;
    }
    public get retCode(): number | undefined {
        return this['ret_code'];
    }
}