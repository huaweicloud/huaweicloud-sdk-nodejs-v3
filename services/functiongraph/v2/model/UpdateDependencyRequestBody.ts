

export class UpdateDependencyRequestBody {
    private 'depend_file'?: string | undefined;
    private 'depend_link'?: string | undefined;
    private 'depend_type': string | undefined;
    public runtime: UpdateDependencyRequestBodyRuntimeEnum;
    public name: string;
    public description?: string;
    public constructor(dependType?: any, runtime?: any, name?: any) { 
        this['depend_type'] = dependType;
        this['runtime'] = runtime;
        this['name'] = name;
    }
    public withDependFile(dependFile: string): UpdateDependencyRequestBody {
        this['depend_file'] = dependFile;
        return this;
    }
    public set dependFile(dependFile: string | undefined) {
        this['depend_file'] = dependFile;
    }
    public get dependFile() {
        return this['depend_file'];
    }
    public withDependLink(dependLink: string): UpdateDependencyRequestBody {
        this['depend_link'] = dependLink;
        return this;
    }
    public set dependLink(dependLink: string | undefined) {
        this['depend_link'] = dependLink;
    }
    public get dependLink() {
        return this['depend_link'];
    }
    public withDependType(dependType: string): UpdateDependencyRequestBody {
        this['depend_type'] = dependType;
        return this;
    }
    public set dependType(dependType: string | undefined) {
        this['depend_type'] = dependType;
    }
    public get dependType() {
        return this['depend_type'];
    }
    public withRuntime(runtime: UpdateDependencyRequestBodyRuntimeEnum): UpdateDependencyRequestBody {
        this['runtime'] = runtime;
        return this;
    }
    public withName(name: string): UpdateDependencyRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateDependencyRequestBody {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateDependencyRequestBodyRuntimeEnum {
    JAVA_8 = 'Java 8',
    NODE_JS_6_10 = 'Node.js 6.10',
    NODE_JS_8_10 = 'Node.js 8.10',
    NODE_JS_10_16 = 'Node.js 10.16',
    NODE_JS_12_13 = 'Node.js 12.13',
    PYTHON_2_7 = 'Python 2.7',
    PYTHON_3_6 = 'Python 3.6',
    GO_1_8 = 'Go 1.8',
    C__NET_CORE_2_0 = 'C#(.NET Core 2.0)',
    C__NET_CORE_2_1 = 'C#(.NET Core 2.1)',
    C__NET_CORE_3_1 = 'C#(.NET Core 3.1)',
    PHP_7_3 = 'PHP 7.3'
}
