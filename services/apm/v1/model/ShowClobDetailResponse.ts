
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClobDetailResponse extends SdkResponse {
    private 'clob_string'?: string;
    public constructor() { 
        super();
    }
    public withClobString(clobString: string): ShowClobDetailResponse {
        this['clob_string'] = clobString;
        return this;
    }
    public set clobString(clobString: string  | undefined) {
        this['clob_string'] = clobString;
    }
    public get clobString(): string | undefined {
        return this['clob_string'];
    }
}