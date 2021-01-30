import { KeystoneUpdateUserByAdminRequestBody } from './KeystoneUpdateUserByAdminRequestBody';


export class KeystoneUpdateUserByAdminRequest {
    private 'user_id': string | undefined;
    public body?: KeystoneUpdateUserByAdminRequestBody;
    public constructor(userId: any) { 
        this['user_id'] = userId;
    }
    public withUserId(userId: string): KeystoneUpdateUserByAdminRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string | undefined) {
        this['user_id'] = userId;
    }
    public get userId() {
        return this['user_id'];
    }
    public withBody(body: KeystoneUpdateUserByAdminRequestBody): KeystoneUpdateUserByAdminRequest {
        this['body'] = body;
        return this;
    }
}