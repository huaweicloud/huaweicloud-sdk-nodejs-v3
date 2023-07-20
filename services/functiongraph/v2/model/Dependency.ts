

export class Dependency {
    public owner?: string;
    public link?: string;
    public runtime?: DependencyRuntimeEnum | string;
    public etag?: string;
    public size?: number;
    public name?: string;
    public description?: string;
    private 'file_name'?: string;
    public constructor(owner?: string, link?: string, runtime?: string, etag?: string, size?: number, name?: string, description?: string) { 
        this['owner'] = owner;
        this['link'] = link;
        this['runtime'] = runtime;
        this['etag'] = etag;
        this['size'] = size;
        this['name'] = name;
        this['description'] = description;
    }
    public withOwner(owner: string): Dependency {
        this['owner'] = owner;
        return this;
    }
    public withLink(link: string): Dependency {
        this['link'] = link;
        return this;
    }
    public withRuntime(runtime: DependencyRuntimeEnum | string): Dependency {
        this['runtime'] = runtime;
        return this;
    }
    public withEtag(etag: string): Dependency {
        this['etag'] = etag;
        return this;
    }
    public withSize(size: number): Dependency {
        this['size'] = size;
        return this;
    }
    public withName(name: string): Dependency {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): Dependency {
        this['description'] = description;
        return this;
    }
    public withFileName(fileName: string): Dependency {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DependencyRuntimeEnum {
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
