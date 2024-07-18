import { ProductUrlInfo } from './ProductUrlInfo';


export class ProductGroupInfo {
    private 'group_id'?: string;
    public products?: Array<ProductUrlInfo>;
    public constructor() { 
    }
    public withGroupId(groupId: string): ProductGroupInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withProducts(products: Array<ProductUrlInfo>): ProductGroupInfo {
        this['products'] = products;
        return this;
    }
}