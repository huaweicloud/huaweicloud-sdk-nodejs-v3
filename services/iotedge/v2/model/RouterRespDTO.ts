

export class RouterRespDTO {
    private 'route_id'?: string;
    public sql?: string;
    public constructor(routeId?: string) { 
        this['route_id'] = routeId;
    }
    public withRouteId(routeId: string): RouterRespDTO {
        this['route_id'] = routeId;
        return this;
    }
    public set routeId(routeId: string  | undefined) {
        this['route_id'] = routeId;
    }
    public get routeId(): string | undefined {
        return this['route_id'];
    }
    public withSql(sql: string): RouterRespDTO {
        this['sql'] = sql;
        return this;
    }
}