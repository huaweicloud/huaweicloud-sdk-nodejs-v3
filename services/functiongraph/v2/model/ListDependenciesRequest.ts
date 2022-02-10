

export class ListDependenciesRequest {
    private 'dependency_type'?: ListDependenciesRequestDependencyTypeEnum | undefined;
    public runtime?: ListDependenciesRequestRuntimeEnum;
    public name?: string;
    public marker?: string;
    public limit?: string;
    public constructor() { 
    }
    public withDependencyType(dependencyType: ListDependenciesRequestDependencyTypeEnum): ListDependenciesRequest {
        this['dependency_type'] = dependencyType;
        return this;
    }
    public set dependencyType(dependencyType: ListDependenciesRequestDependencyTypeEnum | undefined) {
        this['dependency_type'] = dependencyType;
    }
    public get dependencyType() {
        return this['dependency_type'];
    }
    public withRuntime(runtime: ListDependenciesRequestRuntimeEnum): ListDependenciesRequest {
        this['runtime'] = runtime;
        return this;
    }
    public withName(name: string): ListDependenciesRequest {
        this['name'] = name;
        return this;
    }
    public withMarker(marker: string): ListDependenciesRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: string): ListDependenciesRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDependenciesRequestDependencyTypeEnum {
    PUBLIC = 'public',
    PRIVATE = 'private',
    ALL = 'all'
}
/**
    * @export
    * @enum {string}
    */
export enum ListDependenciesRequestRuntimeEnum {
    JAVA_8 = 'Java 8',
    NODE_JS_6_10 = 'Node.js 6.10',
    NODE_JS_8_10 = 'Node.js 8.10',
    NODE_JS_10_16 = 'Node.js 10.16',
    NODE_JS_12_13 = 'Node.js 12.13',
    PYTHON_2_7 = 'Python 2.7',
    PYTHON_3_6 = 'Python 3.6',
    GO_1_8 = 'Go 1.8',
    GO_1_X = 'Go 1.x',
    C__NET_CORE_2_0 = 'C#(.NET Core 2.0)',
    C__NET_CORE_2_1 = 'C#(.NET Core 2.1)',
    C__NET_CORE_3_1 = 'C#(.NET Core 3.1)',
    PHP_7_3 = 'PHP 7.3'
}
