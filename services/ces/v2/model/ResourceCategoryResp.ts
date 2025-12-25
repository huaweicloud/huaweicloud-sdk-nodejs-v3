

export class ResourceCategoryResp {
    public namespace?: string;
    private 'dimension_names'?: Array<string>;
    public constructor(namespace?: string, dimensionNames?: Array<string>) { 
        this['namespace'] = namespace;
        this['dimension_names'] = dimensionNames;
    }
    public withNamespace(namespace: string): ResourceCategoryResp {
        this['namespace'] = namespace;
        return this;
    }
    public withDimensionNames(dimensionNames: Array<string>): ResourceCategoryResp {
        this['dimension_names'] = dimensionNames;
        return this;
    }
    public set dimensionNames(dimensionNames: Array<string>  | undefined) {
        this['dimension_names'] = dimensionNames;
    }
    public get dimensionNames(): Array<string> | undefined {
        return this['dimension_names'];
    }
}