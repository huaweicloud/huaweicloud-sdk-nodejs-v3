

export class CreateAccountStatusDtoFailureDetailMsg {
    private 'error_msg'?: string;
    private 'encoded_authorization_message'?: string;
    public constructor() { 
    }
    public withErrorMsg(errorMsg: string): CreateAccountStatusDtoFailureDetailMsg {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withEncodedAuthorizationMessage(encodedAuthorizationMessage: string): CreateAccountStatusDtoFailureDetailMsg {
        this['encoded_authorization_message'] = encodedAuthorizationMessage;
        return this;
    }
    public set encodedAuthorizationMessage(encodedAuthorizationMessage: string  | undefined) {
        this['encoded_authorization_message'] = encodedAuthorizationMessage;
    }
    public get encodedAuthorizationMessage(): string | undefined {
        return this['encoded_authorization_message'];
    }
}