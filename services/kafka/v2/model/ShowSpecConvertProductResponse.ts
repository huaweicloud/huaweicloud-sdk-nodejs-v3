
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSpecConvertProductResponse extends SdkResponse {
    private 'product_id'?: string;
    public constructor() { 
        super();
    }
    public withProductId(productId: string): ShowSpecConvertProductResponse {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
}