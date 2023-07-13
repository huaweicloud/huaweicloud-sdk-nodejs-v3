

export class PageReq {
    private 'cur_page'?: number | undefined;
    private 'per_page'?: number | undefined;
    public constructor() { 
    }
    public withCurPage(curPage: number): PageReq {
        this['cur_page'] = curPage;
        return this;
    }
    public set curPage(curPage: number | undefined) {
        this['cur_page'] = curPage;
    }
    public get curPage() {
        return this['cur_page'];
    }
    public withPerPage(perPage: number): PageReq {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: number | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage() {
        return this['per_page'];
    }
}