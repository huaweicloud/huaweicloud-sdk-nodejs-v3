
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateApplicationResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    private 'application_urn'?: string | undefined;
    private 'application_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): CreateApplicationResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withApplicationUrn(applicationUrn: string): CreateApplicationResponse {
        this['application_urn'] = applicationUrn;
        return this;
    }
    public set applicationUrn(applicationUrn: string | undefined) {
        this['application_urn'] = applicationUrn;
    }
    public get applicationUrn() {
        return this['application_urn'];
    }
    public withApplicationId(applicationId: string): CreateApplicationResponse {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId() {
        return this['application_id'];
    }
}