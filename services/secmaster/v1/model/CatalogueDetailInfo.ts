

export class CatalogueDetailInfo {
    public id?: string;
    private 'parent_catalogue'?: string;
    private 'second_catalogue'?: string;
    private 'catalogue_status'?: boolean;
    private 'catalogue_address'?: string;
    private 'layout_id'?: string;
    private 'layout_name'?: string;
    private 'publisher_name'?: string;
    private 'is_card_area'?: boolean;
    private 'is_display'?: boolean;
    private 'is_landing_page'?: boolean;
    private 'is_navigation'?: boolean;
    private 'parent_alias_en'?: string;
    private 'parent_alias_zh'?: string;
    private 'second_alias_en'?: string;
    private 'second_alias_zh'?: string;
    public constructor() { 
    }
    public withId(id: string): CatalogueDetailInfo {
        this['id'] = id;
        return this;
    }
    public withParentCatalogue(parentCatalogue: string): CatalogueDetailInfo {
        this['parent_catalogue'] = parentCatalogue;
        return this;
    }
    public set parentCatalogue(parentCatalogue: string  | undefined) {
        this['parent_catalogue'] = parentCatalogue;
    }
    public get parentCatalogue(): string | undefined {
        return this['parent_catalogue'];
    }
    public withSecondCatalogue(secondCatalogue: string): CatalogueDetailInfo {
        this['second_catalogue'] = secondCatalogue;
        return this;
    }
    public set secondCatalogue(secondCatalogue: string  | undefined) {
        this['second_catalogue'] = secondCatalogue;
    }
    public get secondCatalogue(): string | undefined {
        return this['second_catalogue'];
    }
    public withCatalogueStatus(catalogueStatus: boolean): CatalogueDetailInfo {
        this['catalogue_status'] = catalogueStatus;
        return this;
    }
    public set catalogueStatus(catalogueStatus: boolean  | undefined) {
        this['catalogue_status'] = catalogueStatus;
    }
    public get catalogueStatus(): boolean | undefined {
        return this['catalogue_status'];
    }
    public withCatalogueAddress(catalogueAddress: string): CatalogueDetailInfo {
        this['catalogue_address'] = catalogueAddress;
        return this;
    }
    public set catalogueAddress(catalogueAddress: string  | undefined) {
        this['catalogue_address'] = catalogueAddress;
    }
    public get catalogueAddress(): string | undefined {
        return this['catalogue_address'];
    }
    public withLayoutId(layoutId: string): CatalogueDetailInfo {
        this['layout_id'] = layoutId;
        return this;
    }
    public set layoutId(layoutId: string  | undefined) {
        this['layout_id'] = layoutId;
    }
    public get layoutId(): string | undefined {
        return this['layout_id'];
    }
    public withLayoutName(layoutName: string): CatalogueDetailInfo {
        this['layout_name'] = layoutName;
        return this;
    }
    public set layoutName(layoutName: string  | undefined) {
        this['layout_name'] = layoutName;
    }
    public get layoutName(): string | undefined {
        return this['layout_name'];
    }
    public withPublisherName(publisherName: string): CatalogueDetailInfo {
        this['publisher_name'] = publisherName;
        return this;
    }
    public set publisherName(publisherName: string  | undefined) {
        this['publisher_name'] = publisherName;
    }
    public get publisherName(): string | undefined {
        return this['publisher_name'];
    }
    public withIsCardArea(isCardArea: boolean): CatalogueDetailInfo {
        this['is_card_area'] = isCardArea;
        return this;
    }
    public set isCardArea(isCardArea: boolean  | undefined) {
        this['is_card_area'] = isCardArea;
    }
    public get isCardArea(): boolean | undefined {
        return this['is_card_area'];
    }
    public withIsDisplay(isDisplay: boolean): CatalogueDetailInfo {
        this['is_display'] = isDisplay;
        return this;
    }
    public set isDisplay(isDisplay: boolean  | undefined) {
        this['is_display'] = isDisplay;
    }
    public get isDisplay(): boolean | undefined {
        return this['is_display'];
    }
    public withIsLandingPage(isLandingPage: boolean): CatalogueDetailInfo {
        this['is_landing_page'] = isLandingPage;
        return this;
    }
    public set isLandingPage(isLandingPage: boolean  | undefined) {
        this['is_landing_page'] = isLandingPage;
    }
    public get isLandingPage(): boolean | undefined {
        return this['is_landing_page'];
    }
    public withIsNavigation(isNavigation: boolean): CatalogueDetailInfo {
        this['is_navigation'] = isNavigation;
        return this;
    }
    public set isNavigation(isNavigation: boolean  | undefined) {
        this['is_navigation'] = isNavigation;
    }
    public get isNavigation(): boolean | undefined {
        return this['is_navigation'];
    }
    public withParentAliasEn(parentAliasEn: string): CatalogueDetailInfo {
        this['parent_alias_en'] = parentAliasEn;
        return this;
    }
    public set parentAliasEn(parentAliasEn: string  | undefined) {
        this['parent_alias_en'] = parentAliasEn;
    }
    public get parentAliasEn(): string | undefined {
        return this['parent_alias_en'];
    }
    public withParentAliasZh(parentAliasZh: string): CatalogueDetailInfo {
        this['parent_alias_zh'] = parentAliasZh;
        return this;
    }
    public set parentAliasZh(parentAliasZh: string  | undefined) {
        this['parent_alias_zh'] = parentAliasZh;
    }
    public get parentAliasZh(): string | undefined {
        return this['parent_alias_zh'];
    }
    public withSecondAliasEn(secondAliasEn: string): CatalogueDetailInfo {
        this['second_alias_en'] = secondAliasEn;
        return this;
    }
    public set secondAliasEn(secondAliasEn: string  | undefined) {
        this['second_alias_en'] = secondAliasEn;
    }
    public get secondAliasEn(): string | undefined {
        return this['second_alias_en'];
    }
    public withSecondAliasZh(secondAliasZh: string): CatalogueDetailInfo {
        this['second_alias_zh'] = secondAliasZh;
        return this;
    }
    public set secondAliasZh(secondAliasZh: string  | undefined) {
        this['second_alias_zh'] = secondAliasZh;
    }
    public get secondAliasZh(): string | undefined {
        return this['second_alias_zh'];
    }
}