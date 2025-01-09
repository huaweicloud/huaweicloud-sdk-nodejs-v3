import { OrderExtendParam } from './OrderExtendParam';
import { Resource } from './Resource';


export class CreateOrderReq {
    public type?: string;
    private 'enterprise_project_id'?: string;
    public resources?: Array<Resource>;
    private 'order_id'?: string;
    private 'promotion_id'?: string;
    private 'promotion_plan_id'?: string;
    private 'promotion_info'?: string;
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
    public withResources(resources: Array<Resource>): CreateOrderReq {
        this['resources'] = resources;
        return this;
    }
    public withOrderId(orderId: string): CreateOrderReq {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withPromotionId(promotionId: string): CreateOrderReq {
        this['promotion_id'] = promotionId;
        return this;
    }
    public set promotionId(promotionId: string  | undefined) {
        this['promotion_id'] = promotionId;
    }
    public get promotionId(): string | undefined {
        return this['promotion_id'];
    }
    public withPromotionPlanId(promotionPlanId: string): CreateOrderReq {
        this['promotion_plan_id'] = promotionPlanId;
        return this;
    }
    public set promotionPlanId(promotionPlanId: string  | undefined) {
        this['promotion_plan_id'] = promotionPlanId;
    }
    public get promotionPlanId(): string | undefined {
        return this['promotion_plan_id'];
    }
    public withPromotionInfo(promotionInfo: string): CreateOrderReq {
        this['promotion_info'] = promotionInfo;
        return this;
    }
    public set promotionInfo(promotionInfo: string  | undefined) {
        this['promotion_info'] = promotionInfo;
    }
    public get promotionInfo(): string | undefined {
        return this['promotion_info'];
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