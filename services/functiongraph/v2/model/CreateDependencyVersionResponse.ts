
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDependencyVersionResponse extends SdkResponse {
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
    public withId(id: string): CreateDependencyVersionResponse {
        this['id'] = id;
        return this;
    }
    public withOwner(owner: string): CreateDependencyVersionResponse {
        this['owner'] = owner;
        return this;
    }
    public withLink(link: string): CreateDependencyVersionResponse {
        this['link'] = link;
        return this;
    }
    public withRuntime(runtime: string): CreateDependencyVersionResponse {
        this['runtime'] = runtime;
        return this;
    }
    public withEtag(etag: string): CreateDependencyVersionResponse {
        this['etag'] = etag;
        return this;
    }
    public withSize(size: number): CreateDependencyVersionResponse {
        this['size'] = size;
        return this;
    }
    public withName(name: string): CreateDependencyVersionResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateDependencyVersionResponse {
        this['description'] = description;
        return this;
    }
    public withFileName(fileName: string): CreateDependencyVersionResponse {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName() {
        return this['file_name'];
    }
    public withVersion(version: number): CreateDependencyVersionResponse {
        this['version'] = version;
        return this;
    }
    public withLastModified(lastModified: number): CreateDependencyVersionResponse {
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