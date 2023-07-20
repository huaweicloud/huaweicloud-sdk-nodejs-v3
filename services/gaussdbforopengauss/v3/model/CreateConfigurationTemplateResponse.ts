
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateConfigurationTemplateResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'created_at'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateConfigurationTemplateResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateConfigurationTemplateResponse {
        this['name'] = name;
        return this;
    }
    public withCreatedAt(createdAt: string): CreateConfigurationTemplateResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
}