import { ProductDelFailInfo } from './ProductDelFailInfo';


export class ProductGroupDelFailInfo {
    private 'group_id'?: string;
    private 'fail_reason'?: string;
    public products?: Array<ProductDelFailInfo>;
    public constructor() { 
    }
    public withGroupId(groupId: string): ProductGroupDelFailInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withFailReason(failReason: string): ProductGroupDelFailInfo {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
    public withProducts(products: Array<ProductDelFailInfo>): ProductGroupDelFailInfo {
        this['products'] = products;
        return this;
    }
}