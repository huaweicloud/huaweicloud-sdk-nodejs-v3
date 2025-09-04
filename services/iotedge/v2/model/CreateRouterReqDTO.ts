

export class CreateRouterReqDTO {
    private 'route_id'?: string;
    public sql?: string;
    public constructor(routeId?: string, sql?: string) { 
        this['route_id'] = routeId;
        this['sql'] = sql;
    }
    public withRouteId(routeId: string): CreateRouterReqDTO {
        this['route_id'] = routeId;
        return this;
    }
    public set routeId(routeId: string  | undefined) {
        this['route_id'] = routeId;
    }
    public get routeId(): string | undefined {
        return this['route_id'];
    }
    public withSql(sql: string): CreateRouterReqDTO {
        this['sql'] = sql;
        return this;
    }
}