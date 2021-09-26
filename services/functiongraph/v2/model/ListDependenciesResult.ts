

export class ListDependenciesResult {
    public id: string;
    public owner: string;
    public link: string;
    public runtime: string;
    public etag: string;
    public size: number;
    public name: string;
    public description?: string;
    private 'file_name'?: string | undefined;
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
    public withRuntime(runtime: string): ListDependenciesResult {
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
    public withDescription(description: string): ListDependenciesResult {
        this['description'] = description;
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
}