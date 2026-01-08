import { OrderExtendParam } from './OrderExtendParam';
import { Resource } from './Resource';


export class CreateOrderReq {
    public type?: string;
    private 'enterprise_project_id'?: string;
    private 'agency_urn'?: string;
    public resources?: Array<Resource>;
    private 'extend_param'?: OrderExtendParam;
    public constructor(type?: string, resources?: Array<Resource>) { 
        this['type'] = type;
        this['resources'] = resources;
    }
    public withType(type: string): CreateOrderReq {
        this['type'] = type;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateOrderReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withAgencyUrn(agencyUrn: string): CreateOrderReq {
        this['agency_urn'] = agencyUrn;
        return this;
    }
    public set agencyUrn(agencyUrn: string  | undefined) {
        this['agency_urn'] = agencyUrn;
    }
    public get agencyUrn(): string | undefined {
        return this['agency_urn'];
    }
    public withResources(resources: Array<Resource>): CreateOrderReq {
        this['resources'] = resources;
        return this;
    }
    public withExtendParam(extendParam: OrderExtendParam): CreateOrderReq {
        this['extend_param'] = extendParam;
        return this;
    }
    public set extendParam(extendParam: OrderExtendParam  | undefined) {
        this['extend_param'] = extendParam;
    }
    public get extendParam(): OrderExtendParam | undefined {
        return this['extend_param'];
    }
}