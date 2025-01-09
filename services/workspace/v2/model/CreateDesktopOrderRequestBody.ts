import { HourPackageResource } from './HourPackageResource';
import { OrderExtendParam } from './OrderExtendParam';


export class CreateDesktopOrderRequestBody {
    private 'enterprise_project_id'?: string;
    private 'hour_package_resources'?: Array<HourPackageResource>;
    private 'order_id'?: string;
    private 'promotion_id'?: string;
    private 'promotion_plan_id'?: string;
    private 'promotion_info'?: string;
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
    public withOrderId(orderId: string): CreateDesktopOrderRequestBody {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withPromotionId(promotionId: string): CreateDesktopOrderRequestBody {
        this['promotion_id'] = promotionId;
        return this;
    }
    public set promotionId(promotionId: string  | undefined) {
        this['promotion_id'] = promotionId;
    }
    public get promotionId(): string | undefined {
        return this['promotion_id'];
    }
    public withPromotionPlanId(promotionPlanId: string): CreateDesktopOrderRequestBody {
        this['promotion_plan_id'] = promotionPlanId;
        return this;
    }
    public set promotionPlanId(promotionPlanId: string  | undefined) {
        this['promotion_plan_id'] = promotionPlanId;
    }
    public get promotionPlanId(): string | undefined {
        return this['promotion_plan_id'];
    }
    public withPromotionInfo(promotionInfo: string): CreateDesktopOrderRequestBody {
        this['promotion_info'] = promotionInfo;
        return this;
    }
    public set promotionInfo(promotionInfo: string  | undefined) {
        this['promotion_info'] = promotionInfo;
    }
    public get promotionInfo(): string | undefined {
        return this['promotion_info'];
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