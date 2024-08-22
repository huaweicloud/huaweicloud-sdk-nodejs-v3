import { PolicyStatement } from './PolicyStatement';
import { TagList } from './TagList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateEndpointWhiteResponse extends SdkResponse {
    public id?: string;
    private 'service_type'?: string;
    public status?: string;
    public ip?: string;
    private 'active_status'?: Array<string>;
    private 'endpoint_service_name'?: string;
    private 'marker_id'?: number;
    private 'endpoint_service_id'?: string;
    private 'enable_dns'?: boolean;
    private 'dns_names'?: Array<string>;
    private 'subnet_id'?: string;
    private 'vpc_id'?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'project_id'?: string;
    public tags?: Array<TagList>;
    public whitelist?: Array<string>;
    private 'enable_whitelist'?: boolean;
    private 'policy_statement'?: Array<PolicyStatement>;
    private 'policy_document'?: object;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateEndpointWhiteResponse {
        this['id'] = id;
        return this;
    }
    public withServiceType(serviceType: string): UpdateEndpointWhiteResponse {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withStatus(status: string): UpdateEndpointWhiteResponse {
        this['status'] = status;
        return this;
    }
    public withIp(ip: string): UpdateEndpointWhiteResponse {
        this['ip'] = ip;
        return this;
    }
    public withActiveStatus(activeStatus: Array<string>): UpdateEndpointWhiteResponse {
        this['active_status'] = activeStatus;
        return this;
    }
    public set activeStatus(activeStatus: Array<string>  | undefined) {
        this['active_status'] = activeStatus;
    }
    public get activeStatus(): Array<string> | undefined {
        return this['active_status'];
    }
    public withEndpointServiceName(endpointServiceName: string): UpdateEndpointWhiteResponse {
        this['endpoint_service_name'] = endpointServiceName;
        return this;
    }
    public set endpointServiceName(endpointServiceName: string  | undefined) {
        this['endpoint_service_name'] = endpointServiceName;
    }
    public get endpointServiceName(): string | undefined {
        return this['endpoint_service_name'];
    }
    public withMarkerId(markerId: number): UpdateEndpointWhiteResponse {
        this['marker_id'] = markerId;
        return this;
    }
    public set markerId(markerId: number  | undefined) {
        this['marker_id'] = markerId;
    }
    public get markerId(): number | undefined {
        return this['marker_id'];
    }
    public withEndpointServiceId(endpointServiceId: string): UpdateEndpointWhiteResponse {
        this['endpoint_service_id'] = endpointServiceId;
        return this;
    }
    public set endpointServiceId(endpointServiceId: string  | undefined) {
        this['endpoint_service_id'] = endpointServiceId;
    }
    public get endpointServiceId(): string | undefined {
        return this['endpoint_service_id'];
    }
    public withEnableDns(enableDns: boolean): UpdateEndpointWhiteResponse {
        this['enable_dns'] = enableDns;
        return this;
    }
    public set enableDns(enableDns: boolean  | undefined) {
        this['enable_dns'] = enableDns;
    }
    public get enableDns(): boolean | undefined {
        return this['enable_dns'];
    }
    public withDnsNames(dnsNames: Array<string>): UpdateEndpointWhiteResponse {
        this['dns_names'] = dnsNames;
        return this;
    }
    public set dnsNames(dnsNames: Array<string>  | undefined) {
        this['dns_names'] = dnsNames;
    }
    public get dnsNames(): Array<string> | undefined {
        return this['dns_names'];
    }
    public withSubnetId(subnetId: string): UpdateEndpointWhiteResponse {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withVpcId(vpcId: string): UpdateEndpointWhiteResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withCreatedAt(createdAt: Date): UpdateEndpointWhiteResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): UpdateEndpointWhiteResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withProjectId(projectId: string): UpdateEndpointWhiteResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTags(tags: Array<TagList>): UpdateEndpointWhiteResponse {
        this['tags'] = tags;
        return this;
    }
    public withWhitelist(whitelist: Array<string>): UpdateEndpointWhiteResponse {
        this['whitelist'] = whitelist;
        return this;
    }
    public withEnableWhitelist(enableWhitelist: boolean): UpdateEndpointWhiteResponse {
        this['enable_whitelist'] = enableWhitelist;
        return this;
    }
    public set enableWhitelist(enableWhitelist: boolean  | undefined) {
        this['enable_whitelist'] = enableWhitelist;
    }
    public get enableWhitelist(): boolean | undefined {
        return this['enable_whitelist'];
    }
    public withPolicyStatement(policyStatement: Array<PolicyStatement>): UpdateEndpointWhiteResponse {
        this['policy_statement'] = policyStatement;
        return this;
    }
    public set policyStatement(policyStatement: Array<PolicyStatement>  | undefined) {
        this['policy_statement'] = policyStatement;
    }
    public get policyStatement(): Array<PolicyStatement> | undefined {
        return this['policy_statement'];
    }
    public withPolicyDocument(policyDocument: object): UpdateEndpointWhiteResponse {
        this['policy_document'] = policyDocument;
        return this;
    }
    public set policyDocument(policyDocument: object  | undefined) {
        this['policy_document'] = policyDocument;
    }
    public get policyDocument(): object | undefined {
        return this['policy_document'];
    }
}