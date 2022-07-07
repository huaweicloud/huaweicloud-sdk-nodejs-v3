

export class MemberStatus {
    private 'listener_id': string | undefined;
    private 'operating_status': string | undefined;
    public constructor(listenerId?: any, operatingStatus?: any) { 
        this['listener_id'] = listenerId;
        this['operating_status'] = operatingStatus;
    }
    public withListenerId(listenerId: string): MemberStatus {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId() {
        return this['listener_id'];
    }
    public withOperatingStatus(operatingStatus: string): MemberStatus {
        this['operating_status'] = operatingStatus;
        return this;
    }
    public set operatingStatus(operatingStatus: string | undefined) {
        this['operating_status'] = operatingStatus;
    }
    public get operatingStatus() {
        return this['operating_status'];
    }
}