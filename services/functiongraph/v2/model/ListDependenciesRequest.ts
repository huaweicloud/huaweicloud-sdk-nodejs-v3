

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
    JAVA8 = 'Java8',
    JAVA11 = 'Java11',
    NODE_JS6_10 = 'Node.js6.10',
    NODE_JS8_10 = 'Node.js8.10',
    NODE_JS10_16 = 'Node.js10.16',
    NODE_JS12_13 = 'Node.js12.13',
    NODE_JS14_18 = 'Node.js14.18',
    PYTHON2_7 = 'Python2.7',
    PYTHON3_6 = 'Python3.6',
    PYTHON3_9 = 'Python3.9',
    GO1_8 = 'Go1.8',
    GO1_X = 'Go1.x',
    C__NET_CORE_2_0 = 'C#(.NET Core 2.0)',
    C__NET_CORE_2_1 = 'C#(.NET Core 2.1)',
    C__NET_CORE_3_1 = 'C#(.NET Core 3.1)',
    PHP7_3 = 'PHP7.3'
}
