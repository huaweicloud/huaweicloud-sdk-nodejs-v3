import { AsyncActionBaseResp } from './AsyncActionBaseResp';


export class AsyncActionResp {
    private 'query_id': string | undefined;
    public id: string;
    public name: string;
    public constructor(queryId?: any, id?: any, name?: any) { 
        this['query_id'] = queryId;
        this['id'] = id;
        this['name'] = name;
    }
    public withQueryId(queryId: string): AsyncActionResp {
        this['query_id'] = queryId;
        return this;
    }
    public set queryId(queryId: string | undefined) {
        this['query_id'] = queryId;
    }
    public get queryId() {
        return this['query_id'];
    }
    public withId(id: string): AsyncActionResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AsyncActionResp {
        this['name'] = name;
        return this;
    }
}