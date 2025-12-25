

export class SearchPolicyRequestBodySort {
    private 'sort_by'?: string;
    public order?: string;
    public constructor() { 
    }
    public withSortBy(sortBy: string): SearchPolicyRequestBodySort {
        this['sort_by'] = sortBy;
        return this;
    }
    public set sortBy(sortBy: string  | undefined) {
        this['sort_by'] = sortBy;
    }
    public get sortBy(): string | undefined {
        return this['sort_by'];
    }
    public withOrder(order: string): SearchPolicyRequestBodySort {
        this['order'] = order;
        return this;
    }
}