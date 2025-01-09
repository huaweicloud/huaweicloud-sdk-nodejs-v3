import { User } from './User';


export class SubscribeUserSharerReq {
    private 'user_sharer_sku'?: string;
    private 'order_id'?: string;
    public users?: Array<User>;
    private 'enterprise_project_id'?: string;
    public constructor(userSharerSku?: string, users?: Array<User>, enterpriseProjectId?: string) { 
        this['user_sharer_sku'] = userSharerSku;
        this['users'] = users;
        this['enterprise_project_id'] = enterpriseProjectId;
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
    public withOrderId(orderId: string): SubscribeUserSharerReq {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withUsers(users: Array<User>): SubscribeUserSharerReq {
        this['users'] = users;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SubscribeUserSharerReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}