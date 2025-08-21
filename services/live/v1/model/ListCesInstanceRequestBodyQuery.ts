

export class ListCesInstanceRequestBodyQuery {
    private 'dim_name'?: string;
    public id?: string;
    public constructor(dimName?: string) { 
        this['dim_name'] = dimName;
    }
    public withDimName(dimName: string): ListCesInstanceRequestBodyQuery {
        this['dim_name'] = dimName;
        return this;
    }
    public set dimName(dimName: string  | undefined) {
        this['dim_name'] = dimName;
    }
    public get dimName(): string | undefined {
        return this['dim_name'];
    }
    public withId(id: string): ListCesInstanceRequestBodyQuery {
        this['id'] = id;
        return this;
    }
}