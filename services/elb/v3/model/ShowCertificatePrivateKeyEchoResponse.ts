
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCertificatePrivateKeyEchoResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'private_key_echo'?: boolean;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ShowCertificatePrivateKeyEchoResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPrivateKeyEcho(privateKeyEcho: boolean): ShowCertificatePrivateKeyEchoResponse {
        this['private_key_echo'] = privateKeyEcho;
        return this;
    }
    public set privateKeyEcho(privateKeyEcho: boolean  | undefined) {
        this['private_key_echo'] = privateKeyEcho;
    }
    public get privateKeyEcho(): boolean | undefined {
        return this['private_key_echo'];
    }
}