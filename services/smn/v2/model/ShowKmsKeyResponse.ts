
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowKmsKeyResponse extends SdkResponse {
    private 'key_id'?: string;
    public status?: ShowKmsKeyResponseStatusEnum | string;
    public id?: string;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withKeyId(keyId: string): ShowKmsKeyResponse {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withStatus(status: ShowKmsKeyResponseStatusEnum | string): ShowKmsKeyResponse {
        this['status'] = status;
        return this;
    }
    public withId(id: string): ShowKmsKeyResponse {
        this['id'] = id;
        return this;
    }
    public withRequestId(requestId: string): ShowKmsKeyResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowKmsKeyResponseStatusEnum {
    ENABLED = 'ENABLED',
    TO_BE_ACTIVATED = 'TO_BE_ACTIVATED',
    DISABLED = 'DISABLED',
    PENDING_DELETION = 'PENDING_DELETION',
    PENDING_IMPORT = 'PENDING_IMPORT',
    DELETED = 'DELETED'
}
