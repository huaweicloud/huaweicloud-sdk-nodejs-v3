

export class ListTemplatesRequest {
    private 'template_type'?: string;
    private 'is_build_in'?: string;
    public offset?: number;
    public limit?: number;
    public name?: string;
    public sort?: string;
    public asc?: string;
    public constructor(templateType?: string, isBuildIn?: string) { 
        this['template_type'] = templateType;
        this['is_build_in'] = isBuildIn;
    }
    public withTemplateType(templateType: string): ListTemplatesRequest {
        this['template_type'] = templateType;
        return this;
    }
    public set templateType(templateType: string  | undefined) {
        this['template_type'] = templateType;
    }
    public get templateType(): string | undefined {
        return this['template_type'];
    }
    public withIsBuildIn(isBuildIn: string): ListTemplatesRequest {
        this['is_build_in'] = isBuildIn;
        return this;
    }
    public set isBuildIn(isBuildIn: string  | undefined) {
        this['is_build_in'] = isBuildIn;
    }
    public get isBuildIn(): string | undefined {
        return this['is_build_in'];
    }
    public withOffset(offset: number): ListTemplatesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTemplatesRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListTemplatesRequest {
        this['name'] = name;
        return this;
    }
    public withSort(sort: string): ListTemplatesRequest {
        this['sort'] = sort;
        return this;
    }
    public withAsc(asc: string): ListTemplatesRequest {
        this['asc'] = asc;
        return this;
    }
}