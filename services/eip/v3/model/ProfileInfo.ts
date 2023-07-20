import { BandwidthInfoResp } from './BandwidthInfoResp';


export class ProfileInfo {
    private 'local_network_port'?: string;
    public standalone?: boolean;
    private 'notify_status'?: ProfileInfoNotifyStatusEnum | string;
    private 'create_time'?: string;
    private 'fake_network_type'?: boolean;
    private 'create_source'?: ProfileInfoCreateSourceEnum | string;
    private 'ecs_id'?: string;
    private 'lock_status'?: string;
    private 'freezed_status'?: ProfileInfoFreezedStatusEnum | string;
    private 'bandwith_info'?: BandwidthInfoResp;
    public constructor() { 
    }
    public withLocalNetworkPort(localNetworkPort: string): ProfileInfo {
        this['local_network_port'] = localNetworkPort;
        return this;
    }
    public set localNetworkPort(localNetworkPort: string  | undefined) {
        this['local_network_port'] = localNetworkPort;
    }
    public get localNetworkPort(): string | undefined {
        return this['local_network_port'];
    }
    public withStandalone(standalone: boolean): ProfileInfo {
        this['standalone'] = standalone;
        return this;
    }
    public withNotifyStatus(notifyStatus: ProfileInfoNotifyStatusEnum | string): ProfileInfo {
        this['notify_status'] = notifyStatus;
        return this;
    }
    public set notifyStatus(notifyStatus: ProfileInfoNotifyStatusEnum | string  | undefined) {
        this['notify_status'] = notifyStatus;
    }
    public get notifyStatus(): ProfileInfoNotifyStatusEnum | string | undefined {
        return this['notify_status'];
    }
    public withCreateTime(createTime: string): ProfileInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withFakeNetworkType(fakeNetworkType: boolean): ProfileInfo {
        this['fake_network_type'] = fakeNetworkType;
        return this;
    }
    public set fakeNetworkType(fakeNetworkType: boolean  | undefined) {
        this['fake_network_type'] = fakeNetworkType;
    }
    public get fakeNetworkType(): boolean | undefined {
        return this['fake_network_type'];
    }
    public withCreateSource(createSource: ProfileInfoCreateSourceEnum | string): ProfileInfo {
        this['create_source'] = createSource;
        return this;
    }
    public set createSource(createSource: ProfileInfoCreateSourceEnum | string  | undefined) {
        this['create_source'] = createSource;
    }
    public get createSource(): ProfileInfoCreateSourceEnum | string | undefined {
        return this['create_source'];
    }
    public withEcsId(ecsId: string): ProfileInfo {
        this['ecs_id'] = ecsId;
        return this;
    }
    public set ecsId(ecsId: string  | undefined) {
        this['ecs_id'] = ecsId;
    }
    public get ecsId(): string | undefined {
        return this['ecs_id'];
    }
    public withLockStatus(lockStatus: string): ProfileInfo {
        this['lock_status'] = lockStatus;
        return this;
    }
    public set lockStatus(lockStatus: string  | undefined) {
        this['lock_status'] = lockStatus;
    }
    public get lockStatus(): string | undefined {
        return this['lock_status'];
    }
    public withFreezedStatus(freezedStatus: ProfileInfoFreezedStatusEnum | string): ProfileInfo {
        this['freezed_status'] = freezedStatus;
        return this;
    }
    public set freezedStatus(freezedStatus: ProfileInfoFreezedStatusEnum | string  | undefined) {
        this['freezed_status'] = freezedStatus;
    }
    public get freezedStatus(): ProfileInfoFreezedStatusEnum | string | undefined {
        return this['freezed_status'];
    }
    public withBandwithInfo(bandwithInfo: BandwidthInfoResp): ProfileInfo {
        this['bandwith_info'] = bandwithInfo;
        return this;
    }
    public set bandwithInfo(bandwithInfo: BandwidthInfoResp  | undefined) {
        this['bandwith_info'] = bandwithInfo;
    }
    public get bandwithInfo(): BandwidthInfoResp | undefined {
        return this['bandwith_info'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ProfileInfoNotifyStatusEnum {
    PENDING_CREATE = 'PENDING_CREATE',
    PENDING_UPDATE = 'PENDING_UPDATE',
    NOTIFYING = 'NOTIFYING',
    NOTIFYED = 'NOTIFYED',
    NOTIFY_DELETE = 'NOTIFY_DELETE'
}
/**
    * @export
    * @enum {string}
    */
export enum ProfileInfoCreateSourceEnum {
    ECS = 'ecs'
}
/**
    * @export
    * @enum {string}
    */
export enum ProfileInfoFreezedStatusEnum {
    FREEZED = 'FREEZED',
    UNFREEZED = 'UNFREEZED'
}
