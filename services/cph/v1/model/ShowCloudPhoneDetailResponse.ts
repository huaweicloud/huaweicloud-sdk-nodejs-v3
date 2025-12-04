import { PhoneAccessInfo } from './PhoneAccessInfo';
import { PhoneDataVolume } from './PhoneDataVolume';
import { ShowCloudPhoneDetailResponseBodyMetadata } from './ShowCloudPhoneDetailResponseBodyMetadata';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCloudPhoneDetailResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'phone_name'?: string;
    private 'server_id'?: string;
    private 'phone_id'?: string;
    private 'image_id'?: string;
    private 'image_version'?: string;
    private 'vnc_enable'?: string;
    private 'phone_model_name'?: string;
    public status?: number;
    private 'access_infos'?: Array<PhoneAccessInfo>;
    public property?: string;
    public metadata?: ShowCloudPhoneDetailResponseBodyMetadata;
    private 'phone_data_volume'?: PhoneDataVolume;
    public imei?: string;
    public type?: number;
    private 'traffic_type'?: string;
    private 'volume_mode'?: number;
    private 'availability_zone'?: string;
    private 'has_encrypt'?: boolean;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ShowCloudPhoneDetailResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPhoneName(phoneName: string): ShowCloudPhoneDetailResponse {
        this['phone_name'] = phoneName;
        return this;
    }
    public set phoneName(phoneName: string  | undefined) {
        this['phone_name'] = phoneName;
    }
    public get phoneName(): string | undefined {
        return this['phone_name'];
    }
    public withServerId(serverId: string): ShowCloudPhoneDetailResponse {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withPhoneId(phoneId: string): ShowCloudPhoneDetailResponse {
        this['phone_id'] = phoneId;
        return this;
    }
    public set phoneId(phoneId: string  | undefined) {
        this['phone_id'] = phoneId;
    }
    public get phoneId(): string | undefined {
        return this['phone_id'];
    }
    public withImageId(imageId: string): ShowCloudPhoneDetailResponse {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withImageVersion(imageVersion: string): ShowCloudPhoneDetailResponse {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withVncEnable(vncEnable: string): ShowCloudPhoneDetailResponse {
        this['vnc_enable'] = vncEnable;
        return this;
    }
    public set vncEnable(vncEnable: string  | undefined) {
        this['vnc_enable'] = vncEnable;
    }
    public get vncEnable(): string | undefined {
        return this['vnc_enable'];
    }
    public withPhoneModelName(phoneModelName: string): ShowCloudPhoneDetailResponse {
        this['phone_model_name'] = phoneModelName;
        return this;
    }
    public set phoneModelName(phoneModelName: string  | undefined) {
        this['phone_model_name'] = phoneModelName;
    }
    public get phoneModelName(): string | undefined {
        return this['phone_model_name'];
    }
    public withStatus(status: number): ShowCloudPhoneDetailResponse {
        this['status'] = status;
        return this;
    }
    public withAccessInfos(accessInfos: Array<PhoneAccessInfo>): ShowCloudPhoneDetailResponse {
        this['access_infos'] = accessInfos;
        return this;
    }
    public set accessInfos(accessInfos: Array<PhoneAccessInfo>  | undefined) {
        this['access_infos'] = accessInfos;
    }
    public get accessInfos(): Array<PhoneAccessInfo> | undefined {
        return this['access_infos'];
    }
    public withProperty(property: string): ShowCloudPhoneDetailResponse {
        this['property'] = property;
        return this;
    }
    public withMetadata(metadata: ShowCloudPhoneDetailResponseBodyMetadata): ShowCloudPhoneDetailResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withPhoneDataVolume(phoneDataVolume: PhoneDataVolume): ShowCloudPhoneDetailResponse {
        this['phone_data_volume'] = phoneDataVolume;
        return this;
    }
    public set phoneDataVolume(phoneDataVolume: PhoneDataVolume  | undefined) {
        this['phone_data_volume'] = phoneDataVolume;
    }
    public get phoneDataVolume(): PhoneDataVolume | undefined {
        return this['phone_data_volume'];
    }
    public withImei(imei: string): ShowCloudPhoneDetailResponse {
        this['imei'] = imei;
        return this;
    }
    public withType(type: number): ShowCloudPhoneDetailResponse {
        this['type'] = type;
        return this;
    }
    public withTrafficType(trafficType: string): ShowCloudPhoneDetailResponse {
        this['traffic_type'] = trafficType;
        return this;
    }
    public set trafficType(trafficType: string  | undefined) {
        this['traffic_type'] = trafficType;
    }
    public get trafficType(): string | undefined {
        return this['traffic_type'];
    }
    public withVolumeMode(volumeMode: number): ShowCloudPhoneDetailResponse {
        this['volume_mode'] = volumeMode;
        return this;
    }
    public set volumeMode(volumeMode: number  | undefined) {
        this['volume_mode'] = volumeMode;
    }
    public get volumeMode(): number | undefined {
        return this['volume_mode'];
    }
    public withAvailabilityZone(availabilityZone: string): ShowCloudPhoneDetailResponse {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withHasEncrypt(hasEncrypt: boolean): ShowCloudPhoneDetailResponse {
        this['has_encrypt'] = hasEncrypt;
        return this;
    }
    public set hasEncrypt(hasEncrypt: boolean  | undefined) {
        this['has_encrypt'] = hasEncrypt;
    }
    public get hasEncrypt(): boolean | undefined {
        return this['has_encrypt'];
    }
    public withCreateTime(createTime: string): ShowCloudPhoneDetailResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowCloudPhoneDetailResponse {
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