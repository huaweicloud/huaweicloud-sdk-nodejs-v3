import { PolicyStatement } from './PolicyStatement';
import { QueryError } from './QueryError';
import { TagList } from './TagList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteEndpointPolicyResponse extends SdkResponse {
    public id?: string;
    private 'service_type'?: DeleteEndpointPolicyResponseServiceTypeEnum | string;
    public status?: DeleteEndpointPolicyResponseStatusEnum | string;
    private 'active_status'?: Array<string>;
    private 'endpoint_service_name'?: string;
    private 'marker_id'?: number;
    private 'endpoint_service_id'?: string;
    private 'enable_dns'?: boolean;
    private 'dns_names'?: Array<string>;
    public ip?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'project_id'?: string;
    public tags?: Array<TagList>;
    public error?: Array<QueryError>;
    public whitelist?: Array<string>;
    private 'enable_whitelist'?: boolean;
    public routetables?: Array<string>;
    public description?: string;
    private 'policy_statement'?: Array<PolicyStatement>;
    private 'endpoint_pool_id'?: string;
    private 'public_border_group'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): DeleteEndpointPolicyResponse {
        this['id'] = id;
        return this;
    }
    public withServiceType(serviceType: DeleteEndpointPolicyResponseServiceTypeEnum | string): DeleteEndpointPolicyResponse {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: DeleteEndpointPolicyResponseServiceTypeEnum | string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): DeleteEndpointPolicyResponseServiceTypeEnum | string | undefined {
        return this['service_type'];
    }
    public withStatus(status: DeleteEndpointPolicyResponseStatusEnum | string): DeleteEndpointPolicyResponse {
        this['status'] = status;
        return this;
    }
    public withActiveStatus(activeStatus: Array<string>): DeleteEndpointPolicyResponse {
        this['active_status'] = activeStatus;
        return this;
    }
    public set activeStatus(activeStatus: Array<string>  | undefined) {
        this['active_status'] = activeStatus;
    }
    public get activeStatus(): Array<string> | undefined {
        return this['active_status'];
    }
    public withEndpointServiceName(endpointServiceName: string): DeleteEndpointPolicyResponse {
        this['endpoint_service_name'] = endpointServiceName;
        return this;
    }
    public set endpointServiceName(endpointServiceName: string  | undefined) {
        this['endpoint_service_name'] = endpointServiceName;
    }
    public get endpointServiceName(): string | undefined {
        return this['endpoint_service_name'];
    }
    public withMarkerId(markerId: number): DeleteEndpointPolicyResponse {
        this['marker_id'] = markerId;
        return this;
    }
    public set markerId(markerId: number  | undefined) {
        this['marker_id'] = markerId;
    }
    public get markerId(): number | undefined {
        return this['marker_id'];
    }
    public withEndpointServiceId(endpointServiceId: string): DeleteEndpointPolicyResponse {
        this['endpoint_service_id'] = endpointServiceId;
        return this;
    }
    public set endpointServiceId(endpointServiceId: string  | undefined) {
        this['endpoint_service_id'] = endpointServiceId;
    }
    public get endpointServiceId(): string | undefined {
        return this['endpoint_service_id'];
    }
    public withEnableDns(enableDns: boolean): DeleteEndpointPolicyResponse {
        this['enable_dns'] = enableDns;
        return this;
    }
    public set enableDns(enableDns: boolean  | undefined) {
        this['enable_dns'] = enableDns;
    }
    public get enableDns(): boolean | undefined {
        return this['enable_dns'];
    }
    public withDnsNames(dnsNames: Array<string>): DeleteEndpointPolicyResponse {
        this['dns_names'] = dnsNames;
        return this;
    }
    public set dnsNames(dnsNames: Array<string>  | undefined) {
        this['dns_names'] = dnsNames;
    }
    public get dnsNames(): Array<string> | undefined {
        return this['dns_names'];
    }
    public withIp(ip: string): DeleteEndpointPolicyResponse {
        this['ip'] = ip;
        return this;
    }
    public withVpcId(vpcId: string): DeleteEndpointPolicyResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): DeleteEndpointPolicyResponse {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withCreatedAt(createdAt: string): DeleteEndpointPolicyResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): DeleteEndpointPolicyResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withProjectId(projectId: string): DeleteEndpointPolicyResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTags(tags: Array<TagList>): DeleteEndpointPolicyResponse {
        this['tags'] = tags;
        return this;
    }
    public withError(error: Array<QueryError>): DeleteEndpointPolicyResponse {
        this['error'] = error;
        return this;
    }
    public withWhitelist(whitelist: Array<string>): DeleteEndpointPolicyResponse {
        this['whitelist'] = whitelist;
        return this;
    }
    public withEnableWhitelist(enableWhitelist: boolean): DeleteEndpointPolicyResponse {
        this['enable_whitelist'] = enableWhitelist;
        return this;
    }
    public set enableWhitelist(enableWhitelist: boolean  | undefined) {
        this['enable_whitelist'] = enableWhitelist;
    }
    public get enableWhitelist(): boolean | undefined {
        return this['enable_whitelist'];
    }
    public withRoutetables(routetables: Array<string>): DeleteEndpointPolicyResponse {
        this['routetables'] = routetables;
        return this;
    }
    public withDescription(description: string): DeleteEndpointPolicyResponse {
        this['description'] = description;
        return this;
    }
    public withPolicyStatement(policyStatement: Array<PolicyStatement>): DeleteEndpointPolicyResponse {
        this['policy_statement'] = policyStatement;
        return this;
    }
    public set policyStatement(policyStatement: Array<PolicyStatement>  | undefined) {
        this['policy_statement'] = policyStatement;
    }
    public get policyStatement(): Array<PolicyStatement> | undefined {
        return this['policy_statement'];
    }
    public withEndpointPoolId(endpointPoolId: string): DeleteEndpointPolicyResponse {
        this['endpoint_pool_id'] = endpointPoolId;
        return this;
    }
    public set endpointPoolId(endpointPoolId: string  | undefined) {
        this['endpoint_pool_id'] = endpointPoolId;
    }
    public get endpointPoolId(): string | undefined {
        return this['endpoint_pool_id'];
    }
    public withPublicBorderGroup(publicBorderGroup: string): DeleteEndpointPolicyResponse {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string  | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup(): string | undefined {
        return this['public_border_group'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteEndpointPolicyResponseServiceTypeEnum {
    INTERFACE = 'interface',
    GATEWAY = 'gateway'
}
/**
    * @export
    * @enum {string}
    */
export enum DeleteEndpointPolicyResponseStatusEnum {
    PENDINGACCEPTANCE = 'pendingAcceptance',
    CREATING = 'creating',
    ACCEPTED = 'accepted',
    REJECTED = 'rejected',
    FAILED = 'failed',
    DELETING = 'deleting'
}
