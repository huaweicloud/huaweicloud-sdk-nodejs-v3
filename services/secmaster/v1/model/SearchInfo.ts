

export class SearchInfo {
    private 'parent_catalogue'?: string;
    private 'second_catalogue'?: string;
    private 'catalogue_status'?: boolean;
    private 'catalogue_type'?: string;
    private 'layout_name'?: string;
    private 'publisher_name'?: string;
    private 'analysis_version'?: string;
    public constructor() { 
    }
    public withParentCatalogue(parentCatalogue: string): SearchInfo {
        this['parent_catalogue'] = parentCatalogue;
        return this;
    }
    public set parentCatalogue(parentCatalogue: string  | undefined) {
        this['parent_catalogue'] = parentCatalogue;
    }
    public get parentCatalogue(): string | undefined {
        return this['parent_catalogue'];
    }
    public withSecondCatalogue(secondCatalogue: string): SearchInfo {
        this['second_catalogue'] = secondCatalogue;
        return this;
    }
    public set secondCatalogue(secondCatalogue: string  | undefined) {
        this['second_catalogue'] = secondCatalogue;
    }
    public get secondCatalogue(): string | undefined {
        return this['second_catalogue'];
    }
    public withCatalogueStatus(catalogueStatus: boolean): SearchInfo {
        this['catalogue_status'] = catalogueStatus;
        return this;
    }
    public set catalogueStatus(catalogueStatus: boolean  | undefined) {
        this['catalogue_status'] = catalogueStatus;
    }
    public get catalogueStatus(): boolean | undefined {
        return this['catalogue_status'];
    }
    public withCatalogueType(catalogueType: string): SearchInfo {
        this['catalogue_type'] = catalogueType;
        return this;
    }
    public set catalogueType(catalogueType: string  | undefined) {
        this['catalogue_type'] = catalogueType;
    }
    public get catalogueType(): string | undefined {
        return this['catalogue_type'];
    }
    public withLayoutName(layoutName: string): SearchInfo {
        this['layout_name'] = layoutName;
        return this;
    }
    public set layoutName(layoutName: string  | undefined) {
        this['layout_name'] = layoutName;
    }
    public get layoutName(): string | undefined {
        return this['layout_name'];
    }
    public withPublisherName(publisherName: string): SearchInfo {
        this['publisher_name'] = publisherName;
        return this;
    }
    public set publisherName(publisherName: string  | undefined) {
        this['publisher_name'] = publisherName;
    }
    public get publisherName(): string | undefined {
        return this['publisher_name'];
    }
    public withAnalysisVersion(analysisVersion: string): SearchInfo {
        this['analysis_version'] = analysisVersion;
        return this;
    }
    public set analysisVersion(analysisVersion: string  | undefined) {
        this['analysis_version'] = analysisVersion;
    }
    public get analysisVersion(): string | undefined {
        return this['analysis_version'];
    }
}