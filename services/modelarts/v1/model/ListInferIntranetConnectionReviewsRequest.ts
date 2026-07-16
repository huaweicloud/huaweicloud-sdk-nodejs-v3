

export class ListInferIntranetConnectionReviewsRequest {
    public scene?: string;
    public id?: string;
    private 'applicant_domain_id'?: string;
    private 'service_id'?: string;
    private 'applicant_user_name'?: string;
    private 'service_name'?: string;
    private 'vpc_name'?: string;
    private 'vpc_id'?: string;
    private 'pool_id'?: string;
    private 'sort_key'?: string;
    public limit?: number;
    public offset?: number;
    public status?: string;
    public type?: string;
    public constructor() { 
    }
    public withScene(scene: string): ListInferIntranetConnectionReviewsRequest {
        this['scene'] = scene;
        return this;
    }
    public withId(id: string): ListInferIntranetConnectionReviewsRequest {
        this['id'] = id;
        return this;
    }
    public withApplicantDomainId(applicantDomainId: string): ListInferIntranetConnectionReviewsRequest {
        this['applicant_domain_id'] = applicantDomainId;
        return this;
    }
    public set applicantDomainId(applicantDomainId: string  | undefined) {
        this['applicant_domain_id'] = applicantDomainId;
    }
    public get applicantDomainId(): string | undefined {
        return this['applicant_domain_id'];
    }
    public withServiceId(serviceId: string): ListInferIntranetConnectionReviewsRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withApplicantUserName(applicantUserName: string): ListInferIntranetConnectionReviewsRequest {
        this['applicant_user_name'] = applicantUserName;
        return this;
    }
    public set applicantUserName(applicantUserName: string  | undefined) {
        this['applicant_user_name'] = applicantUserName;
    }
    public get applicantUserName(): string | undefined {
        return this['applicant_user_name'];
    }
    public withServiceName(serviceName: string): ListInferIntranetConnectionReviewsRequest {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withVpcName(vpcName: string): ListInferIntranetConnectionReviewsRequest {
        this['vpc_name'] = vpcName;
        return this;
    }
    public set vpcName(vpcName: string  | undefined) {
        this['vpc_name'] = vpcName;
    }
    public get vpcName(): string | undefined {
        return this['vpc_name'];
    }
    public withVpcId(vpcId: string): ListInferIntranetConnectionReviewsRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withPoolId(poolId: string): ListInferIntranetConnectionReviewsRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withSortKey(sortKey: string): ListInferIntranetConnectionReviewsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withLimit(limit: number): ListInferIntranetConnectionReviewsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListInferIntranetConnectionReviewsRequest {
        this['offset'] = offset;
        return this;
    }
    public withStatus(status: string): ListInferIntranetConnectionReviewsRequest {
        this['status'] = status;
        return this;
    }
    public withType(type: string): ListInferIntranetConnectionReviewsRequest {
        this['type'] = type;
        return this;
    }
}