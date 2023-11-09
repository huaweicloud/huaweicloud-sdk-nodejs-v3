
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateHookResponse extends SdkResponse {
    public id?: string;
    public type?: string;
    private 'callback_url'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateHookResponse {
        this['id'] = id;
        return this;
    }
    public withType(type: string): CreateHookResponse {
        this['type'] = type;
        return this;
    }
    public withCallbackUrl(callbackUrl: string): CreateHookResponse {
        this['callback_url'] = callbackUrl;
        return this;
    }
    public set callbackUrl(callbackUrl: string  | undefined) {
        this['callback_url'] = callbackUrl;
    }
    public get callbackUrl(): string | undefined {
        return this['callback_url'];
    }
}