

export class ListAllTypeInstancesRequest {
    public name?: string;
    private 'cur_page'?: number;
    private 'per_page'?: number;
    private 'network_type'?: string;
    private 'engine_type'?: string;
    public id?: string;
    public constructor() { 
    }
    public withName(name: string): ListAllTypeInstancesRequest {
        this['name'] = name;
        return this;
    }
    public withCurPage(curPage: number): ListAllTypeInstancesRequest {
        this['cur_page'] = curPage;
        return this;
    }
    public set curPage(curPage: number  | undefined) {
        this['cur_page'] = curPage;
    }
    public get curPage(): number | undefined {
        return this['cur_page'];
    }
    public withPerPage(perPage: number): ListAllTypeInstancesRequest {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: number  | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage(): number | undefined {
        return this['per_page'];
    }
    public withNetworkType(networkType: string): ListAllTypeInstancesRequest {
        this['network_type'] = networkType;
        return this;
    }
    public set networkType(networkType: string  | undefined) {
        this['network_type'] = networkType;
    }
    public get networkType(): string | undefined {
        return this['network_type'];
    }
    public withEngineType(engineType: string): ListAllTypeInstancesRequest {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withId(id: string): ListAllTypeInstancesRequest {
        this['id'] = id;
        return this;
    }
}