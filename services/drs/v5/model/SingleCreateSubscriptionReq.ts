import { ResourceTag } from './ResourceTag';
import { SubscriptionSourceEndpointInfo } from './SubscriptionSourceEndpointInfo';


export class SingleCreateSubscriptionReq {
    public name?: string;
    public description?: string;
    private 'instance_type'?: string;
    private 'enterprise_project_id'?: string;
    public tags?: Array<ResourceTag>;
    private 'source_endpoint_info'?: SubscriptionSourceEndpointInfo;
    private 'is_grant_new_agency'?: boolean;
    public constructor(name?: string, enterpriseProjectId?: string, sourceEndpointInfo?: SubscriptionSourceEndpointInfo) { 
        this['name'] = name;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['source_endpoint_info'] = sourceEndpointInfo;
    }
    public withName(name: string): SingleCreateSubscriptionReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): SingleCreateSubscriptionReq {
        this['description'] = description;
        return this;
    }
    public withInstanceType(instanceType: string): SingleCreateSubscriptionReq {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): string | undefined {
        return this['instance_type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SingleCreateSubscriptionReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<ResourceTag>): SingleCreateSubscriptionReq {
        this['tags'] = tags;
        return this;
    }
    public withSourceEndpointInfo(sourceEndpointInfo: SubscriptionSourceEndpointInfo): SingleCreateSubscriptionReq {
        this['source_endpoint_info'] = sourceEndpointInfo;
        return this;
    }
    public set sourceEndpointInfo(sourceEndpointInfo: SubscriptionSourceEndpointInfo  | undefined) {
        this['source_endpoint_info'] = sourceEndpointInfo;
    }
    public get sourceEndpointInfo(): SubscriptionSourceEndpointInfo | undefined {
        return this['source_endpoint_info'];
    }
    public withIsGrantNewAgency(isGrantNewAgency: boolean): SingleCreateSubscriptionReq {
        this['is_grant_new_agency'] = isGrantNewAgency;
        return this;
    }
    public set isGrantNewAgency(isGrantNewAgency: boolean  | undefined) {
        this['is_grant_new_agency'] = isGrantNewAgency;
    }
    public get isGrantNewAgency(): boolean | undefined {
        return this['is_grant_new_agency'];
    }
}