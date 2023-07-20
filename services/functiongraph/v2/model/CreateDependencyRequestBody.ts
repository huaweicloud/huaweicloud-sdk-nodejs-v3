

export class CreateDependencyRequestBody {
    private 'depend_file'?: string;
    private 'depend_link'?: string;
    private 'depend_type'?: string;
    public runtime?: CreateDependencyRequestBodyRuntimeEnum | string;
    public name?: string;
    public description?: string;
    public constructor(dependType?: string, runtime?: string, name?: string) { 
        this['depend_type'] = dependType;
        this['runtime'] = runtime;
        this['name'] = name;
    }
    public withDependFile(dependFile: string): CreateDependencyRequestBody {
        this['depend_file'] = dependFile;
        return this;
    }
    public set dependFile(dependFile: string  | undefined) {
        this['depend_file'] = dependFile;
    }
    public get dependFile(): string | undefined {
        return this['depend_file'];
    }
    public withDependLink(dependLink: string): CreateDependencyRequestBody {
        this['depend_link'] = dependLink;
        return this;
    }
    public set dependLink(dependLink: string  | undefined) {
        this['depend_link'] = dependLink;
    }
    public get dependLink(): string | undefined {
        return this['depend_link'];
    }
    public withDependType(dependType: string): CreateDependencyRequestBody {
        this['depend_type'] = dependType;
        return this;
    }
    public set dependType(dependType: string  | undefined) {
        this['depend_type'] = dependType;
    }
    public get dependType(): string | undefined {
        return this['depend_type'];
    }
    public withRuntime(runtime: CreateDependencyRequestBodyRuntimeEnum | string): CreateDependencyRequestBody {
        this['runtime'] = runtime;
        return this;
    }
    public withName(name: string): CreateDependencyRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateDependencyRequestBody {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateDependencyRequestBodyRuntimeEnum {
    JAVA8 = 'Java8',
    JAVA11 = 'Java11',
    NODE_JS6_10 = 'Node.js6.10',
    NODE_JS8_10 = 'Node.js8.10',
    NODE_JS10_16 = 'Node.js10.16',
    NODE_JS12_13 = 'Node.js12.13',
    NODE_JS14_18 = 'Node.js14.18',
    PYTHON2_7 = 'Python2.7',
    PYTHON3_6 = 'Python3.6',
    GO1_8 = 'Go1.8',
    GO1_X = 'Go1.x',
    C__NET_CORE_2_0 = 'C#(.NET Core 2.0)',
    C__NET_CORE_2_1 = 'C#(.NET Core 2.1)',
    C__NET_CORE_3_1 = 'C#(.NET Core 3.1)',
    PHP7_3 = 'PHP7.3',
    PYTHON3_9 = 'Python3.9',
    CUSTOM = 'Custom',
    HTTP = 'http'
}
