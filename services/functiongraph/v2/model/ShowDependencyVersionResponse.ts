
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDependencyVersionResponse extends SdkResponse {
    public id?: string;
    public owner?: string;
    public link?: string;
    public runtime?: string;
    public etag?: string;
    public size?: number;
    public name?: string;
    public description?: string;
    private 'file_name'?: string;
    public version?: number;
    private 'last_modified'?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowDependencyVersionResponse {
        this['id'] = id;
        return this;
    }
    public withOwner(owner: string): ShowDependencyVersionResponse {
        this['owner'] = owner;
        return this;
    }
    public withLink(link: string): ShowDependencyVersionResponse {
        this['link'] = link;
        return this;
    }
    public withRuntime(runtime: string): ShowDependencyVersionResponse {
        this['runtime'] = runtime;
        return this;
    }
    public withEtag(etag: string): ShowDependencyVersionResponse {
        this['etag'] = etag;
        return this;
    }
    public withSize(size: number): ShowDependencyVersionResponse {
        this['size'] = size;
        return this;
    }
    public withName(name: string): ShowDependencyVersionResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowDependencyVersionResponse {
        this['description'] = description;
        return this;
    }
    public withFileName(fileName: string): ShowDependencyVersionResponse {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withVersion(version: number): ShowDependencyVersionResponse {
        this['version'] = version;
        return this;
    }
    public withLastModified(lastModified: number): ShowDependencyVersionResponse {
        this['last_modified'] = lastModified;
        return this;
    }
    public set lastModified(lastModified: number  | undefined) {
        this['last_modified'] = lastModified;
    }
    public get lastModified(): number | undefined {
        return this['last_modified'];
    }
}