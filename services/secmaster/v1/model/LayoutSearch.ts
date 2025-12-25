

export class LayoutSearch {
    public name?: string;
    private 'used_by'?: string;
    private 'binding_code'?: string;
    private 'is_built_in'?: boolean;
    private 'is_template'?: boolean;
    private 'is_default'?: boolean;
    private 'layout_type'?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    private 'search_txt'?: string;
    private 'from_date'?: string;
    private 'to_date'?: string;
    public constructor() { 
    }
    public withName(name: string): LayoutSearch {
        this['name'] = name;
        return this;
    }
    public withUsedBy(usedBy: string): LayoutSearch {
        this['used_by'] = usedBy;
        return this;
    }
    public set usedBy(usedBy: string  | undefined) {
        this['used_by'] = usedBy;
    }
    public get usedBy(): string | undefined {
        return this['used_by'];
    }
    public withBindingCode(bindingCode: string): LayoutSearch {
        this['binding_code'] = bindingCode;
        return this;
    }
    public set bindingCode(bindingCode: string  | undefined) {
        this['binding_code'] = bindingCode;
    }
    public get bindingCode(): string | undefined {
        return this['binding_code'];
    }
    public withIsBuiltIn(isBuiltIn: boolean): LayoutSearch {
        this['is_built_in'] = isBuiltIn;
        return this;
    }
    public set isBuiltIn(isBuiltIn: boolean  | undefined) {
        this['is_built_in'] = isBuiltIn;
    }
    public get isBuiltIn(): boolean | undefined {
        return this['is_built_in'];
    }
    public withIsTemplate(isTemplate: boolean): LayoutSearch {
        this['is_template'] = isTemplate;
        return this;
    }
    public set isTemplate(isTemplate: boolean  | undefined) {
        this['is_template'] = isTemplate;
    }
    public get isTemplate(): boolean | undefined {
        return this['is_template'];
    }
    public withIsDefault(isDefault: boolean): LayoutSearch {
        this['is_default'] = isDefault;
        return this;
    }
    public set isDefault(isDefault: boolean  | undefined) {
        this['is_default'] = isDefault;
    }
    public get isDefault(): boolean | undefined {
        return this['is_default'];
    }
    public withLayoutType(layoutType: string): LayoutSearch {
        this['layout_type'] = layoutType;
        return this;
    }
    public set layoutType(layoutType: string  | undefined) {
        this['layout_type'] = layoutType;
    }
    public get layoutType(): string | undefined {
        return this['layout_type'];
    }
    public withOffset(offset: number): LayoutSearch {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): LayoutSearch {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: string): LayoutSearch {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): LayoutSearch {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withSearchTxt(searchTxt: string): LayoutSearch {
        this['search_txt'] = searchTxt;
        return this;
    }
    public set searchTxt(searchTxt: string  | undefined) {
        this['search_txt'] = searchTxt;
    }
    public get searchTxt(): string | undefined {
        return this['search_txt'];
    }
    public withFromDate(fromDate: string): LayoutSearch {
        this['from_date'] = fromDate;
        return this;
    }
    public set fromDate(fromDate: string  | undefined) {
        this['from_date'] = fromDate;
    }
    public get fromDate(): string | undefined {
        return this['from_date'];
    }
    public withToDate(toDate: string): LayoutSearch {
        this['to_date'] = toDate;
        return this;
    }
    public set toDate(toDate: string  | undefined) {
        this['to_date'] = toDate;
    }
    public get toDate(): string | undefined {
        return this['to_date'];
    }
}