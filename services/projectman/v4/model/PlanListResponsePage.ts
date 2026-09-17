

export class PlanListResponsePage {
    public page?: number;
    public size?: number;
    public count?: number;
    public constructor() { 
    }
    public withPage(page: number): PlanListResponsePage {
        this['page'] = page;
        return this;
    }
    public withSize(size: number): PlanListResponsePage {
        this['size'] = size;
        return this;
    }
    public withCount(count: number): PlanListResponsePage {
        this['count'] = count;
        return this;
    }
}