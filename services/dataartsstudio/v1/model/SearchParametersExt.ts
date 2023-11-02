

export class SearchParametersExt {
    public attributes?: object;
    public classifications?: Array<string>;
    private 'connection_names'?: Array<string>;
    private 'exclude_classifications'?: boolean;
    private 'exclude_security_levels'?: boolean;
    private 'exclude_tags'?: boolean;
    private 'include_classification_attributes'?: boolean;
    private 'include_sub_classifications'?: boolean;
    public limit?: number;
    public offset?: number;
    public order?: string;
    public query?: string;
    private 'search_name_and_description'?: boolean;
    private 'security_levels'?: Array<string>;
    private 'term_names'?: Array<string>;
    private 'type_names'?: Array<string>;
    public constructor() { 
    }
    public withAttributes(attributes: object): SearchParametersExt {
        this['attributes'] = attributes;
        return this;
    }
    public withClassifications(classifications: Array<string>): SearchParametersExt {
        this['classifications'] = classifications;
        return this;
    }
    public withConnectionNames(connectionNames: Array<string>): SearchParametersExt {
        this['connection_names'] = connectionNames;
        return this;
    }
    public set connectionNames(connectionNames: Array<string>  | undefined) {
        this['connection_names'] = connectionNames;
    }
    public get connectionNames(): Array<string> | undefined {
        return this['connection_names'];
    }
    public withExcludeClassifications(excludeClassifications: boolean): SearchParametersExt {
        this['exclude_classifications'] = excludeClassifications;
        return this;
    }
    public set excludeClassifications(excludeClassifications: boolean  | undefined) {
        this['exclude_classifications'] = excludeClassifications;
    }
    public get excludeClassifications(): boolean | undefined {
        return this['exclude_classifications'];
    }
    public withExcludeSecurityLevels(excludeSecurityLevels: boolean): SearchParametersExt {
        this['exclude_security_levels'] = excludeSecurityLevels;
        return this;
    }
    public set excludeSecurityLevels(excludeSecurityLevels: boolean  | undefined) {
        this['exclude_security_levels'] = excludeSecurityLevels;
    }
    public get excludeSecurityLevels(): boolean | undefined {
        return this['exclude_security_levels'];
    }
    public withExcludeTags(excludeTags: boolean): SearchParametersExt {
        this['exclude_tags'] = excludeTags;
        return this;
    }
    public set excludeTags(excludeTags: boolean  | undefined) {
        this['exclude_tags'] = excludeTags;
    }
    public get excludeTags(): boolean | undefined {
        return this['exclude_tags'];
    }
    public withIncludeClassificationAttributes(includeClassificationAttributes: boolean): SearchParametersExt {
        this['include_classification_attributes'] = includeClassificationAttributes;
        return this;
    }
    public set includeClassificationAttributes(includeClassificationAttributes: boolean  | undefined) {
        this['include_classification_attributes'] = includeClassificationAttributes;
    }
    public get includeClassificationAttributes(): boolean | undefined {
        return this['include_classification_attributes'];
    }
    public withIncludeSubClassifications(includeSubClassifications: boolean): SearchParametersExt {
        this['include_sub_classifications'] = includeSubClassifications;
        return this;
    }
    public set includeSubClassifications(includeSubClassifications: boolean  | undefined) {
        this['include_sub_classifications'] = includeSubClassifications;
    }
    public get includeSubClassifications(): boolean | undefined {
        return this['include_sub_classifications'];
    }
    public withLimit(limit: number): SearchParametersExt {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): SearchParametersExt {
        this['offset'] = offset;
        return this;
    }
    public withOrder(order: string): SearchParametersExt {
        this['order'] = order;
        return this;
    }
    public withQuery(query: string): SearchParametersExt {
        this['query'] = query;
        return this;
    }
    public withSearchNameAndDescription(searchNameAndDescription: boolean): SearchParametersExt {
        this['search_name_and_description'] = searchNameAndDescription;
        return this;
    }
    public set searchNameAndDescription(searchNameAndDescription: boolean  | undefined) {
        this['search_name_and_description'] = searchNameAndDescription;
    }
    public get searchNameAndDescription(): boolean | undefined {
        return this['search_name_and_description'];
    }
    public withSecurityLevels(securityLevels: Array<string>): SearchParametersExt {
        this['security_levels'] = securityLevels;
        return this;
    }
    public set securityLevels(securityLevels: Array<string>  | undefined) {
        this['security_levels'] = securityLevels;
    }
    public get securityLevels(): Array<string> | undefined {
        return this['security_levels'];
    }
    public withTermNames(termNames: Array<string>): SearchParametersExt {
        this['term_names'] = termNames;
        return this;
    }
    public set termNames(termNames: Array<string>  | undefined) {
        this['term_names'] = termNames;
    }
    public get termNames(): Array<string> | undefined {
        return this['term_names'];
    }
    public withTypeNames(typeNames: Array<string>): SearchParametersExt {
        this['type_names'] = typeNames;
        return this;
    }
    public set typeNames(typeNames: Array<string>  | undefined) {
        this['type_names'] = typeNames;
    }
    public get typeNames(): Array<string> | undefined {
        return this['type_names'];
    }
}