
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateProjectResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'clone_url'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateProjectResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateProjectResponse {
        this['name'] = name;
        return this;
    }
    public withCloneUrl(cloneUrl: string): CreateProjectResponse {
        this['clone_url'] = cloneUrl;
        return this;
    }
    public set cloneUrl(cloneUrl: string  | undefined) {
        this['clone_url'] = cloneUrl;
    }
    public get cloneUrl(): string | undefined {
        return this['clone_url'];
    }
}