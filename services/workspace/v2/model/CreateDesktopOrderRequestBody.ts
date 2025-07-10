import { HourPackageResource } from './HourPackageResource';
import { OrderExtendParam } from './OrderExtendParam';


export class CreateDesktopOrderRequestBody {
    private 'enterprise_project_id'?: string;
    private 'hour_package_resources'?: Array<HourPackageResource>;
    private 'extend_param'?: OrderExtendParam;
    public constructor(hourPackageResources?: Array<HourPackageResource>) { 
        this['hour_package_resources'] = hourPackageResources;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateDesktopOrderRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHourPackageResources(hourPackageResources: Array<HourPackageResource>): CreateDesktopOrderRequestBody {
        this['hour_package_resources'] = hourPackageResources;
        return this;
    }
    public set hourPackageResources(hourPackageResources: Array<HourPackageResource>  | undefined) {
        this['hour_package_resources'] = hourPackageResources;
    }
    public get hourPackageResources(): Array<HourPackageResource> | undefined {
        return this['hour_package_resources'];
    }
    public withExtendParam(extendParam: OrderExtendParam): CreateDesktopOrderRequestBody {
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