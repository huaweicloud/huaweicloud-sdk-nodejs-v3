

export class BatchInquiryCommonInfo {
    private 'desktop_pool_id'?: string;
    private 'desktop_ids'?: Array<string>;
    private 'promotion_plan_id'?: string;
    private 'handle_type'?: BatchInquiryCommonInfoHandleTypeEnum | string;
    public constructor() { 
    }
    public withDesktopPoolId(desktopPoolId: string): BatchInquiryCommonInfo {
        this['desktop_pool_id'] = desktopPoolId;
        return this;
    }
    public set desktopPoolId(desktopPoolId: string  | undefined) {
        this['desktop_pool_id'] = desktopPoolId;
    }
    public get desktopPoolId(): string | undefined {
        return this['desktop_pool_id'];
    }
    public withDesktopIds(desktopIds: Array<string>): BatchInquiryCommonInfo {
        this['desktop_ids'] = desktopIds;
        return this;
    }
    public set desktopIds(desktopIds: Array<string>  | undefined) {
        this['desktop_ids'] = desktopIds;
    }
    public get desktopIds(): Array<string> | undefined {
        return this['desktop_ids'];
    }
    public withPromotionPlanId(promotionPlanId: string): BatchInquiryCommonInfo {
        this['promotion_plan_id'] = promotionPlanId;
        return this;
    }
    public set promotionPlanId(promotionPlanId: string  | undefined) {
        this['promotion_plan_id'] = promotionPlanId;
    }
    public get promotionPlanId(): string | undefined {
        return this['promotion_plan_id'];
    }
    public withHandleType(handleType: BatchInquiryCommonInfoHandleTypeEnum | string): BatchInquiryCommonInfo {
        this['handle_type'] = handleType;
        return this;
    }
    public set handleType(handleType: BatchInquiryCommonInfoHandleTypeEnum | string  | undefined) {
        this['handle_type'] = handleType;
    }
    public get handleType(): BatchInquiryCommonInfoHandleTypeEnum | string | undefined {
        return this['handle_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchInquiryCommonInfoHandleTypeEnum {
    ONLY_FOR_EXPAND = 'ONLY_FOR_EXPAND',
    FOR_EXPAND_AND_IDLE = 'FOR_EXPAND_AND_IDLE',
    FOR_EXPAND_AND_ALL = 'FOR_EXPAND_AND_ALL'
}
