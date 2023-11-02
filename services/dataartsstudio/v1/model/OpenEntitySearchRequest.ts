import { FilterCriteria } from './FilterCriteria';
import { TimeRange } from './TimeRange';


export class OpenEntitySearchRequest {
    public query?: string;
    private 'type_names'?: Array<string>;
    private 'connection_names'?: Array<string>;
    private 'search_all_attributes'?: boolean;
    public tags?: Array<string>;
    public limit?: number;
    public offset?: number;
    public attributes?: object;
    private 'filter_criteria'?: FilterCriteria;
    private 'time_range'?: TimeRange;
    private 'scroll_id'?: string;
    private 'security_levels'?: Array<string>;
    private 'is_import'?: boolean;
    public classifications?: Array<string>;
    public description?: string;
    public constructor(query?: string, typeNames?: Array<string>, limit?: number) { 
        this['query'] = query;
        this['type_names'] = typeNames;
        this['limit'] = limit;
    }
    public withQuery(query: string): OpenEntitySearchRequest {
        this['query'] = query;
        return this;
    }
    public withTypeNames(typeNames: Array<string>): OpenEntitySearchRequest {
        this['type_names'] = typeNames;
        return this;
    }
    public set typeNames(typeNames: Array<string>  | undefined) {
        this['type_names'] = typeNames;
    }
    public get typeNames(): Array<string> | undefined {
        return this['type_names'];
    }
    public withConnectionNames(connectionNames: Array<string>): OpenEntitySearchRequest {
        this['connection_names'] = connectionNames;
        return this;
    }
    public set connectionNames(connectionNames: Array<string>  | undefined) {
        this['connection_names'] = connectionNames;
    }
    public get connectionNames(): Array<string> | undefined {
        return this['connection_names'];
    }
    public withSearchAllAttributes(searchAllAttributes: boolean): OpenEntitySearchRequest {
        this['search_all_attributes'] = searchAllAttributes;
        return this;
    }
    public set searchAllAttributes(searchAllAttributes: boolean  | undefined) {
        this['search_all_attributes'] = searchAllAttributes;
    }
    public get searchAllAttributes(): boolean | undefined {
        return this['search_all_attributes'];
    }
    public withTags(tags: Array<string>): OpenEntitySearchRequest {
        this['tags'] = tags;
        return this;
    }
    public withLimit(limit: number): OpenEntitySearchRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): OpenEntitySearchRequest {
        this['offset'] = offset;
        return this;
    }
    public withAttributes(attributes: object): OpenEntitySearchRequest {
        this['attributes'] = attributes;
        return this;
    }
    public withFilterCriteria(filterCriteria: FilterCriteria): OpenEntitySearchRequest {
        this['filter_criteria'] = filterCriteria;
        return this;
    }
    public set filterCriteria(filterCriteria: FilterCriteria  | undefined) {
        this['filter_criteria'] = filterCriteria;
    }
    public get filterCriteria(): FilterCriteria | undefined {
        return this['filter_criteria'];
    }
    public withTimeRange(timeRange: TimeRange): OpenEntitySearchRequest {
        this['time_range'] = timeRange;
        return this;
    }
    public set timeRange(timeRange: TimeRange  | undefined) {
        this['time_range'] = timeRange;
    }
    public get timeRange(): TimeRange | undefined {
        return this['time_range'];
    }
    public withScrollId(scrollId: string): OpenEntitySearchRequest {
        this['scroll_id'] = scrollId;
        return this;
    }
    public set scrollId(scrollId: string  | undefined) {
        this['scroll_id'] = scrollId;
    }
    public get scrollId(): string | undefined {
        return this['scroll_id'];
    }
    public withSecurityLevels(securityLevels: Array<string>): OpenEntitySearchRequest {
        this['security_levels'] = securityLevels;
        return this;
    }
    public set securityLevels(securityLevels: Array<string>  | undefined) {
        this['security_levels'] = securityLevels;
    }
    public get securityLevels(): Array<string> | undefined {
        return this['security_levels'];
    }
    public withIsImport(isImport: boolean): OpenEntitySearchRequest {
        this['is_import'] = isImport;
        return this;
    }
    public set isImport(isImport: boolean  | undefined) {
        this['is_import'] = isImport;
    }
    public get isImport(): boolean | undefined {
        return this['is_import'];
    }
    public withClassifications(classifications: Array<string>): OpenEntitySearchRequest {
        this['classifications'] = classifications;
        return this;
    }
    public withDescription(description: string): OpenEntitySearchRequest {
        this['description'] = description;
        return this;
    }
}