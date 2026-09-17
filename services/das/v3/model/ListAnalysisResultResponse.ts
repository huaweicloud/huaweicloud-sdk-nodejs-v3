
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAnalysisResultResponse extends SdkResponse {
    public success?: boolean;
    public risk?: boolean;
    public data?: object;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): ListAnalysisResultResponse {
        this['success'] = success;
        return this;
    }
    public withRisk(risk: boolean): ListAnalysisResultResponse {
        this['risk'] = risk;
        return this;
    }
    public withData(data: object): ListAnalysisResultResponse {
        this['data'] = data;
        return this;
    }
}