import { DisasterRecoveryCluster } from './DisasterRecoveryCluster';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDisasterDetailResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'dr_type'?: string | undefined;
    public status?: string;
    private 'primary_cluster'?: DisasterRecoveryCluster | undefined;
    private 'standby_cluster'?: DisasterRecoveryCluster | undefined;
    private 'dr_sync_period'?: string | undefined;
    private 'start_time'?: string | undefined;
    private 'create_time'?: string | undefined;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowDisasterDetailResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowDisasterDetailResponse {
        this['name'] = name;
        return this;
    }
    public withDrType(drType: string): ShowDisasterDetailResponse {
        this['dr_type'] = drType;
        return this;
    }
    public set drType(drType: string | undefined) {
        this['dr_type'] = drType;
    }
    public get drType() {
        return this['dr_type'];
    }
    public withStatus(status: string): ShowDisasterDetailResponse {
        this['status'] = status;
        return this;
    }
    public withPrimaryCluster(primaryCluster: DisasterRecoveryCluster): ShowDisasterDetailResponse {
        this['primary_cluster'] = primaryCluster;
        return this;
    }
    public set primaryCluster(primaryCluster: DisasterRecoveryCluster | undefined) {
        this['primary_cluster'] = primaryCluster;
    }
    public get primaryCluster() {
        return this['primary_cluster'];
    }
    public withStandbyCluster(standbyCluster: DisasterRecoveryCluster): ShowDisasterDetailResponse {
        this['standby_cluster'] = standbyCluster;
        return this;
    }
    public set standbyCluster(standbyCluster: DisasterRecoveryCluster | undefined) {
        this['standby_cluster'] = standbyCluster;
    }
    public get standbyCluster() {
        return this['standby_cluster'];
    }
    public withDrSyncPeriod(drSyncPeriod: string): ShowDisasterDetailResponse {
        this['dr_sync_period'] = drSyncPeriod;
        return this;
    }
    public set drSyncPeriod(drSyncPeriod: string | undefined) {
        this['dr_sync_period'] = drSyncPeriod;
    }
    public get drSyncPeriod() {
        return this['dr_sync_period'];
    }
    public withStartTime(startTime: string): ShowDisasterDetailResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withCreateTime(createTime: string): ShowDisasterDetailResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
}