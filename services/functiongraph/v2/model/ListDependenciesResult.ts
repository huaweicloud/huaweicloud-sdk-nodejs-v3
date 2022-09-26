

export class ListDependenciesResult {
    public id: string;
    public owner: string;
    public link: string;
    public runtime: ListDependenciesResultRuntimeEnum;
    public etag: string;
    public size: number;
    public name: string;
    private 'file_name'?: string | undefined;
    public description?: string;
    public version?: number;
    private 'last_modified'?: number | undefined;
    public constructor(id?: any, owner?: any, link?: any, runtime?: any, etag?: any, size?: any, name?: any) { 
        this['id'] = id;
        this['owner'] = owner;
        this['link'] = link;
        this['runtime'] = runtime;
        this['etag'] = etag;
        this['size'] = size;
        this['name'] = name;
    }
    public withId(id: string): ListDependenciesResult {
        this['id'] = id;
        return this;
    }
    public withOwner(owner: string): ListDependenciesResult {
        this['owner'] = owner;
        return this;
    }
    public withLink(link: string): ListDependenciesResult {
        this['link'] = link;
        return this;
    }
    public withRuntime(runtime: ListDependenciesResultRuntimeEnum): ListDependenciesResult {
        this['runtime'] = runtime;
        return this;
    }
    public withEtag(etag: string): ListDependenciesResult {
        this['etag'] = etag;
        return this;
    }
    public withSize(size: number): ListDependenciesResult {
        this['size'] = size;
        return this;
    }
    public withName(name: string): ListDependenciesResult {
        this['name'] = name;
        return this;
    }
    public withFileName(fileName: string): ListDependenciesResult {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName() {
        return this['file_name'];
    }
    public withDescription(description: string): ListDependenciesResult {
        this['description'] = description;
        return this;
    }
    public withVersion(version: number): ListDependenciesResult {
        this['version'] = version;
        return this;
    }
    public withLastModified(lastModified: number): ListDependenciesResult {
        this['last_modified'] = lastModified;
        return this;
    }
    public set lastModified(lastModified: number | undefined) {
        this['last_modified'] = lastModified;
    }
    public get lastModified() {
        return this['last_modified'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDependenciesResultRuntimeEnum {
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
    PYTHON3_9 = 'Python3.9'
}
