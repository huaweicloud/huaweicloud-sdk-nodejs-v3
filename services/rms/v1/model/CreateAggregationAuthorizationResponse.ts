
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAggregationAuthorizationResponse extends SdkResponse {
    private 'aggregation_authorization_urn'?: string;
    private 'authorized_account_id'?: string;
    private 'created_at'?: string;
    public constructor() { 
        super();
    }
    public withAggregationAuthorizationUrn(aggregationAuthorizationUrn: string): CreateAggregationAuthorizationResponse {
        this['aggregation_authorization_urn'] = aggregationAuthorizationUrn;
        return this;
    }
    public set aggregationAuthorizationUrn(aggregationAuthorizationUrn: string  | undefined) {
        this['aggregation_authorization_urn'] = aggregationAuthorizationUrn;
    }
    public get aggregationAuthorizationUrn(): string | undefined {
        return this['aggregation_authorization_urn'];
    }
    public withAuthorizedAccountId(authorizedAccountId: string): CreateAggregationAuthorizationResponse {
        this['authorized_account_id'] = authorizedAccountId;
        return this;
    }
    public set authorizedAccountId(authorizedAccountId: string  | undefined) {
        this['authorized_account_id'] = authorizedAccountId;
    }
    public get authorizedAccountId(): string | undefined {
        return this['authorized_account_id'];
    }
    public withCreatedAt(createdAt: string): CreateAggregationAuthorizationResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
}