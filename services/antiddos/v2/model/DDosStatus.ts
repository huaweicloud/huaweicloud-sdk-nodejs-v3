

export class DDosStatus {
    private 'floating_ip_id'?: string;
    private 'floating_ip_address'?: string;
    private 'product_type'?: string;
    public status?: string;
    private 'clean_threshold'?: number;
    private 'block_threshold'?: string;
    public constructor(floatingIpId?: string, floatingIpAddress?: string, productType?: string, status?: string, cleanThreshold?: number, blockThreshold?: string) { 
        this['floating_ip_id'] = floatingIpId;
        this['floating_ip_address'] = floatingIpAddress;
        this['product_type'] = productType;
        this['status'] = status;
        this['clean_threshold'] = cleanThreshold;
        this['block_threshold'] = blockThreshold;
    }
    public withFloatingIpId(floatingIpId: string): DDosStatus {
        this['floating_ip_id'] = floatingIpId;
        return this;
    }
    public set floatingIpId(floatingIpId: string  | undefined) {
        this['floating_ip_id'] = floatingIpId;
    }
    public get floatingIpId(): string | undefined {
        return this['floating_ip_id'];
    }
    public withFloatingIpAddress(floatingIpAddress: string): DDosStatus {
        this['floating_ip_address'] = floatingIpAddress;
        return this;
    }
    public set floatingIpAddress(floatingIpAddress: string  | undefined) {
        this['floating_ip_address'] = floatingIpAddress;
    }
    public get floatingIpAddress(): string | undefined {
        return this['floating_ip_address'];
    }
    public withProductType(productType: string): DDosStatus {
        this['product_type'] = productType;
        return this;
    }
    public set productType(productType: string  | undefined) {
        this['product_type'] = productType;
    }
    public get productType(): string | undefined {
        return this['product_type'];
    }
    public withStatus(status: string): DDosStatus {
        this['status'] = status;
        return this;
    }
    public withCleanThreshold(cleanThreshold: number): DDosStatus {
        this['clean_threshold'] = cleanThreshold;
        return this;
    }
    public set cleanThreshold(cleanThreshold: number  | undefined) {
        this['clean_threshold'] = cleanThreshold;
    }
    public get cleanThreshold(): number | undefined {
        return this['clean_threshold'];
    }
    public withBlockThreshold(blockThreshold: string): DDosStatus {
        this['block_threshold'] = blockThreshold;
        return this;
    }
    public set blockThreshold(blockThreshold: string  | undefined) {
        this['block_threshold'] = blockThreshold;
    }
    public get blockThreshold(): string | undefined {
        return this['block_threshold'];
    }
}