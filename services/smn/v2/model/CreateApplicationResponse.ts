
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateApplicationResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'application_urn'?: string;
    private 'application_id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): CreateApplicationResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withApplicationUrn(applicationUrn: string): CreateApplicationResponse {
        this['application_urn'] = applicationUrn;
        return this;
    }
    public set applicationUrn(applicationUrn: string  | undefined) {
        this['application_urn'] = applicationUrn;
    }
    public get applicationUrn(): string | undefined {
        return this['application_urn'];
    }
    public withApplicationId(applicationId: string): CreateApplicationResponse {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
}