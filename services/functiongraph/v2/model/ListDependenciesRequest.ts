

export class ListDependenciesRequest {
    public marker?: string;
    public maxitems?: string;
    public ispublic?: string;
    private 'dependency_type'?: string;
    public runtime?: string;
    public name?: string;
    public limit?: string;
    public constructor() { 
    }
    public withMarker(marker: string): ListDependenciesRequest {
        this['marker'] = marker;
        return this;
    }
    public withMaxitems(maxitems: string): ListDependenciesRequest {
        this['maxitems'] = maxitems;
        return this;
    }
    public withIspublic(ispublic: string): ListDependenciesRequest {
        this['ispublic'] = ispublic;
        return this;
    }
    public withDependencyType(dependencyType: string): ListDependenciesRequest {
        this['dependency_type'] = dependencyType;
        return this;
    }
    public set dependencyType(dependencyType: string  | undefined) {
        this['dependency_type'] = dependencyType;
    }
    public get dependencyType(): string | undefined {
        return this['dependency_type'];
    }
    public withRuntime(runtime: string): ListDependenciesRequest {
        this['runtime'] = runtime;
        return this;
    }
    public withName(name: string): ListDependenciesRequest {
        this['name'] = name;
        return this;
    }
    public withLimit(limit: string): ListDependenciesRequest {
        this['limit'] = limit;
        return this;
    }
}