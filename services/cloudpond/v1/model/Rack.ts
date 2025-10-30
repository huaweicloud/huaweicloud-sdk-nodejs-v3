import { ComputeSpec } from './ComputeSpec';
import { MarketOptions } from './MarketOptions';
import { ProductInfo } from './ProductInfo';
import { RackInfo } from './RackInfo';
import { RackStatus } from './RackStatus';
import { StorageUnit } from './StorageUnit';


export class Rack {
    public id?: string;
    public name?: string;
    private 'edge_site_id'?: string;
    private 'rack_category_id'?: string;
    private 'rack_type'?: string;
    public status?: RackStatus;
    private 'storage_assigned_size'?: number;
    public description?: string;
    private 'rack_sn_no'?: string;
    private 'rack_location_no'?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'effected_at'?: Date;
    private 'market_options'?: MarketOptions;
    private 'compute_unit'?: Array<ComputeSpec>;
    private 'storage_unit'?: StorageUnit;
    private 'rack_info'?: RackInfo;
    private 'product_info'?: ProductInfo;
    public constructor() { 
    }
    public withId(id: string): Rack {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Rack {
        this['name'] = name;
        return this;
    }
    public withEdgeSiteId(edgeSiteId: string): Rack {
        this['edge_site_id'] = edgeSiteId;
        return this;
    }
    public set edgeSiteId(edgeSiteId: string  | undefined) {
        this['edge_site_id'] = edgeSiteId;
    }
    public get edgeSiteId(): string | undefined {
        return this['edge_site_id'];
    }
    public withRackCategoryId(rackCategoryId: string): Rack {
        this['rack_category_id'] = rackCategoryId;
        return this;
    }
    public set rackCategoryId(rackCategoryId: string  | undefined) {
        this['rack_category_id'] = rackCategoryId;
    }
    public get rackCategoryId(): string | undefined {
        return this['rack_category_id'];
    }
    public withRackType(rackType: string): Rack {
        this['rack_type'] = rackType;
        return this;
    }
    public set rackType(rackType: string  | undefined) {
        this['rack_type'] = rackType;
    }
    public get rackType(): string | undefined {
        return this['rack_type'];
    }
    public withStatus(status: RackStatus): Rack {
        this['status'] = status;
        return this;
    }
    public withStorageAssignedSize(storageAssignedSize: number): Rack {
        this['storage_assigned_size'] = storageAssignedSize;
        return this;
    }
    public set storageAssignedSize(storageAssignedSize: number  | undefined) {
        this['storage_assigned_size'] = storageAssignedSize;
    }
    public get storageAssignedSize(): number | undefined {
        return this['storage_assigned_size'];
    }
    public withDescription(description: string): Rack {
        this['description'] = description;
        return this;
    }
    public withRackSnNo(rackSnNo: string): Rack {
        this['rack_sn_no'] = rackSnNo;
        return this;
    }
    public set rackSnNo(rackSnNo: string  | undefined) {
        this['rack_sn_no'] = rackSnNo;
    }
    public get rackSnNo(): string | undefined {
        return this['rack_sn_no'];
    }
    public withRackLocationNo(rackLocationNo: string): Rack {
        this['rack_location_no'] = rackLocationNo;
        return this;
    }
    public set rackLocationNo(rackLocationNo: string  | undefined) {
        this['rack_location_no'] = rackLocationNo;
    }
    public get rackLocationNo(): string | undefined {
        return this['rack_location_no'];
    }
    public withCreatedAt(createdAt: Date): Rack {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): Rack {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withEffectedAt(effectedAt: Date): Rack {
        this['effected_at'] = effectedAt;
        return this;
    }
    public set effectedAt(effectedAt: Date  | undefined) {
        this['effected_at'] = effectedAt;
    }
    public get effectedAt(): Date | undefined {
        return this['effected_at'];
    }
    public withMarketOptions(marketOptions: MarketOptions): Rack {
        this['market_options'] = marketOptions;
        return this;
    }
    public set marketOptions(marketOptions: MarketOptions  | undefined) {
        this['market_options'] = marketOptions;
    }
    public get marketOptions(): MarketOptions | undefined {
        return this['market_options'];
    }
    public withComputeUnit(computeUnit: Array<ComputeSpec>): Rack {
        this['compute_unit'] = computeUnit;
        return this;
    }
    public set computeUnit(computeUnit: Array<ComputeSpec>  | undefined) {
        this['compute_unit'] = computeUnit;
    }
    public get computeUnit(): Array<ComputeSpec> | undefined {
        return this['compute_unit'];
    }
    public withStorageUnit(storageUnit: StorageUnit): Rack {
        this['storage_unit'] = storageUnit;
        return this;
    }
    public set storageUnit(storageUnit: StorageUnit  | undefined) {
        this['storage_unit'] = storageUnit;
    }
    public get storageUnit(): StorageUnit | undefined {
        return this['storage_unit'];
    }
    public withRackInfo(rackInfo: RackInfo): Rack {
        this['rack_info'] = rackInfo;
        return this;
    }
    public set rackInfo(rackInfo: RackInfo  | undefined) {
        this['rack_info'] = rackInfo;
    }
    public get rackInfo(): RackInfo | undefined {
        return this['rack_info'];
    }
    public withProductInfo(productInfo: ProductInfo): Rack {
        this['product_info'] = productInfo;
        return this;
    }
    public set productInfo(productInfo: ProductInfo  | undefined) {
        this['product_info'] = productInfo;
    }
    public get productInfo(): ProductInfo | undefined {
        return this['product_info'];
    }
}