import { PolicyStatement } from './PolicyStatement';
import { TagList } from './TagList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateEndpointResponse extends SdkResponse {
    public id?: string;
    private 'service_type'?: string;
    public status?: string;
    public ip?: string;
    private 'active_status'?: Array<string>;
    private 'endpoint_service_name'?: string;
    private 'marker_id'?: number;
    private 'endpoint_service_id'?: string;
    private 'enable_dns'?: boolean;
    private 'subnet_id'?: string;
    private 'vpc_id'?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'project_id'?: string;
    public tags?: Array<TagList>;
    public whitelist?: Array<string>;
    private 'enable_whitelist'?: boolean;
    public routetables?: Array<string>;
    private 'specification_name'?: string;
    public description?: string;
    private 'policy_statement'?: Array<PolicyStatement>;
    private 'enable_status'?: string;
    private 'endpoint_pool_id'?: string;
    private 'public_border_group'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateEndpointResponse {
        this['id'] = id;
        return this;
    }
    public withServiceType(serviceType: string): CreateEndpointResponse {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withStatus(status: string): CreateEndpointResponse {
        this['status'] = status;
        return this;
    }
    public withIp(ip: string): CreateEndpointResponse {
        this['ip'] = ip;
        return this;
    }
    public withActiveStatus(activeStatus: Array<string>): CreateEndpointResponse {
        this['active_status'] = activeStatus;
        return this;
    }
    public set activeStatus(activeStatus: Array<string>  | undefined) {
        this['active_status'] = activeStatus;
    }
    public get activeStatus(): Array<string> | undefined {
        return this['active_status'];
    }
    public withEndpointServiceName(endpointServiceName: string): CreateEndpointResponse {
        this['endpoint_service_name'] = endpointServiceName;
        return this;
    }
    public set endpointServiceName(endpointServiceName: string  | undefined) {
        this['endpoint_service_name'] = endpointServiceName;
    }
    public get endpointServiceName(): string | undefined {
        return this['endpoint_service_name'];
    }
    public withMarkerId(markerId: number): CreateEndpointResponse {
        this['marker_id'] = markerId;
        return this;
    }
    public set markerId(markerId: number  | undefined) {
        this['marker_id'] = markerId;
    }
    public get markerId(): number | undefined {
        return this['marker_id'];
    }
    public withEndpointServiceId(endpointServiceId: string): CreateEndpointResponse {
        this['endpoint_service_id'] = endpointServiceId;
        return this;
    }
    public set endpointServiceId(endpointServiceId: string  | undefined) {
        this['endpoint_service_id'] = endpointServiceId;
    }
    public get endpointServiceId(): string | undefined {
        return this['endpoint_service_id'];
    }
    public withEnableDns(enableDns: boolean): CreateEndpointResponse {
        this['enable_dns'] = enableDns;
        return this;
    }
    public set enableDns(enableDns: boolean  | undefined) {
        this['enable_dns'] = enableDns;
    }
    public get enableDns(): boolean | undefined {
        return this['enable_dns'];
    }
    public withSubnetId(subnetId: string): CreateEndpointResponse {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withVpcId(vpcId: string): CreateEndpointResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withCreatedAt(createdAt: Date): CreateEndpointResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): CreateEndpointResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withProjectId(projectId: string): CreateEndpointResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTags(tags: Array<TagList>): CreateEndpointResponse {
        this['tags'] = tags;
        return this;
    }
    public withWhitelist(whitelist: Array<string>): CreateEndpointResponse {
        this['whitelist'] = whitelist;
        return this;
    }
    public withEnableWhitelist(enableWhitelist: boolean): CreateEndpointResponse {
        this['enable_whitelist'] = enableWhitelist;
        return this;
    }
    public set enableWhitelist(enableWhitelist: boolean  | undefined) {
        this['enable_whitelist'] = enableWhitelist;
    }
    public get enableWhitelist(): boolean | undefined {
        return this['enable_whitelist'];
    }
    public withRoutetables(routetables: Array<string>): CreateEndpointResponse {
        this['routetables'] = routetables;
        return this;
    }
    public withSpecificationName(specificationName: string): CreateEndpointResponse {
        this['specification_name'] = specificationName;
        return this;
    }
    public set specificationName(specificationName: string  | undefined) {
        this['specification_name'] = specificationName;
    }
    public get specificationName(): string | undefined {
        return this['specification_name'];
    }
    public withDescription(description: string): CreateEndpointResponse {
        this['description'] = description;
        return this;
    }
    public withPolicyStatement(policyStatement: Array<PolicyStatement>): CreateEndpointResponse {
        this['policy_statement'] = policyStatement;
        return this;
    }
    public set policyStatement(policyStatement: Array<PolicyStatement>  | undefined) {
        this['policy_statement'] = policyStatement;
    }
    public get policyStatement(): Array<PolicyStatement> | undefined {
        return this['policy_statement'];
    }
    public withEnableStatus(enableStatus: string): CreateEndpointResponse {
        this['enable_status'] = enableStatus;
        return this;
    }
    public set enableStatus(enableStatus: string  | undefined) {
        this['enable_status'] = enableStatus;
    }
    public get enableStatus(): string | undefined {
        return this['enable_status'];
    }
    public withEndpointPoolId(endpointPoolId: string): CreateEndpointResponse {
        this['endpoint_pool_id'] = endpointPoolId;
        return this;
    }
    public set endpointPoolId(endpointPoolId: string  | undefined) {
        this['endpoint_pool_id'] = endpointPoolId;
    }
    public get endpointPoolId(): string | undefined {
        return this['endpoint_pool_id'];
    }
    public withPublicBorderGroup(publicBorderGroup: string): CreateEndpointResponse {
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