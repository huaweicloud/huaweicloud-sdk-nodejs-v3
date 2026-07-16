import { ImageSaveJob } from './ImageSaveJob';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSaveImageJobResponse extends SdkResponse {
    public name?: string;
    public namespace?: string;
    public tag?: string;
    public description?: string;
    public status?: string;
    public message?: string;
    private 'create_time'?: number;
    public constructor() { 
        super();
    }
    public withName(name: string): CreateSaveImageJobResponse {
        this['name'] = name;
        return this;
    }
    public withNamespace(namespace: string): CreateSaveImageJobResponse {
        this['namespace'] = namespace;
        return this;
    }
    public withTag(tag: string): CreateSaveImageJobResponse {
        this['tag'] = tag;
        return this;
    }
    public withDescription(description: string): CreateSaveImageJobResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: string): CreateSaveImageJobResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): CreateSaveImageJobResponse {
        this['message'] = message;
        return this;
    }
    public withCreateTime(createTime: number): CreateSaveImageJobResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
}