import { PolicyStatement } from './PolicyStatement';
import { QueryError } from './QueryError';
import { TagList } from './TagList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEndpointInfoDetailsResponse extends SdkResponse {
    public id?: string;
    private 'service_type'?: string;
    public status?: string;
    private 'active_status'?: Array<string>;
    private 'enable_status'?: string;
    private 'specification_name'?: string;
    private 'endpoint_service_name'?: string;
    private 'marker_id'?: number;
    private 'endpoint_service_id'?: string;
    private 'enable_dns'?: boolean;
    private 'dns_names'?: Array<string>;
    public ip?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'project_id'?: string;
    public tags?: Array<TagList>;
    public error?: QueryError;
    public whitelist?: Array<string>;
    private 'enable_whitelist'?: boolean;
    public routetables?: Array<string>;
    public description?: string;
    private 'policy_statement'?: Array<PolicyStatement>;
    private 'policy_document'?: object;
    private 'endpoint_pool_id'?: string;
    private 'public_border_group'?: string;
    private 'ipv6_address'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ListEndpointInfoDetailsResponse {
        this['id'] = id;
        return this;
    }
    public withServiceType(serviceType: string): ListEndpointInfoDetailsResponse {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withStatus(status: string): ListEndpointInfoDetailsResponse {
        this['status'] = status;
        return this;
    }
    public withActiveStatus(activeStatus: Array<string>): ListEndpointInfoDetailsResponse {
        this['active_status'] = activeStatus;
        return this;
    }
    public set activeStatus(activeStatus: Array<string>  | undefined) {
        this['active_status'] = activeStatus;
    }
    public get activeStatus(): Array<string> | undefined {
        return this['active_status'];
    }
    public withEnableStatus(enableStatus: string): ListEndpointInfoDetailsResponse {
        this['enable_status'] = enableStatus;
        return this;
    }
    public set enableStatus(enableStatus: string  | undefined) {
        this['enable_status'] = enableStatus;
    }
    public get enableStatus(): string | undefined {
        return this['enable_status'];
    }
    public withSpecificationName(specificationName: string): ListEndpointInfoDetailsResponse {
        this['specification_name'] = specificationName;
        return this;
    }
    public set specificationName(specificationName: string  | undefined) {
        this['specification_name'] = specificationName;
    }
    public get specificationName(): string | undefined {
        return this['specification_name'];
    }
    public withEndpointServiceName(endpointServiceName: string): ListEndpointInfoDetailsResponse {
        this['endpoint_service_name'] = endpointServiceName;
        return this;
    }
    public set endpointServiceName(endpointServiceName: string  | undefined) {
        this['endpoint_service_name'] = endpointServiceName;
    }
    public get endpointServiceName(): string | undefined {
        return this['endpoint_service_name'];
    }
    public withMarkerId(markerId: number): ListEndpointInfoDetailsResponse {
        this['marker_id'] = markerId;
        return this;
    }
    public set markerId(markerId: number  | undefined) {
        this['marker_id'] = markerId;
    }
    public get markerId(): number | undefined {
        return this['marker_id'];
    }
    public withEndpointServiceId(endpointServiceId: string): ListEndpointInfoDetailsResponse {
        this['endpoint_service_id'] = endpointServiceId;
        return this;
    }
    public set endpointServiceId(endpointServiceId: string  | undefined) {
        this['endpoint_service_id'] = endpointServiceId;
    }
    public get endpointServiceId(): string | undefined {
        return this['endpoint_service_id'];
    }
    public withEnableDns(enableDns: boolean): ListEndpointInfoDetailsResponse {
        this['enable_dns'] = enableDns;
        return this;
    }
    public set enableDns(enableDns: boolean  | undefined) {
        this['enable_dns'] = enableDns;
    }
    public get enableDns(): boolean | undefined {
        return this['enable_dns'];
    }
    public withDnsNames(dnsNames: Array<string>): ListEndpointInfoDetailsResponse {
        this['dns_names'] = dnsNames;
        return this;
    }
    public set dnsNames(dnsNames: Array<string>  | undefined) {
        this['dns_names'] = dnsNames;
    }
    public get dnsNames(): Array<string> | undefined {
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
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): ListEndpointInfoDetailsResponse {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withCreatedAt(createdAt: Date): ListEndpointInfoDetailsResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): ListEndpointInfoDetailsResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withProjectId(projectId: string): ListEndpointInfoDetailsResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
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
    public set enableWhitelist(enableWhitelist: boolean  | undefined) {
        this['enable_whitelist'] = enableWhitelist;
    }
    public get enableWhitelist(): boolean | undefined {
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
    public withPolicyStatement(policyStatement: Array<PolicyStatement>): ListEndpointInfoDetailsResponse {
        this['policy_statement'] = policyStatement;
        return this;
    }
    public set policyStatement(policyStatement: Array<PolicyStatement>  | undefined) {
        this['policy_statement'] = policyStatement;
    }
    public get policyStatement(): Array<PolicyStatement> | undefined {
        return this['policy_statement'];
    }
    public withPolicyDocument(policyDocument: object): ListEndpointInfoDetailsResponse {
        this['policy_document'] = policyDocument;
        return this;
    }
    public set policyDocument(policyDocument: object  | undefined) {
        this['policy_document'] = policyDocument;
    }
    public get policyDocument(): object | undefined {
        return this['policy_document'];
    }
    public withEndpointPoolId(endpointPoolId: string): ListEndpointInfoDetailsResponse {
        this['endpoint_pool_id'] = endpointPoolId;
        return this;
    }
    public set endpointPoolId(endpointPoolId: string  | undefined) {
        this['endpoint_pool_id'] = endpointPoolId;
    }
    public get endpointPoolId(): string | undefined {
        return this['endpoint_pool_id'];
    }
    public withPublicBorderGroup(publicBorderGroup: string): ListEndpointInfoDetailsResponse {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string  | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup(): string | undefined {
        return this['public_border_group'];
    }
    public withIpv6Address(ipv6Address: string): ListEndpointInfoDetailsResponse {
        this['ipv6_address'] = ipv6Address;
        return this;
    }
    public set ipv6Address(ipv6Address: string  | undefined) {
        this['ipv6_address'] = ipv6Address;
    }
    public get ipv6Address(): string | undefined {
        return this['ipv6_address'];
    }
}