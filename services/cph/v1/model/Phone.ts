import { PhoneMetadata } from './PhoneMetadata';


export class Phone {
    private 'phone_name'?: string;
    private 'server_id'?: string;
    private 'phone_id'?: string;
    private 'phone_model_name'?: string;
    private 'image_id'?: string;
    private 'image_version'?: string;
    private 'vnc_enable'?: string;
    public status?: number;
    public type?: number;
    public imei?: string;
    private 'traffic_type'?: string;
    private 'volume_mode'?: number;
    private 'availability_zone'?: string;
    public metadata?: PhoneMetadata;
    private 'has_encrypt'?: boolean;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withPhoneName(phoneName: string): Phone {
        this['phone_name'] = phoneName;
        return this;
    }
    public set phoneName(phoneName: string  | undefined) {
        this['phone_name'] = phoneName;
    }
    public get phoneName(): string | undefined {
        return this['phone_name'];
    }
    public withServerId(serverId: string): Phone {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withPhoneId(phoneId: string): Phone {
        this['phone_id'] = phoneId;
        return this;
    }
    public set phoneId(phoneId: string  | undefined) {
        this['phone_id'] = phoneId;
    }
    public get phoneId(): string | undefined {
        return this['phone_id'];
    }
    public withPhoneModelName(phoneModelName: string): Phone {
        this['phone_model_name'] = phoneModelName;
        return this;
    }
    public set phoneModelName(phoneModelName: string  | undefined) {
        this['phone_model_name'] = phoneModelName;
    }
    public get phoneModelName(): string | undefined {
        return this['phone_model_name'];
    }
    public withImageId(imageId: string): Phone {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withImageVersion(imageVersion: string): Phone {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withVncEnable(vncEnable: string): Phone {
        this['vnc_enable'] = vncEnable;
        return this;
    }
    public set vncEnable(vncEnable: string  | undefined) {
        this['vnc_enable'] = vncEnable;
    }
    public get vncEnable(): string | undefined {
        return this['vnc_enable'];
    }
    public withStatus(status: number): Phone {
        this['status'] = status;
        return this;
    }
    public withType(type: number): Phone {
        this['type'] = type;
        return this;
    }
    public withImei(imei: string): Phone {
        this['imei'] = imei;
        return this;
    }
    public withTrafficType(trafficType: string): Phone {
        this['traffic_type'] = trafficType;
        return this;
    }
    public set trafficType(trafficType: string  | undefined) {
        this['traffic_type'] = trafficType;
    }
    public get trafficType(): string | undefined {
        return this['traffic_type'];
    }
    public withVolumeMode(volumeMode: number): Phone {
        this['volume_mode'] = volumeMode;
        return this;
    }
    public set volumeMode(volumeMode: number  | undefined) {
        this['volume_mode'] = volumeMode;
    }
    public get volumeMode(): number | undefined {
        return this['volume_mode'];
    }
    public withAvailabilityZone(availabilityZone: string): Phone {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withMetadata(metadata: PhoneMetadata): Phone {
        this['metadata'] = metadata;
        return this;
    }
    public withHasEncrypt(hasEncrypt: boolean): Phone {
        this['has_encrypt'] = hasEncrypt;
        return this;
    }
    public set hasEncrypt(hasEncrypt: boolean  | undefined) {
        this['has_encrypt'] = hasEncrypt;
    }
    public get hasEncrypt(): boolean | undefined {
        return this['has_encrypt'];
    }
    public withCreateTime(createTime: string): Phone {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): Phone {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}