

export class TemplateQuery {
    public category?: Array<string>;
    public keyword?: string;
    private 'sort_key'?: Array<string> | undefined;
    private 'sort_dir'?: Array<string> | undefined;
    public label?: TemplateQueryLabelEnum;
    private 'my_templates'?: boolean | undefined;
    public status?: number;
    private 'status_array'?: Array<number> | undefined;
    private 'has_notices'?: boolean | undefined;
    public productshorts?: Array<string>;
    public offset?: number;
    public limit?: number;
    private 'tag_ids'?: Array<string> | undefined;
    public types?: Array<number>;
    private 'is_static'?: number | undefined;
    private 'platform_source'?: Array<number> | undefined;
    private 'tag_names'?: Array<string> | undefined;
    public constructor() { 
    }
    public withCategory(category: Array<string>): TemplateQuery {
        this['category'] = category;
        return this;
    }
    public withKeyword(keyword: string): TemplateQuery {
        this['keyword'] = keyword;
        return this;
    }
    public withSortKey(sortKey: Array<string>): TemplateQuery {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: Array<string> | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey() {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<string>): TemplateQuery {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<string> | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir() {
        return this['sort_dir'];
    }
    public withLabel(label: TemplateQueryLabelEnum): TemplateQuery {
        this['label'] = label;
        return this;
    }
    public withMyTemplates(myTemplates: boolean): TemplateQuery {
        this['my_templates'] = myTemplates;
        return this;
    }
    public set myTemplates(myTemplates: boolean | undefined) {
        this['my_templates'] = myTemplates;
    }
    public get myTemplates() {
        return this['my_templates'];
    }
    public withStatus(status: number): TemplateQuery {
        this['status'] = status;
        return this;
    }
    public withStatusArray(statusArray: Array<number>): TemplateQuery {
        this['status_array'] = statusArray;
        return this;
    }
    public set statusArray(statusArray: Array<number> | undefined) {
        this['status_array'] = statusArray;
    }
    public get statusArray() {
        return this['status_array'];
    }
    public withHasNotices(hasNotices: boolean): TemplateQuery {
        this['has_notices'] = hasNotices;
        return this;
    }
    public set hasNotices(hasNotices: boolean | undefined) {
        this['has_notices'] = hasNotices;
    }
    public get hasNotices() {
        return this['has_notices'];
    }
    public withProductshorts(productshorts: Array<string>): TemplateQuery {
        this['productshorts'] = productshorts;
        return this;
    }
    public withOffset(offset: number): TemplateQuery {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): TemplateQuery {
        this['limit'] = limit;
        return this;
    }
    public withTagIds(tagIds: Array<string>): TemplateQuery {
        this['tag_ids'] = tagIds;
        return this;
    }
    public set tagIds(tagIds: Array<string> | undefined) {
        this['tag_ids'] = tagIds;
    }
    public get tagIds() {
        return this['tag_ids'];
    }
    public withTypes(types: Array<number>): TemplateQuery {
        this['types'] = types;
        return this;
    }
    public withIsStatic(isStatic: number): TemplateQuery {
        this['is_static'] = isStatic;
        return this;
    }
    public set isStatic(isStatic: number | undefined) {
        this['is_static'] = isStatic;
    }
    public get isStatic() {
        return this['is_static'];
    }
    public withPlatformSource(platformSource: Array<number>): TemplateQuery {
        this['platform_source'] = platformSource;
        return this;
    }
    public set platformSource(platformSource: Array<number> | undefined) {
        this['platform_source'] = platformSource;
    }
    public get platformSource() {
        return this['platform_source'];
    }
    public withTagNames(tagNames: Array<string>): TemplateQuery {
        this['tag_names'] = tagNames;
        return this;
    }
    public set tagNames(tagNames: Array<string> | undefined) {
        this['tag_names'] = tagNames;
    }
    public get tagNames() {
        return this['tag_names'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TemplateQueryLabelEnum {
    ALL = 'all',
    NEW = 'new',
    HOT = 'hot',
    RECOMMEND = 'recommend'
}
