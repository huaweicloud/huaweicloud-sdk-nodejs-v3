

export class RTCUserInfo {
    private 'user_type'?: RTCUserInfoUserTypeEnum | string;
    private 'user_id'?: string;
    public signature?: string;
    public ctime?: number;
    public constructor() { 
    }
    public withUserType(userType: RTCUserInfoUserTypeEnum | string): RTCUserInfo {
        this['user_type'] = userType;
        return this;
    }
    public set userType(userType: RTCUserInfoUserTypeEnum | string  | undefined) {
        this['user_type'] = userType;
    }
    public get userType(): RTCUserInfoUserTypeEnum | string | undefined {
        return this['user_type'];
    }
    public withUserId(userId: string): RTCUserInfo {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withSignature(signature: string): RTCUserInfo {
        this['signature'] = signature;
        return this;
    }
    public withCtime(ctime: number): RTCUserInfo {
        this['ctime'] = ctime;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RTCUserInfoUserTypeEnum {
    CAPTURE = 'CAPTURE',
    ANIMATION = 'ANIMATION',
    RENDER = 'RENDER',
    PLAYER = 'PLAYER',
    INFERENCE_USER = 'INFERENCE_USER',
    END_USER = 'END_USER'
}
