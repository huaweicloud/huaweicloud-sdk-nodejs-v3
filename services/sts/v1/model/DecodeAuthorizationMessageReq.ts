

export class DecodeAuthorizationMessageReq {
    private 'encoded_message'?: string;
    public constructor(encodedMessage?: string) { 
        this['encoded_message'] = encodedMessage;
    }
    public withEncodedMessage(encodedMessage: string): DecodeAuthorizationMessageReq {
        this['encoded_message'] = encodedMessage;
        return this;
    }
    public set encodedMessage(encodedMessage: string  | undefined) {
        this['encoded_message'] = encodedMessage;
    }
    public get encodedMessage(): string | undefined {
        return this['encoded_message'];
    }
}