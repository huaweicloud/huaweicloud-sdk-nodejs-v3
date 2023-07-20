

export class TemplateQueryV2 {
    public category?: Array<string>;
    public keyword?: string;
    private 'sort_by'?: string;
    public label?: string;
    private 'my_templates'?: boolean;
    public status?: number;
    private 'status_array'?: Array<number>;
    private 'has_notices'?: boolean;
    public productshorts?: Array<string>;
    public offset?: number;
    public limit?: number;
    private 'tag_ids'?: Array<string>;
    public types?: Array<number>;
    private 'is_static'?: number;
    private 'platform_source'?: Array<number>;
    private 'tag_names'?: Array<string>;
    public constructor() { 
    }
    public withCategory(category: Array<string>): TemplateQueryV2 {
        this['category'] = category;
        return this;
    }
    public withKeyword(keyword: string): TemplateQueryV2 {
        this['keyword'] = keyword;
        return this;
    }
    public withSortBy(sortBy: string): TemplateQueryV2 {
        this['sort_by'] = sortBy;
        return this;
    }
    public set sortBy(sortBy: string  | undefined) {
        this['sort_by'] = sortBy;
    }
    public get sortBy(): string | undefined {
        return this['sort_by'];
    }
    public withLabel(label: string): TemplateQueryV2 {
        this['label'] = label;
        return this;
    }
    public withMyTemplates(myTemplates: boolean): TemplateQueryV2 {
        this['my_templates'] = myTemplates;
        return this;
    }
    public set myTemplates(myTemplates: boolean  | undefined) {
        this['my_templates'] = myTemplates;
    }
    public get myTemplates(): boolean | undefined {
        return this['my_templates'];
    }
    public withStatus(status: number): TemplateQueryV2 {
        this['status'] = status;
        return this;
    }
    public withStatusArray(statusArray: Array<number>): TemplateQueryV2 {
        this['status_array'] = statusArray;
        return this;
    }
    public set statusArray(statusArray: Array<number>  | undefined) {
        this['status_array'] = statusArray;
    }
    public get statusArray(): Array<number> | undefined {
        return this['status_array'];
    }
    public withHasNotices(hasNotices: boolean): TemplateQueryV2 {
        this['has_notices'] = hasNotices;
        return this;
    }
    public set hasNotices(hasNotices: boolean  | undefined) {
        this['has_notices'] = hasNotices;
    }
    public get hasNotices(): boolean | undefined {
        return this['has_notices'];
    }
    public withProductshorts(productshorts: Array<string>): TemplateQueryV2 {
        this['productshorts'] = productshorts;
        return this;
    }
    public withOffset(offset: number): TemplateQueryV2 {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): TemplateQueryV2 {
        this['limit'] = limit;
        return this;
    }
    public withTagIds(tagIds: Array<string>): TemplateQueryV2 {
        this['tag_ids'] = tagIds;
        return this;
    }
    public set tagIds(tagIds: Array<string>  | undefined) {
        this['tag_ids'] = tagIds;
    }
    public get tagIds(): Array<string> | undefined {
        return this['tag_ids'];
    }
    public withTypes(types: Array<number>): TemplateQueryV2 {
        this['types'] = types;
        return this;
    }
    public withIsStatic(isStatic: number): TemplateQueryV2 {
        this['is_static'] = isStatic;
        return this;
    }
    public set isStatic(isStatic: number  | undefined) {
        this['is_static'] = isStatic;
    }
    public get isStatic(): number | undefined {
        return this['is_static'];
    }
    public withPlatformSource(platformSource: Array<number>): TemplateQueryV2 {
        this['platform_source'] = platformSource;
        return this;
    }
    public set platformSource(platformSource: Array<number>  | undefined) {
        this['platform_source'] = platformSource;
    }
    public get platformSource(): Array<number> | undefined {
        return this['platform_source'];
    }
    public withTagNames(tagNames: Array<string>): TemplateQueryV2 {
        this['tag_names'] = tagNames;
        return this;
    }
    public set tagNames(tagNames: Array<string>  | undefined) {
        this['tag_names'] = tagNames;
    }
    public get tagNames(): Array<string> | undefined {
        return this['tag_names'];
    }
}