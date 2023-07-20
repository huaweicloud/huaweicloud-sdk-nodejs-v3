
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDependcyResponse extends SdkResponse {
    public id?: string;
    public owner?: string;
    public link?: string;
    public runtime?: string;
    public etag?: string;
    public size?: number;
    public name?: string;
    public description?: string;
    private 'file_name'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateDependcyResponse {
        this['id'] = id;
        return this;
    }
    public withOwner(owner: string): UpdateDependcyResponse {
        this['owner'] = owner;
        return this;
    }
    public withLink(link: string): UpdateDependcyResponse {
        this['link'] = link;
        return this;
    }
    public withRuntime(runtime: string): UpdateDependcyResponse {
        this['runtime'] = runtime;
        return this;
    }
    public withEtag(etag: string): UpdateDependcyResponse {
        this['etag'] = etag;
        return this;
    }
    public withSize(size: number): UpdateDependcyResponse {
        this['size'] = size;
        return this;
    }
    public withName(name: string): UpdateDependcyResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateDependcyResponse {
        this['description'] = description;
        return this;
    }
    public withFileName(fileName: string): UpdateDependcyResponse {
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