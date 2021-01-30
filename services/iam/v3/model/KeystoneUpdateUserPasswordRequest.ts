import { KeystoneUpdateUserPasswordRequestBody } from './KeystoneUpdateUserPasswordRequestBody';


export class KeystoneUpdateUserPasswordRequest {
    private 'user_id': string | undefined;
    public body?: KeystoneUpdateUserPasswordRequestBody;
    public constructor(userId: any) { 
        this['user_id'] = userId;
    }
    public withUserId(userId: string): KeystoneUpdateUserPasswordRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string | undefined) {
        this['user_id'] = userId;
    }
    public get userId() {
        return this['user_id'];
    }
    public withBody(body: KeystoneUpdateUserPasswordRequestBody): KeystoneUpdateUserPasswordRequest {
        this['body'] = body;
        return this;
    }
}