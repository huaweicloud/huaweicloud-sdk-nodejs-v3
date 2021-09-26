
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDependencyResponse extends SdkResponse {
    public id?: string;
    public owner?: string;
    public link?: string;
    public runtime?: string;
    public etag?: string;
    public size?: number;
    public name?: string;
    public description?: string;
    private 'file_name'?: string | undefined;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateDependencyResponse {
        this['id'] = id;
        return this;
    }
    public withOwner(owner: string): UpdateDependencyResponse {
        this['owner'] = owner;
        return this;
    }
    public withLink(link: string): UpdateDependencyResponse {
        this['link'] = link;
        return this;
    }
    public withRuntime(runtime: string): UpdateDependencyResponse {
        this['runtime'] = runtime;
        return this;
    }
    public withEtag(etag: string): UpdateDependencyResponse {
        this['etag'] = etag;
        return this;
    }
    public withSize(size: number): UpdateDependencyResponse {
        this['size'] = size;
        return this;
    }
    public withName(name: string): UpdateDependencyResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateDependencyResponse {
        this['description'] = description;
        return this;
    }
    public withFileName(fileName: string): UpdateDependencyResponse {
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