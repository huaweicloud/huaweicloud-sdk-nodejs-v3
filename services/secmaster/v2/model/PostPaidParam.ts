import { ProductPostPaid } from './ProductPostPaid';
import { TagInfo } from './TagInfo';


export class PostPaidParam {
    private 'region_id'?: string;
    private 'domain_id'?: string;
    private 'tag_list'?: Array<TagInfo>;
    private 'product_list'?: Array<ProductPostPaid>;
    private 'operate_type'?: PostPaidParamOperateTypeEnum | string;
    public constructor(regionId?: string, domainId?: string) { 
        this['region_id'] = regionId;
        this['domain_id'] = domainId;
    }
    public withRegionId(regionId: string): PostPaidParam {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withDomainId(domainId: string): PostPaidParam {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withTagList(tagList: Array<TagInfo>): PostPaidParam {
        this['tag_list'] = tagList;
        return this;
    }
    public set tagList(tagList: Array<TagInfo>  | undefined) {
        this['tag_list'] = tagList;
    }
    public get tagList(): Array<TagInfo> | undefined {
        return this['tag_list'];
    }
    public withProductList(productList: Array<ProductPostPaid>): PostPaidParam {
        this['product_list'] = productList;
        return this;
    }
    public set productList(productList: Array<ProductPostPaid>  | undefined) {
        this['product_list'] = productList;
    }
    public get productList(): Array<ProductPostPaid> | undefined {
        return this['product_list'];
    }
    public withOperateType(operateType: PostPaidParamOperateTypeEnum | string): PostPaidParam {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: PostPaidParamOperateTypeEnum | string  | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType(): PostPaidParamOperateTypeEnum | string | undefined {
        return this['operate_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PostPaidParamOperateTypeEnum {
    CREATE = 'create',
    ADDITION = 'addition'
}
