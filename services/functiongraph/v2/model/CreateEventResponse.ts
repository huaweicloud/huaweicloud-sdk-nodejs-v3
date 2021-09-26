
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateEventResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public content?: string;
    private 'last_modified'?: number | undefined;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateEventResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateEventResponse {
        this['name'] = name;
        return this;
    }
    public withContent(content: string): CreateEventResponse {
        this['content'] = content;
        return this;
    }
    public withLastModified(lastModified: number): CreateEventResponse {
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