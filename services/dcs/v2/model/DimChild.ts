

export class DimChild {
    private 'dim_name'?: string;
    private 'dim_route'?: string;
    public constructor() { 
    }
    public withDimName(dimName: string): DimChild {
        this['dim_name'] = dimName;
        return this;
    }
    public set dimName(dimName: string  | undefined) {
        this['dim_name'] = dimName;
    }
    public get dimName(): string | undefined {
        return this['dim_name'];
    }
    public withDimRoute(dimRoute: string): DimChild {
        this['dim_route'] = dimRoute;
        return this;
    }
    public set dimRoute(dimRoute: string  | undefined) {
        this['dim_route'] = dimRoute;
    }
    public get dimRoute(): string | undefined {
        return this['dim_route'];
    }
}