import { CbcProductInfoOrderChange } from './CbcProductInfoOrderChange';


export class CbcOrderChange {
    private 'cloud_service_console_url'?: string;
    private 'product_info'?: CbcProductInfoOrderChange;
    private 'resource_id'?: string;
    private 'is_auto_pay'?: boolean;
    private 'promotion_info'?: string;
    public constructor(productInfo?: CbcProductInfoOrderChange, resourceId?: string) { 
        this['product_info'] = productInfo;
        this['resource_id'] = resourceId;
    }
    public withCloudServiceConsoleUrl(cloudServiceConsoleUrl: string): CbcOrderChange {
        this['cloud_service_console_url'] = cloudServiceConsoleUrl;
        return this;
    }
    public set cloudServiceConsoleUrl(cloudServiceConsoleUrl: string  | undefined) {
        this['cloud_service_console_url'] = cloudServiceConsoleUrl;
    }
    public get cloudServiceConsoleUrl(): string | undefined {
        return this['cloud_service_console_url'];
    }
    public withProductInfo(productInfo: CbcProductInfoOrderChange): CbcOrderChange {
        this['product_info'] = productInfo;
        return this;
    }
    public set productInfo(productInfo: CbcProductInfoOrderChange  | undefined) {
        this['product_info'] = productInfo;
    }
    public get productInfo(): CbcProductInfoOrderChange | undefined {
        return this['product_info'];
    }
    public withResourceId(resourceId: string): CbcOrderChange {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withIsAutoPay(isAutoPay: boolean): CbcOrderChange {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: boolean  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): boolean | undefined {
        return this['is_auto_pay'];
    }
    public withPromotionInfo(promotionInfo: string): CbcOrderChange {
        this['promotion_info'] = promotionInfo;
        return this;
    }
    public set promotionInfo(promotionInfo: string  | undefined) {
        this['promotion_info'] = promotionInfo;
    }
    public get promotionInfo(): string | undefined {
        return this['promotion_info'];
    }
}