
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DecodeAuthorizationMessageResponse extends SdkResponse {
    private 'decoded_message'?: string;
    public constructor() { 
        super();
    }
    public withDecodedMessage(decodedMessage: string): DecodeAuthorizationMessageResponse {
        this['decoded_message'] = decodedMessage;
        return this;
    }
    public set decodedMessage(decodedMessage: string  | undefined) {
        this['decoded_message'] = decodedMessage;
    }
    public get decodedMessage(): string | undefined {
        return this['decoded_message'];
    }
}