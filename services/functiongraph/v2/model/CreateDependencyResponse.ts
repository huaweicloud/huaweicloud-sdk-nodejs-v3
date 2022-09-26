
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDependencyResponse extends SdkResponse {
    public id?: string;
    public owner?: string;
    public link?: string;
    public runtime?: string;
    public etag?: string;
    public size?: number;
    public name?: string;
    public description?: string;
    private 'file_name'?: string | undefined;
    public version?: number;
    private 'last_modified'?: number | undefined;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateDependencyResponse {
        this['id'] = id;
        return this;
    }
    public withOwner(owner: string): CreateDependencyResponse {
        this['owner'] = owner;
        return this;
    }
    public withLink(link: string): CreateDependencyResponse {
        this['link'] = link;
        return this;
    }
    public withRuntime(runtime: string): CreateDependencyResponse {
        this['runtime'] = runtime;
        return this;
    }
    public withEtag(etag: string): CreateDependencyResponse {
        this['etag'] = etag;
        return this;
    }
    public withSize(size: number): CreateDependencyResponse {
        this['size'] = size;
        return this;
    }
    public withName(name: string): CreateDependencyResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateDependencyResponse {
        this['description'] = description;
        return this;
    }
    public withFileName(fileName: string): CreateDependencyResponse {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName() {
        return this['file_name'];
    }
    public withVersion(version: number): CreateDependencyResponse {
        this['version'] = version;
        return this;
    }
    public withLastModified(lastModified: number): CreateDependencyResponse {
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