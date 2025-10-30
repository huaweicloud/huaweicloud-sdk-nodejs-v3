import { MarketOptions } from './MarketOptions';
import { ProductInfo } from './ProductInfo';
import { StoragePoolStatus } from './StoragePoolStatus';


export class StoragePoolV2 {
    public id?: string;
    public name?: string;
    private 'edge_site_id'?: string;
    private 'storage_type'?: string;
    public status?: StoragePoolStatus;
    private 'assigned_size'?: number;
    private 'product_info'?: ProductInfo;
    public capacity?: number;
    private 'market_options'?: MarketOptions;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'parent_id'?: string;
    public constructor() { 
    }
    public withId(id: string): StoragePoolV2 {
        this['id'] = id;
        return this;
    }
    public withName(name: string): StoragePoolV2 {
        this['name'] = name;
        return this;
    }
    public withEdgeSiteId(edgeSiteId: string): StoragePoolV2 {
        this['edge_site_id'] = edgeSiteId;
        return this;
    }
    public set edgeSiteId(edgeSiteId: string  | undefined) {
        this['edge_site_id'] = edgeSiteId;
    }
    public get edgeSiteId(): string | undefined {
        return this['edge_site_id'];
    }
    public withStorageType(storageType: string): StoragePoolV2 {
        this['storage_type'] = storageType;
        return this;
    }
    public set storageType(storageType: string  | undefined) {
        this['storage_type'] = storageType;
    }
    public get storageType(): string | undefined {
        return this['storage_type'];
    }
    public withStatus(status: StoragePoolStatus): StoragePoolV2 {
        this['status'] = status;
        return this;
    }
    public withAssignedSize(assignedSize: number): StoragePoolV2 {
        this['assigned_size'] = assignedSize;
        return this;
    }
    public set assignedSize(assignedSize: number  | undefined) {
        this['assigned_size'] = assignedSize;
    }
    public get assignedSize(): number | undefined {
        return this['assigned_size'];
    }
    public withProductInfo(productInfo: ProductInfo): StoragePoolV2 {
        this['product_info'] = productInfo;
        return this;
    }
    public set productInfo(productInfo: ProductInfo  | undefined) {
        this['product_info'] = productInfo;
    }
    public get productInfo(): ProductInfo | undefined {
        return this['product_info'];
    }
    public withCapacity(capacity: number): StoragePoolV2 {
        this['capacity'] = capacity;
        return this;
    }
    public withMarketOptions(marketOptions: MarketOptions): StoragePoolV2 {
        this['market_options'] = marketOptions;
        return this;
    }
    public set marketOptions(marketOptions: MarketOptions  | undefined) {
        this['market_options'] = marketOptions;
    }
    public get marketOptions(): MarketOptions | undefined {
        return this['market_options'];
    }
    public withCreatedAt(createdAt: Date): StoragePoolV2 {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): StoragePoolV2 {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withParentId(parentId: string): StoragePoolV2 {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
}