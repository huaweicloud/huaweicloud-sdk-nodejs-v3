

export class ListCustomPoliciesRequest {
    public page?: number;
    private 'per_page'?: number;
    public constructor() { 
    }
    public withPage(page: number): ListCustomPoliciesRequest {
        this['page'] = page;
        return this;
    }
    public withPerPage(perPage: number): ListCustomPoliciesRequest {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: number  | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage(): number | undefined {
        return this['per_page'];
    }
}