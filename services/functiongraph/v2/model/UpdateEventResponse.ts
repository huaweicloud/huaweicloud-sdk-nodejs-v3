
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateEventResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public content?: string;
    private 'last_modified'?: number | undefined;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateEventResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateEventResponse {
        this['name'] = name;
        return this;
    }
    public withContent(content: string): UpdateEventResponse {
        this['content'] = content;
        return this;
    }
    public withLastModified(lastModified: number): UpdateEventResponse {
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