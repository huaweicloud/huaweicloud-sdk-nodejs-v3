import { CbcProductInfoUpdate } from './CbcProductInfoUpdate';


export class CbcUpdate {
    public cloudServiceConsoleURL?: string;
    public productInfo: CbcProductInfoUpdate;
    public resourceId: string;
    private 'promotion_info'?: string | undefined;
    public constructor(productInfo?: any, resourceId?: any) { 
        this['productInfo'] = productInfo;
        this['resourceId'] = resourceId;
    }
    public withCloudServiceConsoleURL(cloudServiceConsoleURL: string): CbcUpdate {
        this['cloudServiceConsoleURL'] = cloudServiceConsoleURL;
        return this;
    }
    public withProductInfo(productInfo: CbcProductInfoUpdate): CbcUpdate {
        this['productInfo'] = productInfo;
        return this;
    }
    public withResourceId(resourceId: string): CbcUpdate {
        this['resourceId'] = resourceId;
        return this;
    }
    public withPromotionInfo(promotionInfo: string): CbcUpdate {
        this['promotion_info'] = promotionInfo;
        return this;
    }
    public set promotionInfo(promotionInfo: string | undefined) {
        this['promotion_info'] = promotionInfo;
    }
    public get promotionInfo() {
        return this['promotion_info'];
    }
}