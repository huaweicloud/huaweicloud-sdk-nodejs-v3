

export class AuthorizationRequest {
    private 'user_id'?: string;
    public type?: AuthorizationRequestTypeEnum | string;
    public content?: string;
    private 'secret_key'?: string;
    private 'user_name'?: string;
    private 'user_type'?: string;
    public constructor(content?: string) { 
        this['content'] = content;
    }
    public withUserId(userId: string): AuthorizationRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withType(type: AuthorizationRequestTypeEnum | string): AuthorizationRequest {
        this['type'] = type;
        return this;
    }
    public withContent(content: string): AuthorizationRequest {
        this['content'] = content;
        return this;
    }
    public withSecretKey(secretKey: string): AuthorizationRequest {
        this['secret_key'] = secretKey;
        return this;
    }
    public set secretKey(secretKey: string  | undefined) {
        this['secret_key'] = secretKey;
    }
    public get secretKey(): string | undefined {
        return this['secret_key'];
    }
    public withUserName(userName: string): AuthorizationRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withUserType(userType: string): AuthorizationRequest {
        this['user_type'] = userType;
        return this;
    }
    public set userType(userType: string  | undefined) {
        this['user_type'] = userType;
    }
    public get userType(): string | undefined {
        return this['user_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AuthorizationRequestTypeEnum {
    AGENCY = 'agency',
    CREDENTIAL = 'credential'
}
