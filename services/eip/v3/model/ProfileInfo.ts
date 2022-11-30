import { BandwidthInfoResp } from './BandwidthInfoResp';


export class ProfileInfo {
    private 'local_network_port'?: string | undefined;
    public standalone?: boolean;
    private 'notify_status'?: ProfileInfoNotifyStatusEnum | undefined;
    private 'create_time'?: string | undefined;
    private 'fake_network_type'?: boolean | undefined;
    private 'create_source'?: ProfileInfoCreateSourceEnum | undefined;
    private 'ecs_id'?: string | undefined;
    private 'lock_status'?: string | undefined;
    private 'freezed_status'?: ProfileInfoFreezedStatusEnum | undefined;
    private 'bandwith_info'?: BandwidthInfoResp | undefined;
    public constructor() { 
    }
    public withLocalNetworkPort(localNetworkPort: string): ProfileInfo {
        this['local_network_port'] = localNetworkPort;
        return this;
    }
    public set localNetworkPort(localNetworkPort: string | undefined) {
        this['local_network_port'] = localNetworkPort;
    }
    public get localNetworkPort() {
        return this['local_network_port'];
    }
    public withStandalone(standalone: boolean): ProfileInfo {
        this['standalone'] = standalone;
        return this;
    }
    public withNotifyStatus(notifyStatus: ProfileInfoNotifyStatusEnum): ProfileInfo {
        this['notify_status'] = notifyStatus;
        return this;
    }
    public set notifyStatus(notifyStatus: ProfileInfoNotifyStatusEnum | undefined) {
        this['notify_status'] = notifyStatus;
    }
    public get notifyStatus() {
        return this['notify_status'];
    }
    public withCreateTime(createTime: string): ProfileInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withFakeNetworkType(fakeNetworkType: boolean): ProfileInfo {
        this['fake_network_type'] = fakeNetworkType;
        return this;
    }
    public set fakeNetworkType(fakeNetworkType: boolean | undefined) {
        this['fake_network_type'] = fakeNetworkType;
    }
    public get fakeNetworkType() {
        return this['fake_network_type'];
    }
    public withCreateSource(createSource: ProfileInfoCreateSourceEnum): ProfileInfo {
        this['create_source'] = createSource;
        return this;
    }
    public set createSource(createSource: ProfileInfoCreateSourceEnum | undefined) {
        this['create_source'] = createSource;
    }
    public get createSource() {
        return this['create_source'];
    }
    public withEcsId(ecsId: string): ProfileInfo {
        this['ecs_id'] = ecsId;
        return this;
    }
    public set ecsId(ecsId: string | undefined) {
        this['ecs_id'] = ecsId;
    }
    public get ecsId() {
        return this['ecs_id'];
    }
    public withLockStatus(lockStatus: string): ProfileInfo {
        this['lock_status'] = lockStatus;
        return this;
    }
    public set lockStatus(lockStatus: string | undefined) {
        this['lock_status'] = lockStatus;
    }
    public get lockStatus() {
        return this['lock_status'];
    }
    public withFreezedStatus(freezedStatus: ProfileInfoFreezedStatusEnum): ProfileInfo {
        this['freezed_status'] = freezedStatus;
        return this;
    }
    public set freezedStatus(freezedStatus: ProfileInfoFreezedStatusEnum | undefined) {
        this['freezed_status'] = freezedStatus;
    }
    public get freezedStatus() {
        return this['freezed_status'];
    }
    public withBandwithInfo(bandwithInfo: BandwidthInfoResp): ProfileInfo {
        this['bandwith_info'] = bandwithInfo;
        return this;
    }
    public set bandwithInfo(bandwithInfo: BandwidthInfoResp | undefined) {
        this['bandwith_info'] = bandwithInfo;
    }
    public get bandwithInfo() {
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
