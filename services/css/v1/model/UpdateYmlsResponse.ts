
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateYmlsResponse extends SdkResponse {
    public acknowledged?: boolean;
    public externalMessage?: string;
    public httpErrorResponse?: string;
    public constructor() { 
        super();
    }
    public withAcknowledged(acknowledged: boolean): UpdateYmlsResponse {
        this['acknowledged'] = acknowledged;
        return this;
    }
    public withExternalMessage(externalMessage: string): UpdateYmlsResponse {
        this['externalMessage'] = externalMessage;
        return this;
    }
    public withHttpErrorResponse(httpErrorResponse: string): UpdateYmlsResponse {
        this['httpErrorResponse'] = httpErrorResponse;
        return this;
    }
}