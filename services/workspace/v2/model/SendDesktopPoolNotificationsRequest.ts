import { SendDesktopPoolNotificationsReq } from './SendDesktopPoolNotificationsReq';


export class SendDesktopPoolNotificationsRequest {
    private 'pool_id'?: string;
    public body?: SendDesktopPoolNotificationsReq;
    public constructor(poolId?: string) { 
        this['pool_id'] = poolId;
    }
    public withPoolId(poolId: string): SendDesktopPoolNotificationsRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withBody(body: SendDesktopPoolNotificationsReq): SendDesktopPoolNotificationsRequest {
        this['body'] = body;
        return this;
    }
}