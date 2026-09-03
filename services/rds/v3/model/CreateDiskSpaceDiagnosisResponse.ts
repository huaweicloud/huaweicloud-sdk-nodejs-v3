
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDiskSpaceDiagnosisResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): CreateDiskSpaceDiagnosisResponse {
        this['result'] = result;
        return this;
    }
}