

export class QueryCategoryRsp {
    public id?: string;
    public name?: string;
    public children?: Array<QueryCategoryRsp>;
    public constructor() { 
    }
    public withId(id: string): QueryCategoryRsp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): QueryCategoryRsp {
        this['name'] = name;
        return this;
    }
    public withChildren(children: Array<QueryCategoryRsp>): QueryCategoryRsp {
        this['children'] = children;
        return this;
    }
}