import { CatalogueBatchPojo } from './CatalogueBatchPojo';


export class BatchCatalogueRequestPojo {
    private 'is_navigation'?: boolean;
    private 'is_card_area'?: boolean;
    private 'landing_page'?: string;
    private 'parent_alias_zh'?: string;
    private 'parent_alias_en'?: string;
    private 'parent_catalogue'?: string;
    private 'catalogue_infos'?: Array<CatalogueBatchPojo>;
    public constructor() { 
    }
    public withIsNavigation(isNavigation: boolean): BatchCatalogueRequestPojo {
        this['is_navigation'] = isNavigation;
        return this;
    }
    public set isNavigation(isNavigation: boolean  | undefined) {
        this['is_navigation'] = isNavigation;
    }
    public get isNavigation(): boolean | undefined {
        return this['is_navigation'];
    }
    public withIsCardArea(isCardArea: boolean): BatchCatalogueRequestPojo {
        this['is_card_area'] = isCardArea;
        return this;
    }
    public set isCardArea(isCardArea: boolean  | undefined) {
        this['is_card_area'] = isCardArea;
    }
    public get isCardArea(): boolean | undefined {
        return this['is_card_area'];
    }
    public withLandingPage(landingPage: string): BatchCatalogueRequestPojo {
        this['landing_page'] = landingPage;
        return this;
    }
    public set landingPage(landingPage: string  | undefined) {
        this['landing_page'] = landingPage;
    }
    public get landingPage(): string | undefined {
        return this['landing_page'];
    }
    public withParentAliasZh(parentAliasZh: string): BatchCatalogueRequestPojo {
        this['parent_alias_zh'] = parentAliasZh;
        return this;
    }
    public set parentAliasZh(parentAliasZh: string  | undefined) {
        this['parent_alias_zh'] = parentAliasZh;
    }
    public get parentAliasZh(): string | undefined {
        return this['parent_alias_zh'];
    }
    public withParentAliasEn(parentAliasEn: string): BatchCatalogueRequestPojo {
        this['parent_alias_en'] = parentAliasEn;
        return this;
    }
    public set parentAliasEn(parentAliasEn: string  | undefined) {
        this['parent_alias_en'] = parentAliasEn;
    }
    public get parentAliasEn(): string | undefined {
        return this['parent_alias_en'];
    }
    public withParentCatalogue(parentCatalogue: string): BatchCatalogueRequestPojo {
        this['parent_catalogue'] = parentCatalogue;
        return this;
    }
    public set parentCatalogue(parentCatalogue: string  | undefined) {
        this['parent_catalogue'] = parentCatalogue;
    }
    public get parentCatalogue(): string | undefined {
        return this['parent_catalogue'];
    }
    public withCatalogueInfos(catalogueInfos: Array<CatalogueBatchPojo>): BatchCatalogueRequestPojo {
        this['catalogue_infos'] = catalogueInfos;
        return this;
    }
    public set catalogueInfos(catalogueInfos: Array<CatalogueBatchPojo>  | undefined) {
        this['catalogue_infos'] = catalogueInfos;
    }
    public get catalogueInfos(): Array<CatalogueBatchPojo> | undefined {
        return this['catalogue_infos'];
    }
}