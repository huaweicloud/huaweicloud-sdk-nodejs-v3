
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAnalyzerResponse extends SdkResponse {
    public id?: string;
    public urn?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateAnalyzerResponse {
        this['id'] = id;
        return this;
    }
    public withUrn(urn: string): CreateAnalyzerResponse {
        this['urn'] = urn;
        return this;
    }
}