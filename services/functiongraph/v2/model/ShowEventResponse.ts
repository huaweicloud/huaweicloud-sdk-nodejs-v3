
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEventResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public content?: string;
    private 'last_modified'?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowEventResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowEventResponse {
        this['name'] = name;
        return this;
    }
    public withContent(content: string): ShowEventResponse {
        this['content'] = content;
        return this;
    }
    public withLastModified(lastModified: number): ShowEventResponse {
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