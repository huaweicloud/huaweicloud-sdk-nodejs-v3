

export class DimChild {
    private 'dim_name'?: string | undefined;
    private 'dim_route'?: string | undefined;
    public constructor() { 
    }
    public withDimName(dimName: string): DimChild {
        this['dim_name'] = dimName;
        return this;
    }
    public set dimName(dimName: string | undefined) {
        this['dim_name'] = dimName;
    }
    public get dimName() {
        return this['dim_name'];
    }
    public withDimRoute(dimRoute: string): DimChild {
        this['dim_route'] = dimRoute;
        return this;
    }
    public set dimRoute(dimRoute: string | undefined) {
        this['dim_route'] = dimRoute;
    }
    public get dimRoute() {
        return this['dim_route'];
    }
}