import { MemberHealthCheckFailedReason } from './MemberHealthCheckFailedReason';


export class MemberStatus {
    private 'listener_id'?: string;
    private 'operating_status'?: string;
    public reason?: MemberHealthCheckFailedReason;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor(listenerId?: string, operatingStatus?: string) { 
        this['listener_id'] = listenerId;
        this['operating_status'] = operatingStatus;
    }
    public withListenerId(listenerId: string): MemberStatus {
        this['listener_id'] = listenerId;
        return this;
    }
    public set listenerId(listenerId: string  | undefined) {
        this['listener_id'] = listenerId;
    }
    public get listenerId(): string | undefined {
        return this['listener_id'];
    }
    public withOperatingStatus(operatingStatus: string): MemberStatus {
        this['operating_status'] = operatingStatus;
        return this;
    }
    public set operatingStatus(operatingStatus: string  | undefined) {
        this['operating_status'] = operatingStatus;
    }
    public get operatingStatus(): string | undefined {
        return this['operating_status'];
    }
    public withReason(reason: MemberHealthCheckFailedReason): MemberStatus {
        this['reason'] = reason;
        return this;
    }
    public withCreatedAt(createdAt: string): MemberStatus {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): MemberStatus {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}