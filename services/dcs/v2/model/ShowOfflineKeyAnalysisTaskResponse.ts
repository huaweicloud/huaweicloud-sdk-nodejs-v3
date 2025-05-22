import { KeyTypeByte } from './KeyTypeByte';
import { KeyTypeNum } from './KeyTypeNum';
import { LargestKey } from './LargestKey';
import { LargestKeyPrefix } from './LargestKeyPrefix';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOfflineKeyAnalysisTaskResponse extends SdkResponse {
    public id?: string;
    private 'instance_id'?: string;
    private 'node_id'?: string;
    private 'backup_id'?: string;
    private 'group_name'?: string;
    private 'node_ip'?: string;
    private 'node_ipv6'?: string;
    private 'node_type'?: string;
    private 'analysis_type'?: ShowOfflineKeyAnalysisTaskResponseAnalysisTypeEnum | string;
    private 'started_at'?: string;
    private 'finished_at'?: string;
    private 'largest_key_prefixes'?: Array<LargestKeyPrefix>;
    private 'largest_keys'?: Array<LargestKey>;
    private 'total_bytes'?: number;
    private 'total_num'?: number;
    private 'type_bytes'?: Array<KeyTypeByte>;
    private 'type_num'?: Array<KeyTypeNum>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowOfflineKeyAnalysisTaskResponse {
        this['id'] = id;
        return this;
    }
    public withInstanceId(instanceId: string): ShowOfflineKeyAnalysisTaskResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): ShowOfflineKeyAnalysisTaskResponse {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withBackupId(backupId: string): ShowOfflineKeyAnalysisTaskResponse {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withGroupName(groupName: string): ShowOfflineKeyAnalysisTaskResponse {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withNodeIp(nodeIp: string): ShowOfflineKeyAnalysisTaskResponse {
        this['node_ip'] = nodeIp;
        return this;
    }
    public set nodeIp(nodeIp: string  | undefined) {
        this['node_ip'] = nodeIp;
    }
    public get nodeIp(): string | undefined {
        return this['node_ip'];
    }
    public withNodeIpv6(nodeIpv6: string): ShowOfflineKeyAnalysisTaskResponse {
        this['node_ipv6'] = nodeIpv6;
        return this;
    }
    public set nodeIpv6(nodeIpv6: string  | undefined) {
        this['node_ipv6'] = nodeIpv6;
    }
    public get nodeIpv6(): string | undefined {
        return this['node_ipv6'];
    }
    public withNodeType(nodeType: string): ShowOfflineKeyAnalysisTaskResponse {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: string  | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType(): string | undefined {
        return this['node_type'];
    }
    public withAnalysisType(analysisType: ShowOfflineKeyAnalysisTaskResponseAnalysisTypeEnum | string): ShowOfflineKeyAnalysisTaskResponse {
        this['analysis_type'] = analysisType;
        return this;
    }
    public set analysisType(analysisType: ShowOfflineKeyAnalysisTaskResponseAnalysisTypeEnum | string  | undefined) {
        this['analysis_type'] = analysisType;
    }
    public get analysisType(): ShowOfflineKeyAnalysisTaskResponseAnalysisTypeEnum | string | undefined {
        return this['analysis_type'];
    }
    public withStartedAt(startedAt: string): ShowOfflineKeyAnalysisTaskResponse {
        this['started_at'] = startedAt;
        return this;
    }
    public set startedAt(startedAt: string  | undefined) {
        this['started_at'] = startedAt;
    }
    public get startedAt(): string | undefined {
        return this['started_at'];
    }
    public withFinishedAt(finishedAt: string): ShowOfflineKeyAnalysisTaskResponse {
        this['finished_at'] = finishedAt;
        return this;
    }
    public set finishedAt(finishedAt: string  | undefined) {
        this['finished_at'] = finishedAt;
    }
    public get finishedAt(): string | undefined {
        return this['finished_at'];
    }
    public withLargestKeyPrefixes(largestKeyPrefixes: Array<LargestKeyPrefix>): ShowOfflineKeyAnalysisTaskResponse {
        this['largest_key_prefixes'] = largestKeyPrefixes;
        return this;
    }
    public set largestKeyPrefixes(largestKeyPrefixes: Array<LargestKeyPrefix>  | undefined) {
        this['largest_key_prefixes'] = largestKeyPrefixes;
    }
    public get largestKeyPrefixes(): Array<LargestKeyPrefix> | undefined {
        return this['largest_key_prefixes'];
    }
    public withLargestKeys(largestKeys: Array<LargestKey>): ShowOfflineKeyAnalysisTaskResponse {
        this['largest_keys'] = largestKeys;
        return this;
    }
    public set largestKeys(largestKeys: Array<LargestKey>  | undefined) {
        this['largest_keys'] = largestKeys;
    }
    public get largestKeys(): Array<LargestKey> | undefined {
        return this['largest_keys'];
    }
    public withTotalBytes(totalBytes: number): ShowOfflineKeyAnalysisTaskResponse {
        this['total_bytes'] = totalBytes;
        return this;
    }
    public set totalBytes(totalBytes: number  | undefined) {
        this['total_bytes'] = totalBytes;
    }
    public get totalBytes(): number | undefined {
        return this['total_bytes'];
    }
    public withTotalNum(totalNum: number): ShowOfflineKeyAnalysisTaskResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withTypeBytes(typeBytes: Array<KeyTypeByte>): ShowOfflineKeyAnalysisTaskResponse {
        this['type_bytes'] = typeBytes;
        return this;
    }
    public set typeBytes(typeBytes: Array<KeyTypeByte>  | undefined) {
        this['type_bytes'] = typeBytes;
    }
    public get typeBytes(): Array<KeyTypeByte> | undefined {
        return this['type_bytes'];
    }
    public withTypeNum(typeNum: Array<KeyTypeNum>): ShowOfflineKeyAnalysisTaskResponse {
        this['type_num'] = typeNum;
        return this;
    }
    public set typeNum(typeNum: Array<KeyTypeNum>  | undefined) {
        this['type_num'] = typeNum;
    }
    public get typeNum(): Array<KeyTypeNum> | undefined {
        return this['type_num'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowOfflineKeyAnalysisTaskResponseAnalysisTypeEnum {
    NEW_BACKUP = 'new_backup',
    OLD_BACKUP = 'old_backup'
}
