import { ProductExtendResp } from './ProductExtendResp';
import { ProductVersionResp } from './ProductVersionResp';
import { ProductVolumeUsedResp } from './ProductVolumeUsedResp';


export class ProductUnitResp {
    public id?: string;
    public code?: string;
    private 'default_capacity'?: string;
    public classify?: string;
    public scenario?: string;
    public version?: string;
    public status?: string;
    public attribute?: Array<ProductExtendResp>;
    public duplicate?: number;
    private 'default_node'?: number;
    private 'min_node'?: number;
    private 'max_node'?: number;
    private 'product_version_list'?: Array<ProductVersionResp>;
    private 'flavor_id'?: string;
    private 'flavor_code'?: string;
    private 'volume_num'?: number;
    private 'volume_used'?: ProductVolumeUsedResp;
    public constructor() { 
    }
    public withId(id: string): ProductUnitResp {
        this['id'] = id;
        return this;
    }
    public withCode(code: string): ProductUnitResp {
        this['code'] = code;
        return this;
    }
    public withDefaultCapacity(defaultCapacity: string): ProductUnitResp {
        this['default_capacity'] = defaultCapacity;
        return this;
    }
    public set defaultCapacity(defaultCapacity: string  | undefined) {
        this['default_capacity'] = defaultCapacity;
    }
    public get defaultCapacity(): string | undefined {
        return this['default_capacity'];
    }
    public withClassify(classify: string): ProductUnitResp {
        this['classify'] = classify;
        return this;
    }
    public withScenario(scenario: string): ProductUnitResp {
        this['scenario'] = scenario;
        return this;
    }
    public withVersion(version: string): ProductUnitResp {
        this['version'] = version;
        return this;
    }
    public withStatus(status: string): ProductUnitResp {
        this['status'] = status;
        return this;
    }
    public withAttribute(attribute: Array<ProductExtendResp>): ProductUnitResp {
        this['attribute'] = attribute;
        return this;
    }
    public withDuplicate(duplicate: number): ProductUnitResp {
        this['duplicate'] = duplicate;
        return this;
    }
    public withDefaultNode(defaultNode: number): ProductUnitResp {
        this['default_node'] = defaultNode;
        return this;
    }
    public set defaultNode(defaultNode: number  | undefined) {
        this['default_node'] = defaultNode;
    }
    public get defaultNode(): number | undefined {
        return this['default_node'];
    }
    public withMinNode(minNode: number): ProductUnitResp {
        this['min_node'] = minNode;
        return this;
    }
    public set minNode(minNode: number  | undefined) {
        this['min_node'] = minNode;
    }
    public get minNode(): number | undefined {
        return this['min_node'];
    }
    public withMaxNode(maxNode: number): ProductUnitResp {
        this['max_node'] = maxNode;
        return this;
    }
    public set maxNode(maxNode: number  | undefined) {
        this['max_node'] = maxNode;
    }
    public get maxNode(): number | undefined {
        return this['max_node'];
    }
    public withProductVersionList(productVersionList: Array<ProductVersionResp>): ProductUnitResp {
        this['product_version_list'] = productVersionList;
        return this;
    }
    public set productVersionList(productVersionList: Array<ProductVersionResp>  | undefined) {
        this['product_version_list'] = productVersionList;
    }
    public get productVersionList(): Array<ProductVersionResp> | undefined {
        return this['product_version_list'];
    }
    public withFlavorId(flavorId: string): ProductUnitResp {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withFlavorCode(flavorCode: string): ProductUnitResp {
        this['flavor_code'] = flavorCode;
        return this;
    }
    public set flavorCode(flavorCode: string  | undefined) {
        this['flavor_code'] = flavorCode;
    }
    public get flavorCode(): string | undefined {
        return this['flavor_code'];
    }
    public withVolumeNum(volumeNum: number): ProductUnitResp {
        this['volume_num'] = volumeNum;
        return this;
    }
    public set volumeNum(volumeNum: number  | undefined) {
        this['volume_num'] = volumeNum;
    }
    public get volumeNum(): number | undefined {
        return this['volume_num'];
    }
    public withVolumeUsed(volumeUsed: ProductVolumeUsedResp): ProductUnitResp {
        this['volume_used'] = volumeUsed;
        return this;
    }
    public set volumeUsed(volumeUsed: ProductVolumeUsedResp  | undefined) {
        this['volume_used'] = volumeUsed;
    }
    public get volumeUsed(): ProductVolumeUsedResp | undefined {
        return this['volume_used'];
    }
}