import { Volume } from './Volume';


export class AddVolumesReq {
    private 'order_id'?: string;
    private 'enterprise_project_id'?: string;
    public volumes?: Array<Volume>;
    public constructor(volumes?: Array<Volume>) { 
        this['volumes'] = volumes;
    }
    public withOrderId(orderId: string): AddVolumesReq {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AddVolumesReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withVolumes(volumes: Array<Volume>): AddVolumesReq {
        this['volumes'] = volumes;
        return this;
    }
}