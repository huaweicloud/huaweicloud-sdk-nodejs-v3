
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AssociateIssuesResponse extends SdkResponse {
    public error?: Error;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): AssociateIssuesResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): AssociateIssuesResponse {
        this['status'] = status;
        return this;
    }
}