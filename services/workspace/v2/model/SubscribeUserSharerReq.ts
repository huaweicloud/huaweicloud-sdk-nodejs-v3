import { SubscribeUserInfo } from './SubscribeUserInfo';


export class SubscribeUserSharerReq {
    private 'user_sharer_sku'?: string;
    public users?: Array<SubscribeUserInfo>;
    public constructor(userSharerSku?: string, users?: Array<SubscribeUserInfo>) { 
        this['user_sharer_sku'] = userSharerSku;
        this['users'] = users;
    }
    public withUserSharerSku(userSharerSku: string): SubscribeUserSharerReq {
        this['user_sharer_sku'] = userSharerSku;
        return this;
    }
    public set userSharerSku(userSharerSku: string  | undefined) {
        this['user_sharer_sku'] = userSharerSku;
    }
    public get userSharerSku(): string | undefined {
        return this['user_sharer_sku'];
    }
    public withUsers(users: Array<SubscribeUserInfo>): SubscribeUserSharerReq {
        this['users'] = users;
        return this;
    }
}