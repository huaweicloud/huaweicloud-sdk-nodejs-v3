

export class ListApplicationViewRequest {
    private 'name_like'?: string;
    private 'code_list'?: Array<string>;
    public marker?: string;
    public limit?: number;
    private 'page_no'?: number;
    private 'is_collection'?: boolean;
    public constructor(limit?: number) { 
        this['limit'] = limit;
    }
    public withNameLike(nameLike: string): ListApplicationViewRequest {
        this['name_like'] = nameLike;
        return this;
    }
    public set nameLike(nameLike: string  | undefined) {
        this['name_like'] = nameLike;
    }
    public get nameLike(): string | undefined {
        return this['name_like'];
    }
    public withCodeList(codeList: Array<string>): ListApplicationViewRequest {
        this['code_list'] = codeList;
        return this;
    }
    public set codeList(codeList: Array<string>  | undefined) {
        this['code_list'] = codeList;
    }
    public get codeList(): Array<string> | undefined {
        return this['code_list'];
    }
    public withMarker(marker: string): ListApplicationViewRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListApplicationViewRequest {
        this['limit'] = limit;
        return this;
    }
    public withPageNo(pageNo: number): ListApplicationViewRequest {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withIsCollection(isCollection: boolean): ListApplicationViewRequest {
        this['is_collection'] = isCollection;
        return this;
    }
    public set isCollection(isCollection: boolean  | undefined) {
        this['is_collection'] = isCollection;
    }
    public get isCollection(): boolean | undefined {
        return this['is_collection'];
    }
}