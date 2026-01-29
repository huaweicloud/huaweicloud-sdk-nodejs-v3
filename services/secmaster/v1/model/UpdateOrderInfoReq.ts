import { SubscriptionTag } from './SubscriptionTag';
import { UpdateProduct } from './UpdateProduct';


export class UpdateOrderInfoReq {
    public scene?: UpdateOrderInfoReqSceneEnum | string;
    private 'operate_type'?: UpdateOrderInfoReqOperateTypeEnum | string;
    private 'promotion_info'?: string;
    private 'tag_list'?: Array<SubscriptionTag>;
    private 'product_list'?: Array<UpdateProduct>;
    public constructor(scene?: string, operateType?: string) { 
        this['scene'] = scene;
        this['operate_type'] = operateType;
    }
    public withScene(scene: UpdateOrderInfoReqSceneEnum | string): UpdateOrderInfoReq {
        this['scene'] = scene;
        return this;
    }
    public withOperateType(operateType: UpdateOrderInfoReqOperateTypeEnum | string): UpdateOrderInfoReq {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: UpdateOrderInfoReqOperateTypeEnum | string  | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType(): UpdateOrderInfoReqOperateTypeEnum | string | undefined {
        return this['operate_type'];
    }
    public withPromotionInfo(promotionInfo: string): UpdateOrderInfoReq {
        this['promotion_info'] = promotionInfo;
        return this;
    }
    public set promotionInfo(promotionInfo: string  | undefined) {
        this['promotion_info'] = promotionInfo;
    }
    public get promotionInfo(): string | undefined {
        return this['promotion_info'];
    }
    public withTagList(tagList: Array<SubscriptionTag>): UpdateOrderInfoReq {
        this['tag_list'] = tagList;
        return this;
    }
    public set tagList(tagList: Array<SubscriptionTag>  | undefined) {
        this['tag_list'] = tagList;
    }
    public get tagList(): Array<SubscriptionTag> | undefined {
        return this['tag_list'];
    }
    public withProductList(productList: Array<UpdateProduct>): UpdateOrderInfoReq {
        this['product_list'] = productList;
        return this;
    }
    public set productList(productList: Array<UpdateProduct>  | undefined) {
        this['product_list'] = productList;
    }
    public get productList(): Array<UpdateProduct> | undefined {
        return this['product_list'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateOrderInfoReqSceneEnum {
    PREPAID = 'PREPAID',
    POSTPAID = 'POSTPAID'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateOrderInfoReqOperateTypeEnum {
    UPGRADE = 'UPGRADE',
    ADDITION = 'ADDITION',
    DECREASE = 'DECREASE',
    POSTPAID_2_PREPAID = 'POSTPAID_2_PREPAID'
}
