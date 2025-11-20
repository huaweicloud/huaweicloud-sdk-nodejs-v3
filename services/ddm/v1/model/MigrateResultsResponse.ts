import { MigrateDnInfoOpenResponse } from './MigrateDnInfoOpenResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class MigrateResultsResponse extends SdkResponse {
    private 'instance_name'?: string;
    private 'original_shard_num'?: number;
    private 'after_shard_num'?: number;
    private 'original_dn_info_list'?: Array<MigrateDnInfoOpenResponse>;
    private 'after_dn_info_list'?: Array<MigrateDnInfoOpenResponse>;
    private 'switch_route_is_manual'?: boolean;
    private 'auto_switch_begin_time'?: string;
    private 'auto_switch_end_time'?: string;
    private 'node_id_for_migrate'?: string;
    private 'is_exclusive'?: boolean;
    public constructor() { 
        super();
    }
    public withInstanceName(instanceName: string): MigrateResultsResponse {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withOriginalShardNum(originalShardNum: number): MigrateResultsResponse {
        this['original_shard_num'] = originalShardNum;
        return this;
    }
    public set originalShardNum(originalShardNum: number  | undefined) {
        this['original_shard_num'] = originalShardNum;
    }
    public get originalShardNum(): number | undefined {
        return this['original_shard_num'];
    }
    public withAfterShardNum(afterShardNum: number): MigrateResultsResponse {
        this['after_shard_num'] = afterShardNum;
        return this;
    }
    public set afterShardNum(afterShardNum: number  | undefined) {
        this['after_shard_num'] = afterShardNum;
    }
    public get afterShardNum(): number | undefined {
        return this['after_shard_num'];
    }
    public withOriginalDnInfoList(originalDnInfoList: Array<MigrateDnInfoOpenResponse>): MigrateResultsResponse {
        this['original_dn_info_list'] = originalDnInfoList;
        return this;
    }
    public set originalDnInfoList(originalDnInfoList: Array<MigrateDnInfoOpenResponse>  | undefined) {
        this['original_dn_info_list'] = originalDnInfoList;
    }
    public get originalDnInfoList(): Array<MigrateDnInfoOpenResponse> | undefined {
        return this['original_dn_info_list'];
    }
    public withAfterDnInfoList(afterDnInfoList: Array<MigrateDnInfoOpenResponse>): MigrateResultsResponse {
        this['after_dn_info_list'] = afterDnInfoList;
        return this;
    }
    public set afterDnInfoList(afterDnInfoList: Array<MigrateDnInfoOpenResponse>  | undefined) {
        this['after_dn_info_list'] = afterDnInfoList;
    }
    public get afterDnInfoList(): Array<MigrateDnInfoOpenResponse> | undefined {
        return this['after_dn_info_list'];
    }
    public withSwitchRouteIsManual(switchRouteIsManual: boolean): MigrateResultsResponse {
        this['switch_route_is_manual'] = switchRouteIsManual;
        return this;
    }
    public set switchRouteIsManual(switchRouteIsManual: boolean  | undefined) {
        this['switch_route_is_manual'] = switchRouteIsManual;
    }
    public get switchRouteIsManual(): boolean | undefined {
        return this['switch_route_is_manual'];
    }
    public withAutoSwitchBeginTime(autoSwitchBeginTime: string): MigrateResultsResponse {
        this['auto_switch_begin_time'] = autoSwitchBeginTime;
        return this;
    }
    public set autoSwitchBeginTime(autoSwitchBeginTime: string  | undefined) {
        this['auto_switch_begin_time'] = autoSwitchBeginTime;
    }
    public get autoSwitchBeginTime(): string | undefined {
        return this['auto_switch_begin_time'];
    }
    public withAutoSwitchEndTime(autoSwitchEndTime: string): MigrateResultsResponse {
        this['auto_switch_end_time'] = autoSwitchEndTime;
        return this;
    }
    public set autoSwitchEndTime(autoSwitchEndTime: string  | undefined) {
        this['auto_switch_end_time'] = autoSwitchEndTime;
    }
    public get autoSwitchEndTime(): string | undefined {
        return this['auto_switch_end_time'];
    }
    public withNodeIdForMigrate(nodeIdForMigrate: string): MigrateResultsResponse {
        this['node_id_for_migrate'] = nodeIdForMigrate;
        return this;
    }
    public set nodeIdForMigrate(nodeIdForMigrate: string  | undefined) {
        this['node_id_for_migrate'] = nodeIdForMigrate;
    }
    public get nodeIdForMigrate(): string | undefined {
        return this['node_id_for_migrate'];
    }
    public withIsExclusive(isExclusive: boolean): MigrateResultsResponse {
        this['is_exclusive'] = isExclusive;
        return this;
    }
    public set isExclusive(isExclusive: boolean  | undefined) {
        this['is_exclusive'] = isExclusive;
    }
    public get isExclusive(): boolean | undefined {
        return this['is_exclusive'];
    }
}