

export class CatalogueUpdateRequestPojo {
    private 'parent_alias_en'?: string;
    private 'parent_alias_zh'?: string;
    private 'second_catalogue'?: string;
    private 'second_alias_en'?: string;
    private 'second_alias_zh'?: string;
    private 'layout_id'?: string;
    private 'layout_name'?: string;
    private 'catalogue_address'?: string;
    private 'publisher_name'?: string;
    public constructor(parentAliasEn?: string, parentAliasZh?: string, secondCatalogue?: string, secondAliasEn?: string, secondAliasZh?: string, layoutId?: string, catalogueAddress?: string) { 
        this['parent_alias_en'] = parentAliasEn;
        this['parent_alias_zh'] = parentAliasZh;
        this['second_catalogue'] = secondCatalogue;
        this['second_alias_en'] = secondAliasEn;
        this['second_alias_zh'] = secondAliasZh;
        this['layout_id'] = layoutId;
        this['catalogue_address'] = catalogueAddress;
    }
    public withParentAliasEn(parentAliasEn: string): CatalogueUpdateRequestPojo {
        this['parent_alias_en'] = parentAliasEn;
        return this;
    }
    public set parentAliasEn(parentAliasEn: string  | undefined) {
        this['parent_alias_en'] = parentAliasEn;
    }
    public get parentAliasEn(): string | undefined {
        return this['parent_alias_en'];
    }
    public withParentAliasZh(parentAliasZh: string): CatalogueUpdateRequestPojo {
        this['parent_alias_zh'] = parentAliasZh;
        return this;
    }
    public set parentAliasZh(parentAliasZh: string  | undefined) {
        this['parent_alias_zh'] = parentAliasZh;
    }
    public get parentAliasZh(): string | undefined {
        return this['parent_alias_zh'];
    }
    public withSecondCatalogue(secondCatalogue: string): CatalogueUpdateRequestPojo {
        this['second_catalogue'] = secondCatalogue;
        return this;
    }
    public set secondCatalogue(secondCatalogue: string  | undefined) {
        this['second_catalogue'] = secondCatalogue;
    }
    public get secondCatalogue(): string | undefined {
        return this['second_catalogue'];
    }
    public withSecondAliasEn(secondAliasEn: string): CatalogueUpdateRequestPojo {
        this['second_alias_en'] = secondAliasEn;
        return this;
    }
    public set secondAliasEn(secondAliasEn: string  | undefined) {
        this['second_alias_en'] = secondAliasEn;
    }
    public get secondAliasEn(): string | undefined {
        return this['second_alias_en'];
    }
    public withSecondAliasZh(secondAliasZh: string): CatalogueUpdateRequestPojo {
        this['second_alias_zh'] = secondAliasZh;
        return this;
    }
    public set secondAliasZh(secondAliasZh: string  | undefined) {
        this['second_alias_zh'] = secondAliasZh;
    }
    public get secondAliasZh(): string | undefined {
        return this['second_alias_zh'];
    }
    public withLayoutId(layoutId: string): CatalogueUpdateRequestPojo {
        this['layout_id'] = layoutId;
        return this;
    }
    public set layoutId(layoutId: string  | undefined) {
        this['layout_id'] = layoutId;
    }
    public get layoutId(): string | undefined {
        return this['layout_id'];
    }
    public withLayoutName(layoutName: string): CatalogueUpdateRequestPojo {
        this['layout_name'] = layoutName;
        return this;
    }
    public set layoutName(layoutName: string  | undefined) {
        this['layout_name'] = layoutName;
    }
    public get layoutName(): string | undefined {
        return this['layout_name'];
    }
    public withCatalogueAddress(catalogueAddress: string): CatalogueUpdateRequestPojo {
        this['catalogue_address'] = catalogueAddress;
        return this;
    }
    public set catalogueAddress(catalogueAddress: string  | undefined) {
        this['catalogue_address'] = catalogueAddress;
    }
    public get catalogueAddress(): string | undefined {
        return this['catalogue_address'];
    }
    public withPublisherName(publisherName: string): CatalogueUpdateRequestPojo {
        this['publisher_name'] = publisherName;
        return this;
    }
    public set publisherName(publisherName: string  | undefined) {
        this['publisher_name'] = publisherName;
    }
    public get publisherName(): string | undefined {
        return this['publisher_name'];
    }
}