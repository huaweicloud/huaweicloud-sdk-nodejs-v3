

export class ListDependencyVersionsResult {
    public id?: string;
    public owner?: string;
    public link?: string;
    public runtime?: ListDependencyVersionsResultRuntimeEnum | string;
    public etag?: string;
    public size?: number;
    public name?: string;
    private 'file_name'?: string;
    public description?: string;
    public version?: number;
    private 'last_modified'?: number;
    private 'dep_id'?: string;
    private 'is_shared'?: boolean;
    public constructor(id?: string, owner?: string, link?: string, runtime?: string, etag?: string, size?: number, name?: string) { 
        this['id'] = id;
        this['owner'] = owner;
        this['link'] = link;
        this['runtime'] = runtime;
        this['etag'] = etag;
        this['size'] = size;
        this['name'] = name;
    }
    public withId(id: string): ListDependencyVersionsResult {
        this['id'] = id;
        return this;
    }
    public withOwner(owner: string): ListDependencyVersionsResult {
        this['owner'] = owner;
        return this;
    }
    public withLink(link: string): ListDependencyVersionsResult {
        this['link'] = link;
        return this;
    }
    public withRuntime(runtime: ListDependencyVersionsResultRuntimeEnum | string): ListDependencyVersionsResult {
        this['runtime'] = runtime;
        return this;
    }
    public withEtag(etag: string): ListDependencyVersionsResult {
        this['etag'] = etag;
        return this;
    }
    public withSize(size: number): ListDependencyVersionsResult {
        this['size'] = size;
        return this;
    }
    public withName(name: string): ListDependencyVersionsResult {
        this['name'] = name;
        return this;
    }
    public withFileName(fileName: string): ListDependencyVersionsResult {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withDescription(description: string): ListDependencyVersionsResult {
        this['description'] = description;
        return this;
    }
    public withVersion(version: number): ListDependencyVersionsResult {
        this['version'] = version;
        return this;
    }
    public withLastModified(lastModified: number): ListDependencyVersionsResult {
        this['last_modified'] = lastModified;
        return this;
    }
    public set lastModified(lastModified: number  | undefined) {
        this['last_modified'] = lastModified;
    }
    public get lastModified(): number | undefined {
        return this['last_modified'];
    }
    public withDepId(depId: string): ListDependencyVersionsResult {
        this['dep_id'] = depId;
        return this;
    }
    public set depId(depId: string  | undefined) {
        this['dep_id'] = depId;
    }
    public get depId(): string | undefined {
        return this['dep_id'];
    }
    public withIsShared(isShared: boolean): ListDependencyVersionsResult {
        this['is_shared'] = isShared;
        return this;
    }
    public set isShared(isShared: boolean  | undefined) {
        this['is_shared'] = isShared;
    }
    public get isShared(): boolean | undefined {
        return this['is_shared'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDependencyVersionsResultRuntimeEnum {
    JAVA8 = 'Java8',
    JAVA11 = 'Java11',
    JAVA17 = 'Java17',
    PYTHON2_7 = 'Python2.7',
    PYTHON3_6 = 'Python3.6',
    PYTHON3_9 = 'Python3.9',
    PYTHON3_10 = 'Python3.10',
    GO1_8 = 'Go1.8',
    GO1_X = 'Go1.x',
    NODE_JS6_10 = 'Node.js6.10',
    NODE_JS8_10 = 'Node.js8.10',
    NODE_JS10_16 = 'Node.js10.16',
    NODE_JS12_13 = 'Node.js12.13',
    NODE_JS14_18 = 'Node.js14.18',
    NODE_JS16_17 = 'Node.js16.17',
    NODE_JS18_15 = 'Node.js18.15',
    C__NET_CORE_2_0 = 'C#(.NET Core 2.0)',
    C__NET_CORE_2_1 = 'C#(.NET Core 2.1)',
    C__NET_CORE_3_1 = 'C#(.NET Core 3.1)',
    C__NET_CORE_6_0 = 'C#(.NET Core 6.0)',
    CUSTOM = 'Custom',
    PHP7_3 = 'PHP7.3',
    CANGJIE1_0 = 'Cangjie1.0',
    HTTP = 'http',
    CUSTOM_IMAGE = 'Custom Image'
}
