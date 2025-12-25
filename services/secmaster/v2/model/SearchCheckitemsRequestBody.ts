import { SearchCheckitemsRequestBodyCondition } from './SearchCheckitemsRequestBodyCondition';


export class SearchCheckitemsRequestBody {
    private 'catalog_uuid'?: string;
    private 'compliance_package_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'sort_by'?: string;
    public order?: string;
    public name?: string;
    public suggestion?: string;
    public type?: number;
    private 'source_list'?: Array<number>;
    public condition?: SearchCheckitemsRequestBodyCondition;
    private 'query_mode'?: string;
    public severity?: string;
    public constructor() { 
    }
    public withCatalogUuid(catalogUuid: string): SearchCheckitemsRequestBody {
        this['catalog_uuid'] = catalogUuid;
        return this;
    }
    public set catalogUuid(catalogUuid: string  | undefined) {
        this['catalog_uuid'] = catalogUuid;
    }
    public get catalogUuid(): string | undefined {
        return this['catalog_uuid'];
    }
    public withCompliancePackageId(compliancePackageId: string): SearchCheckitemsRequestBody {
        this['compliance_package_id'] = compliancePackageId;
        return this;
    }
    public set compliancePackageId(compliancePackageId: string  | undefined) {
        this['compliance_package_id'] = compliancePackageId;
    }
    public get compliancePackageId(): string | undefined {
        return this['compliance_package_id'];
    }
    public withLimit(limit: number): SearchCheckitemsRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): SearchCheckitemsRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withSortBy(sortBy: string): SearchCheckitemsRequestBody {
        this['sort_by'] = sortBy;
        return this;
    }
    public set sortBy(sortBy: string  | undefined) {
        this['sort_by'] = sortBy;
    }
    public get sortBy(): string | undefined {
        return this['sort_by'];
    }
    public withOrder(order: string): SearchCheckitemsRequestBody {
        this['order'] = order;
        return this;
    }
    public withName(name: string): SearchCheckitemsRequestBody {
        this['name'] = name;
        return this;
    }
    public withSuggestion(suggestion: string): SearchCheckitemsRequestBody {
        this['suggestion'] = suggestion;
        return this;
    }
    public withType(type: number): SearchCheckitemsRequestBody {
        this['type'] = type;
        return this;
    }
    public withSourceList(sourceList: Array<number>): SearchCheckitemsRequestBody {
        this['source_list'] = sourceList;
        return this;
    }
    public set sourceList(sourceList: Array<number>  | undefined) {
        this['source_list'] = sourceList;
    }
    public get sourceList(): Array<number> | undefined {
        return this['source_list'];
    }
    public withCondition(condition: SearchCheckitemsRequestBodyCondition): SearchCheckitemsRequestBody {
        this['condition'] = condition;
        return this;
    }
    public withQueryMode(queryMode: string): SearchCheckitemsRequestBody {
        this['query_mode'] = queryMode;
        return this;
    }
    public set queryMode(queryMode: string  | undefined) {
        this['query_mode'] = queryMode;
    }
    public get queryMode(): string | undefined {
        return this['query_mode'];
    }
    public withSeverity(severity: string): SearchCheckitemsRequestBody {
        this['severity'] = severity;
        return this;
    }
}