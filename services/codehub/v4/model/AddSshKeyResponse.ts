
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddSshKeyResponse extends SdkResponse {
    public id?: number;
    public title?: string;
    public key?: string;
    private 'created_at'?: string;
    public constructor() { 
        super();
    }
    public withId(id: number): AddSshKeyResponse {
        this['id'] = id;
        return this;
    }
    public withTitle(title: string): AddSshKeyResponse {
        this['title'] = title;
        return this;
    }
    public withKey(key: string): AddSshKeyResponse {
        this['key'] = key;
        return this;
    }
    public withCreatedAt(createdAt: string): AddSshKeyResponse {
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