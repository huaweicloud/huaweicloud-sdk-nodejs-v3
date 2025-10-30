import { MarketOptions } from './MarketOptions';
import { ProductInfo } from './ProductInfo';
import { StoragePoolStatus } from './StoragePoolStatus';
import { StorageType } from './StorageType';


export class StoragePool {
    public id?: string;
    public name?: string;
    private 'edge_site_id'?: string;
    private 'storage_type'?: StorageType;
    public status?: StoragePoolStatus;
    private 'assigned_size'?: number;
    private 'resource_spec_code'?: string;
    private 'product_info'?: ProductInfo;
    public capacity?: number;
    private 'market_options'?: MarketOptions;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'effected_at'?: Date;
    public constructor() { 
    }
    public withId(id: string): StoragePool {
        this['id'] = id;
        return this;
    }
    public withName(name: string): StoragePool {
        this['name'] = name;
        return this;
    }
    public withEdgeSiteId(edgeSiteId: string): StoragePool {
        this['edge_site_id'] = edgeSiteId;
        return this;
    }
    public set edgeSiteId(edgeSiteId: string  | undefined) {
        this['edge_site_id'] = edgeSiteId;
    }
    public get edgeSiteId(): string | undefined {
        return this['edge_site_id'];
    }
    public withStorageType(storageType: StorageType): StoragePool {
        this['storage_type'] = storageType;
        return this;
    }
    public set storageType(storageType: StorageType  | undefined) {
        this['storage_type'] = storageType;
    }
    public get storageType(): StorageType | undefined {
        return this['storage_type'];
    }
    public withStatus(status: StoragePoolStatus): StoragePool {
        this['status'] = status;
        return this;
    }
    public withAssignedSize(assignedSize: number): StoragePool {
        this['assigned_size'] = assignedSize;
        return this;
    }
    public set assignedSize(assignedSize: number  | undefined) {
        this['assigned_size'] = assignedSize;
    }
    public get assignedSize(): number | undefined {
        return this['assigned_size'];
    }
    public withResourceSpecCode(resourceSpecCode: string): StoragePool {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withProductInfo(productInfo: ProductInfo): StoragePool {
        this['product_info'] = productInfo;
        return this;
    }
    public set productInfo(productInfo: ProductInfo  | undefined) {
        this['product_info'] = productInfo;
    }
    public get productInfo(): ProductInfo | undefined {
        return this['product_info'];
    }
    public withCapacity(capacity: number): StoragePool {
        this['capacity'] = capacity;
        return this;
    }
    public withMarketOptions(marketOptions: MarketOptions): StoragePool {
        this['market_options'] = marketOptions;
        return this;
    }
    public set marketOptions(marketOptions: MarketOptions  | undefined) {
        this['market_options'] = marketOptions;
    }
    public get marketOptions(): MarketOptions | undefined {
        return this['market_options'];
    }
    public withCreatedAt(createdAt: Date): StoragePool {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): StoragePool {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withEffectedAt(effectedAt: Date): StoragePool {
        this['effected_at'] = effectedAt;
        return this;
    }
    public set effectedAt(effectedAt: Date  | undefined) {
        this['effected_at'] = effectedAt;
    }
    public get effectedAt(): Date | undefined {
        return this['effected_at'];
    }
}