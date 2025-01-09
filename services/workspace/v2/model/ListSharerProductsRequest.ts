

export class ListSharerProductsRequest {
    private 'product_id'?: string;
    private 'share_space_size'?: string;
    private 'charge_mode'?: string;
    private 'is_gpu'?: number;
    private 'package_type'?: string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withProductId(productId: string): ListSharerProductsRequest {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withShareSpaceSize(shareSpaceSize: string): ListSharerProductsRequest {
        this['share_space_size'] = shareSpaceSize;
        return this;
    }
    public set shareSpaceSize(shareSpaceSize: string  | undefined) {
        this['share_space_size'] = shareSpaceSize;
    }
    public get shareSpaceSize(): string | undefined {
        return this['share_space_size'];
    }
    public withChargeMode(chargeMode: string): ListSharerProductsRequest {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
    }
    public withIsGpu(isGpu: number): ListSharerProductsRequest {
        this['is_gpu'] = isGpu;
        return this;
    }
    public set isGpu(isGpu: number  | undefined) {
        this['is_gpu'] = isGpu;
    }
    public get isGpu(): number | undefined {
        return this['is_gpu'];
    }
    public withPackageType(packageType: string): ListSharerProductsRequest {
        this['package_type'] = packageType;
        return this;
    }
    public set packageType(packageType: string  | undefined) {
        this['package_type'] = packageType;
    }
    public get packageType(): string | undefined {
        return this['package_type'];
    }
    public withLimit(limit: number): ListSharerProductsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSharerProductsRequest {
        this['offset'] = offset;
        return this;
    }
}