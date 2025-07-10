import { OrderExtendParam } from './OrderExtendParam';


export class CreateSubnetBandwidthChangeOrderRequestBody {
    private 'bandwidth_name'?: string;
    private 'bandwidth_size'?: string;
    private 'enterprise_project_id'?: string;
    private 'extend_param'?: OrderExtendParam;
    public constructor(bandwidthSize?: string) { 
        this['bandwidth_size'] = bandwidthSize;
    }
    public withBandwidthName(bandwidthName: string): CreateSubnetBandwidthChangeOrderRequestBody {
        this['bandwidth_name'] = bandwidthName;
        return this;
    }
    public set bandwidthName(bandwidthName: string  | undefined) {
        this['bandwidth_name'] = bandwidthName;
    }
    public get bandwidthName(): string | undefined {
        return this['bandwidth_name'];
    }
    public withBandwidthSize(bandwidthSize: string): CreateSubnetBandwidthChangeOrderRequestBody {
        this['bandwidth_size'] = bandwidthSize;
        return this;
    }
    public set bandwidthSize(bandwidthSize: string  | undefined) {
        this['bandwidth_size'] = bandwidthSize;
    }
    public get bandwidthSize(): string | undefined {
        return this['bandwidth_size'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateSubnetBandwidthChangeOrderRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withExtendParam(extendParam: OrderExtendParam): CreateSubnetBandwidthChangeOrderRequestBody {
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