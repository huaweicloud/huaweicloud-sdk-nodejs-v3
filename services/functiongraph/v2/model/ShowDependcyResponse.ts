
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDependcyResponse extends SdkResponse {
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
    public withId(id: string): ShowDependcyResponse {
        this['id'] = id;
        return this;
    }
    public withOwner(owner: string): ShowDependcyResponse {
        this['owner'] = owner;
        return this;
    }
    public withLink(link: string): ShowDependcyResponse {
        this['link'] = link;
        return this;
    }
    public withRuntime(runtime: string): ShowDependcyResponse {
        this['runtime'] = runtime;
        return this;
    }
    public withEtag(etag: string): ShowDependcyResponse {
        this['etag'] = etag;
        return this;
    }
    public withSize(size: number): ShowDependcyResponse {
        this['size'] = size;
        return this;
    }
    public withName(name: string): ShowDependcyResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowDependcyResponse {
        this['description'] = description;
        return this;
    }
    public withFileName(fileName: string): ShowDependcyResponse {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withVersion(version: number): ShowDependcyResponse {
        this['version'] = version;
        return this;
    }
    public withLastModified(lastModified: number): ShowDependcyResponse {
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