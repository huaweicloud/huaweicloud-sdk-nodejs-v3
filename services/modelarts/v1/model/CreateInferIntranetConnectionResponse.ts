
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateInferIntranetConnectionResponse extends SdkResponse {
    private 'applicant_user_name'?: string;
    public id?: string;
    public message?: string;
    private 'owner_domain_name'?: string;
    public scene?: string;
    private 'service_id'?: string;
    private 'service_name'?: string;
    public status?: string;
    private 'subnet_id'?: string;
    private 'url_list'?: Array<string>;
    private 'custom_url_list'?: Array<string>;
    private 'vpc_id'?: string;
    private 'dispatcher_group_id'?: string;
    public type?: CreateInferIntranetConnectionResponseTypeEnum | string;
    private 'maos_network_name'?: string;
    private 'service_type'?: string;
    private 'pool_id'?: string;
    private 'create_at'?: string;
    private 'update_at'?: string;
    public constructor() { 
        super();
    }
    public withApplicantUserName(applicantUserName: string): CreateInferIntranetConnectionResponse {
        this['applicant_user_name'] = applicantUserName;
        return this;
    }
    public set applicantUserName(applicantUserName: string  | undefined) {
        this['applicant_user_name'] = applicantUserName;
    }
    public get applicantUserName(): string | undefined {
        return this['applicant_user_name'];
    }
    public withId(id: string): CreateInferIntranetConnectionResponse {
        this['id'] = id;
        return this;
    }
    public withMessage(message: string): CreateInferIntranetConnectionResponse {
        this['message'] = message;
        return this;
    }
    public withOwnerDomainName(ownerDomainName: string): CreateInferIntranetConnectionResponse {
        this['owner_domain_name'] = ownerDomainName;
        return this;
    }
    public set ownerDomainName(ownerDomainName: string  | undefined) {
        this['owner_domain_name'] = ownerDomainName;
    }
    public get ownerDomainName(): string | undefined {
        return this['owner_domain_name'];
    }
    public withScene(scene: string): CreateInferIntranetConnectionResponse {
        this['scene'] = scene;
        return this;
    }
    public withServiceId(serviceId: string): CreateInferIntranetConnectionResponse {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withServiceName(serviceName: string): CreateInferIntranetConnectionResponse {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withStatus(status: string): CreateInferIntranetConnectionResponse {
        this['status'] = status;
        return this;
    }
    public withSubnetId(subnetId: string): CreateInferIntranetConnectionResponse {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withUrlList(urlList: Array<string>): CreateInferIntranetConnectionResponse {
        this['url_list'] = urlList;
        return this;
    }
    public set urlList(urlList: Array<string>  | undefined) {
        this['url_list'] = urlList;
    }
    public get urlList(): Array<string> | undefined {
        return this['url_list'];
    }
    public withCustomUrlList(customUrlList: Array<string>): CreateInferIntranetConnectionResponse {
        this['custom_url_list'] = customUrlList;
        return this;
    }
    public set customUrlList(customUrlList: Array<string>  | undefined) {
        this['custom_url_list'] = customUrlList;
    }
    public get customUrlList(): Array<string> | undefined {
        return this['custom_url_list'];
    }
    public withVpcId(vpcId: string): CreateInferIntranetConnectionResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withDispatcherGroupId(dispatcherGroupId: string): CreateInferIntranetConnectionResponse {
        this['dispatcher_group_id'] = dispatcherGroupId;
        return this;
    }
    public set dispatcherGroupId(dispatcherGroupId: string  | undefined) {
        this['dispatcher_group_id'] = dispatcherGroupId;
    }
    public get dispatcherGroupId(): string | undefined {
        return this['dispatcher_group_id'];
    }
    public withType(type: CreateInferIntranetConnectionResponseTypeEnum | string): CreateInferIntranetConnectionResponse {
        this['type'] = type;
        return this;
    }
    public withMaosNetworkName(maosNetworkName: string): CreateInferIntranetConnectionResponse {
        this['maos_network_name'] = maosNetworkName;
        return this;
    }
    public set maosNetworkName(maosNetworkName: string  | undefined) {
        this['maos_network_name'] = maosNetworkName;
    }
    public get maosNetworkName(): string | undefined {
        return this['maos_network_name'];
    }
    public withServiceType(serviceType: string): CreateInferIntranetConnectionResponse {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withPoolId(poolId: string): CreateInferIntranetConnectionResponse {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withCreateAt(createAt: string): CreateInferIntranetConnectionResponse {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: string  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): string | undefined {
        return this['create_at'];
    }
    public withUpdateAt(updateAt: string): CreateInferIntranetConnectionResponse {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: string  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): string | undefined {
        return this['update_at'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateInferIntranetConnectionResponseTypeEnum {
    SERVICE = 'SERVICE',
    GLOBAL = 'GLOBAL'
}
