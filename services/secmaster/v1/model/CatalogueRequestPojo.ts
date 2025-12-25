

export class CatalogueRequestPojo {
    private 'parent_catalogue'?: string;
    private 'parent_alias_en'?: string;
    private 'parent_alias_zh'?: string;
    private 'second_catalogue'?: string;
    private 'second_alias_en'?: string;
    private 'second_alias_zh'?: string;
    private 'second_catalogue_code'?: string;
    private 'layout_id'?: string;
    private 'layout_name'?: string;
    private 'catalogue_address'?: string;
    private 'publisher_name'?: string;
    public constructor(parentCatalogue?: string, parentAliasEn?: string, parentAliasZh?: string, secondCatalogue?: string, secondAliasEn?: string, secondAliasZh?: string, secondCatalogueCode?: string, layoutId?: string, catalogueAddress?: string) { 
        this['parent_catalogue'] = parentCatalogue;
        this['parent_alias_en'] = parentAliasEn;
        this['parent_alias_zh'] = parentAliasZh;
        this['second_catalogue'] = secondCatalogue;
        this['second_alias_en'] = secondAliasEn;
        this['second_alias_zh'] = secondAliasZh;
        this['second_catalogue_code'] = secondCatalogueCode;
        this['layout_id'] = layoutId;
        this['catalogue_address'] = catalogueAddress;
    }
    public withParentCatalogue(parentCatalogue: string): CatalogueRequestPojo {
        this['parent_catalogue'] = parentCatalogue;
        return this;
    }
    public set parentCatalogue(parentCatalogue: string  | undefined) {
        this['parent_catalogue'] = parentCatalogue;
    }
    public get parentCatalogue(): string | undefined {
        return this['parent_catalogue'];
    }
    public withParentAliasEn(parentAliasEn: string): CatalogueRequestPojo {
        this['parent_alias_en'] = parentAliasEn;
        return this;
    }
    public set parentAliasEn(parentAliasEn: string  | undefined) {
        this['parent_alias_en'] = parentAliasEn;
    }
    public get parentAliasEn(): string | undefined {
        return this['parent_alias_en'];
    }
    public withParentAliasZh(parentAliasZh: string): CatalogueRequestPojo {
        this['parent_alias_zh'] = parentAliasZh;
        return this;
    }
    public set parentAliasZh(parentAliasZh: string  | undefined) {
        this['parent_alias_zh'] = parentAliasZh;
    }
    public get parentAliasZh(): string | undefined {
        return this['parent_alias_zh'];
    }
    public withSecondCatalogue(secondCatalogue: string): CatalogueRequestPojo {
        this['second_catalogue'] = secondCatalogue;
        return this;
    }
    public set secondCatalogue(secondCatalogue: string  | undefined) {
        this['second_catalogue'] = secondCatalogue;
    }
    public get secondCatalogue(): string | undefined {
        return this['second_catalogue'];
    }
    public withSecondAliasEn(secondAliasEn: string): CatalogueRequestPojo {
        this['second_alias_en'] = secondAliasEn;
        return this;
    }
    public set secondAliasEn(secondAliasEn: string  | undefined) {
        this['second_alias_en'] = secondAliasEn;
    }
    public get secondAliasEn(): string | undefined {
        return this['second_alias_en'];
    }
    public withSecondAliasZh(secondAliasZh: string): CatalogueRequestPojo {
        this['second_alias_zh'] = secondAliasZh;
        return this;
    }
    public set secondAliasZh(secondAliasZh: string  | undefined) {
        this['second_alias_zh'] = secondAliasZh;
    }
    public get secondAliasZh(): string | undefined {
        return this['second_alias_zh'];
    }
    public withSecondCatalogueCode(secondCatalogueCode: string): CatalogueRequestPojo {
        this['second_catalogue_code'] = secondCatalogueCode;
        return this;
    }
    public set secondCatalogueCode(secondCatalogueCode: string  | undefined) {
        this['second_catalogue_code'] = secondCatalogueCode;
    }
    public get secondCatalogueCode(): string | undefined {
        return this['second_catalogue_code'];
    }
    public withLayoutId(layoutId: string): CatalogueRequestPojo {
        this['layout_id'] = layoutId;
        return this;
    }
    public set layoutId(layoutId: string  | undefined) {
        this['layout_id'] = layoutId;
    }
    public get layoutId(): string | undefined {
        return this['layout_id'];
    }
    public withLayoutName(layoutName: string): CatalogueRequestPojo {
        this['layout_name'] = layoutName;
        return this;
    }
    public set layoutName(layoutName: string  | undefined) {
        this['layout_name'] = layoutName;
    }
    public get layoutName(): string | undefined {
        return this['layout_name'];
    }
    public withCatalogueAddress(catalogueAddress: string): CatalogueRequestPojo {
        this['catalogue_address'] = catalogueAddress;
        return this;
    }
    public set catalogueAddress(catalogueAddress: string  | undefined) {
        this['catalogue_address'] = catalogueAddress;
    }
    public get catalogueAddress(): string | undefined {
        return this['catalogue_address'];
    }
    public withPublisherName(publisherName: string): CatalogueRequestPojo {
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