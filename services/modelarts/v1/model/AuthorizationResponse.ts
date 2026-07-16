import { AuthorizationRequest } from './AuthorizationRequest';


export class AuthorizationResponse {
    private 'user_id'?: string;
    public type?: AuthorizationResponseTypeEnum | string;
    public content?: string;
    private 'secret_key'?: string;
    private 'user_name'?: string;
    private 'user_type'?: string;
    private 'create_time'?: number;
    public constructor(content?: string) { 
        this['content'] = content;
    }
    public withUserId(userId: string): AuthorizationResponse {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withType(type: AuthorizationResponseTypeEnum | string): AuthorizationResponse {
        this['type'] = type;
        return this;
    }
    public withContent(content: string): AuthorizationResponse {
        this['content'] = content;
        return this;
    }
    public withSecretKey(secretKey: string): AuthorizationResponse {
        this['secret_key'] = secretKey;
        return this;
    }
    public set secretKey(secretKey: string  | undefined) {
        this['secret_key'] = secretKey;
    }
    public get secretKey(): string | undefined {
        return this['secret_key'];
    }
    public withUserName(userName: string): AuthorizationResponse {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withUserType(userType: string): AuthorizationResponse {
        this['user_type'] = userType;
        return this;
    }
    public set userType(userType: string  | undefined) {
        this['user_type'] = userType;
    }
    public get userType(): string | undefined {
        return this['user_type'];
    }
    public withCreateTime(createTime: number): AuthorizationResponse {
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

/**
    * @export
    * @enum {string}
    */
export enum AuthorizationResponseTypeEnum {
    AGENCY = 'agency',
    CREDENTIAL = 'credential'
}
