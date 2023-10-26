
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchAddDataMaskResponse extends SdkResponse {
    private 'masked_data'?: Array<{ [key: string]: object; }>;
    public constructor() { 
        super();
    }
    public withMaskedData(maskedData: Array<{ [key: string]: object; }>): BatchAddDataMaskResponse {
        this['masked_data'] = maskedData;
        return this;
    }
    public set maskedData(maskedData: Array<{ [key: string]: object; }>  | undefined) {
        this['masked_data'] = maskedData;
    }
    public get maskedData(): Array<{ [key: string]: object; }> | undefined {
        return this['masked_data'];
    }
}