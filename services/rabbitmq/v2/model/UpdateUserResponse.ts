import { AMQPUserPerm } from './AMQPUserPerm';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateUserResponse extends SdkResponse {
    private 'access_key'?: string;
    private 'secret_key'?: string;
    public vhosts?: Array<AMQPUserPerm>;
    public constructor() { 
        super();
    }
    public withAccessKey(accessKey: string): UpdateUserResponse {
        this['access_key'] = accessKey;
        return this;
    }
    public set accessKey(accessKey: string  | undefined) {
        this['access_key'] = accessKey;
    }
    public get accessKey(): string | undefined {
        return this['access_key'];
    }
    public withSecretKey(secretKey: string): UpdateUserResponse {
        this['secret_key'] = secretKey;
        return this;
    }
    public set secretKey(secretKey: string  | undefined) {
        this['secret_key'] = secretKey;
    }
    public get secretKey(): string | undefined {
        return this['secret_key'];
    }
    public withVhosts(vhosts: Array<AMQPUserPerm>): UpdateUserResponse {
        this['vhosts'] = vhosts;
        return this;
    }
}