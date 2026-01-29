import { OrderConfig } from './OrderConfig';
import { Product } from './Product';
import { SubscriptionTag } from './SubscriptionTag';


export class OrderInfoReq {
    public scene?: OrderInfoReqSceneEnum | string;
    private 'promotion_info'?: string;
    private 'operate_type'?: OrderInfoReqOperateTypeEnum | string;
    private 'tag_list'?: Array<SubscriptionTag>;
    private 'product_list'?: Array<Product>;
    public config?: OrderConfig;
    private 'period_type'?: OrderInfoReqPeriodTypeEnum | number;
    private 'period_num'?: OrderInfoReqPeriodNumEnum | number;
    private 'is_auto_renew'?: OrderInfoReqIsAutoRenewEnum | number;
    public constructor(scene?: string, operateType?: string) { 
        this['scene'] = scene;
        this['operate_type'] = operateType;
    }
    public withScene(scene: OrderInfoReqSceneEnum | string): OrderInfoReq {
        this['scene'] = scene;
        return this;
    }
    public withPromotionInfo(promotionInfo: string): OrderInfoReq {
        this['promotion_info'] = promotionInfo;
        return this;
    }
    public set promotionInfo(promotionInfo: string  | undefined) {
        this['promotion_info'] = promotionInfo;
    }
    public get promotionInfo(): string | undefined {
        return this['promotion_info'];
    }
    public withOperateType(operateType: OrderInfoReqOperateTypeEnum | string): OrderInfoReq {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: OrderInfoReqOperateTypeEnum | string  | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType(): OrderInfoReqOperateTypeEnum | string | undefined {
        return this['operate_type'];
    }
    public withTagList(tagList: Array<SubscriptionTag>): OrderInfoReq {
        this['tag_list'] = tagList;
        return this;
    }
    public set tagList(tagList: Array<SubscriptionTag>  | undefined) {
        this['tag_list'] = tagList;
    }
    public get tagList(): Array<SubscriptionTag> | undefined {
        return this['tag_list'];
    }
    public withProductList(productList: Array<Product>): OrderInfoReq {
        this['product_list'] = productList;
        return this;
    }
    public set productList(productList: Array<Product>  | undefined) {
        this['product_list'] = productList;
    }
    public get productList(): Array<Product> | undefined {
        return this['product_list'];
    }
    public withConfig(config: OrderConfig): OrderInfoReq {
        this['config'] = config;
        return this;
    }
    public withPeriodType(periodType: OrderInfoReqPeriodTypeEnum | number): OrderInfoReq {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: OrderInfoReqPeriodTypeEnum | number  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): OrderInfoReqPeriodTypeEnum | number | undefined {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: OrderInfoReqPeriodNumEnum | number): OrderInfoReq {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: OrderInfoReqPeriodNumEnum | number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): OrderInfoReqPeriodNumEnum | number | undefined {
        return this['period_num'];
    }
    public withIsAutoRenew(isAutoRenew: OrderInfoReqIsAutoRenewEnum | number): OrderInfoReq {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: OrderInfoReqIsAutoRenewEnum | number  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): OrderInfoReqIsAutoRenewEnum | number | undefined {
        return this['is_auto_renew'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OrderInfoReqSceneEnum {
    PREPAID = 'PREPAID',
    POSTPAID = 'POSTPAID',
    CONFIG = 'CONFIG'
}
/**
    * @export
    * @enum {string}
    */
export enum OrderInfoReqOperateTypeEnum {
    CREATE = 'CREATE',
    ALERT_CONFIG = 'ALERT_CONFIG'
}
/**
    * @export
    * @enum {string}
    */
export enum OrderInfoReqPeriodTypeEnum {
    NUMBER_2 = 2,
    NUMBER_3 = 3
}
/**
    * @export
    * @enum {string}
    */
export enum OrderInfoReqPeriodNumEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4,
    NUMBER_5 = 5,
    NUMBER_6 = 6,
    NUMBER_7 = 7,
    NUMBER_8 = 8,
    NUMBER_9 = 9
}
/**
    * @export
    * @enum {string}
    */
export enum OrderInfoReqIsAutoRenewEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
