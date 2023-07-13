import { QueryError } from './QueryError';
import { TagList } from './TagList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEndpointInfoDetailsResponse extends SdkResponse {
    public id?: string;
    private 'service_type'?: ListEndpointInfoDetailsResponseServiceTypeEnum | undefined;
    public status?: ListEndpointInfoDetailsResponseStatusEnum;
    private 'active_status'?: Array<string> | undefined;
    private 'enable_status'?: ListEndpointInfoDetailsResponseEnableStatusEnum | undefined;
    private 'specification_name'?: string | undefined;
    private 'endpoint_service_name'?: string | undefined;
    private 'marker_id'?: number | undefined;
    private 'endpoint_service_id'?: string | undefined;
    private 'enable_dns'?: boolean | undefined;
    private 'dns_names'?: Array<string> | undefined;
    public ip?: string;
    private 'vpc_id'?: string | undefined;
    private 'subnet_id'?: string | undefined;
    private 'created_at'?: string | undefined;
    private 'updated_at'?: string | undefined;
    private 'project_id'?: string | undefined;
    public tags?: Array<TagList>;
    public error?: QueryError;
    public whitelist?: Array<string>;
    private 'enable_whitelist'?: boolean | undefined;
    public routetables?: Array<string>;
    public description?: string;
    private 'policy_statement'?: Array<string> | undefined;
    private 'endpoint_pool_id'?: string | undefined;
    private 'public_border_group'?: string | undefined;
    public constructor() { 
        super();
    }
    public withId(id: string): ListEndpointInfoDetailsResponse {
        this['id'] = id;
        return this;
    }
    public withServiceType(serviceType: ListEndpointInfoDetailsResponseServiceTypeEnum): ListEndpointInfoDetailsResponse {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: ListEndpointInfoDetailsResponseServiceTypeEnum | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType() {
        return this['service_type'];
    }
    public withStatus(status: ListEndpointInfoDetailsResponseStatusEnum): ListEndpointInfoDetailsResponse {
        this['status'] = status;
        return this;
    }
    public withActiveStatus(activeStatus: Array<string>): ListEndpointInfoDetailsResponse {
        this['active_status'] = activeStatus;
        return this;
    }
    public set activeStatus(activeStatus: Array<string> | undefined) {
        this['active_status'] = activeStatus;
    }
    public get activeStatus() {
        return this['active_status'];
    }
    public withEnableStatus(enableStatus: ListEndpointInfoDetailsResponseEnableStatusEnum): ListEndpointInfoDetailsResponse {
        this['enable_status'] = enableStatus;
        return this;
    }
    public set enableStatus(enableStatus: ListEndpointInfoDetailsResponseEnableStatusEnum | undefined) {
        this['enable_status'] = enableStatus;
    }
    public get enableStatus() {
        return this['enable_status'];
    }
    public withSpecificationName(specificationName: string): ListEndpointInfoDetailsResponse {
        this['specification_name'] = specificationName;
        return this;
    }
    public set specificationName(specificationName: string | undefined) {
        this['specification_name'] = specificationName;
    }
    public get specificationName() {
        return this['specification_name'];
    }
    public withEndpointServiceName(endpointServiceName: string): ListEndpointInfoDetailsResponse {
        this['endpoint_service_name'] = endpointServiceName;
        return this;
    }
    public set endpointServiceName(endpointServiceName: string | undefined) {
        this['endpoint_service_name'] = endpointServiceName;
    }
    public get endpointServiceName() {
        return this['endpoint_service_name'];
    }
    public withMarkerId(markerId: number): ListEndpointInfoDetailsResponse {
        this['marker_id'] = markerId;
        return this;
    }
    public set markerId(markerId: number | undefined) {
        this['marker_id'] = markerId;
    }
    public get markerId() {
        return this['marker_id'];
    }
    public withEndpointServiceId(endpointServiceId: string): ListEndpointInfoDetailsResponse {
        this['endpoint_service_id'] = endpointServiceId;
        return this;
    }
    public set endpointServiceId(endpointServiceId: string | undefined) {
        this['endpoint_service_id'] = endpointServiceId;
    }
    public get endpointServiceId() {
        return this['endpoint_service_id'];
    }
    public withEnableDns(enableDns: boolean): ListEndpointInfoDetailsResponse {
        this['enable_dns'] = enableDns;
        return this;
    }
    public set enableDns(enableDns: boolean | undefined) {
        this['enable_dns'] = enableDns;
    }
    public get enableDns() {
        return this['enable_dns'];
    }
    public withDnsNames(dnsNames: Array<string>): ListEndpointInfoDetailsResponse {
        this['dns_names'] = dnsNames;
        return this;
    }
    public set dnsNames(dnsNames: Array<string> | undefined) {
        this['dns_names'] = dnsNames;
    }
    public get dnsNames() {
        return this['dns_names'];
    }
    public withIp(ip: string): ListEndpointInfoDetailsResponse {
        this['ip'] = ip;
        return this;
    }
    public withVpcId(vpcId: string): ListEndpointInfoDetailsResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): ListEndpointInfoDetailsResponse {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
    public withCreatedAt(createdAt: string): ListEndpointInfoDetailsResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ListEndpointInfoDetailsResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withProjectId(projectId: string): ListEndpointInfoDetailsResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withTags(tags: Array<TagList>): ListEndpointInfoDetailsResponse {
        this['tags'] = tags;
        return this;
    }
    public withError(error: QueryError): ListEndpointInfoDetailsResponse {
        this['error'] = error;
        return this;
    }
    public withWhitelist(whitelist: Array<string>): ListEndpointInfoDetailsResponse {
        this['whitelist'] = whitelist;
        return this;
    }
    public withEnableWhitelist(enableWhitelist: boolean): ListEndpointInfoDetailsResponse {
        this['enable_whitelist'] = enableWhitelist;
        return this;
    }
    public set enableWhitelist(enableWhitelist: boolean | undefined) {
        this['enable_whitelist'] = enableWhitelist;
    }
    public get enableWhitelist() {
        return this['enable_whitelist'];
    }
    public withRoutetables(routetables: Array<string>): ListEndpointInfoDetailsResponse {
        this['routetables'] = routetables;
        return this;
    }
    public withDescription(description: string): ListEndpointInfoDetailsResponse {
        this['description'] = description;
        return this;
    }
    public withPolicyStatement(policyStatement: Array<string>): ListEndpointInfoDetailsResponse {
        this['policy_statement'] = policyStatement;
        return this;
    }
    public set policyStatement(policyStatement: Array<string> | undefined) {
        this['policy_statement'] = policyStatement;
    }
    public get policyStatement() {
        return this['policy_statement'];
    }
    public withEndpointPoolId(endpointPoolId: string): ListEndpointInfoDetailsResponse {
        this['endpoint_pool_id'] = endpointPoolId;
        return this;
    }
    public set endpointPoolId(endpointPoolId: string | undefined) {
        this['endpoint_pool_id'] = endpointPoolId;
    }
    public get endpointPoolId() {
        return this['endpoint_pool_id'];
    }
    public withPublicBorderGroup(publicBorderGroup: string): ListEndpointInfoDetailsResponse {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup() {
        return this['public_border_group'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListEndpointInfoDetailsResponseServiceTypeEnum {
    INTERFACE = 'interface',
    GATEWAY = 'gateway'
}
/**
    * @export
    * @enum {string}
    */
export enum ListEndpointInfoDetailsResponseStatusEnum {
    PENDINGACCEPTANCE = 'pendingAcceptance',
    CREATING = 'creating',
    ACCEPTED = 'accepted',
    REJECTED = 'rejected',
    FAILED = 'failed',
    DELETING = 'deleting'
}
/**
    * @export
    * @enum {string}
    */
export enum ListEndpointInfoDetailsResponseEnableStatusEnum {
    ENABLE = 'enable',
    DISABLE = 'disable'
}
