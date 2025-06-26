import { CloneServer } from './CloneServer';
import { TargetServerById } from './TargetServerById';


export class TaskByServerSources {
    public id?: string;
    public name?: string;
    public type?: string;
    public state?: string;
    private 'estimate_complete_time'?: number;
    private 'start_date'?: number;
    private 'speed_limit'?: number;
    private 'migrate_speed'?: number;
    private 'compress_rate'?: number;
    private 'start_target_server'?: boolean;
    private 'vm_template_id'?: string;
    private 'region_id'?: string;
    private 'project_name'?: string;
    private 'project_id'?: string;
    private 'target_server'?: TargetServerById;
    private 'log_collect_status'?: string;
    private 'exist_server'?: boolean;
    private 'use_public_ip'?: boolean;
    private 'clone_server'?: CloneServer;
    private 'remain_seconds'?: number;
    private 'log_bucket'?: string;
    private 'log_expire'?: number;
    private 'log_upload_time'?: number;
    private 'log_share_url'?: string;
    public constructor() { 
    }
    public withId(id: string): TaskByServerSources {
        this['id'] = id;
        return this;
    }
    public withName(name: string): TaskByServerSources {
        this['name'] = name;
        return this;
    }
    public withType(type: string): TaskByServerSources {
        this['type'] = type;
        return this;
    }
    public withState(state: string): TaskByServerSources {
        this['state'] = state;
        return this;
    }
    public withEstimateCompleteTime(estimateCompleteTime: number): TaskByServerSources {
        this['estimate_complete_time'] = estimateCompleteTime;
        return this;
    }
    public set estimateCompleteTime(estimateCompleteTime: number  | undefined) {
        this['estimate_complete_time'] = estimateCompleteTime;
    }
    public get estimateCompleteTime(): number | undefined {
        return this['estimate_complete_time'];
    }
    public withStartDate(startDate: number): TaskByServerSources {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: number  | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate(): number | undefined {
        return this['start_date'];
    }
    public withSpeedLimit(speedLimit: number): TaskByServerSources {
        this['speed_limit'] = speedLimit;
        return this;
    }
    public set speedLimit(speedLimit: number  | undefined) {
        this['speed_limit'] = speedLimit;
    }
    public get speedLimit(): number | undefined {
        return this['speed_limit'];
    }
    public withMigrateSpeed(migrateSpeed: number): TaskByServerSources {
        this['migrate_speed'] = migrateSpeed;
        return this;
    }
    public set migrateSpeed(migrateSpeed: number  | undefined) {
        this['migrate_speed'] = migrateSpeed;
    }
    public get migrateSpeed(): number | undefined {
        return this['migrate_speed'];
    }
    public withCompressRate(compressRate: number): TaskByServerSources {
        this['compress_rate'] = compressRate;
        return this;
    }
    public set compressRate(compressRate: number  | undefined) {
        this['compress_rate'] = compressRate;
    }
    public get compressRate(): number | undefined {
        return this['compress_rate'];
    }
    public withStartTargetServer(startTargetServer: boolean): TaskByServerSources {
        this['start_target_server'] = startTargetServer;
        return this;
    }
    public set startTargetServer(startTargetServer: boolean  | undefined) {
        this['start_target_server'] = startTargetServer;
    }
    public get startTargetServer(): boolean | undefined {
        return this['start_target_server'];
    }
    public withVmTemplateId(vmTemplateId: string): TaskByServerSources {
        this['vm_template_id'] = vmTemplateId;
        return this;
    }
    public set vmTemplateId(vmTemplateId: string  | undefined) {
        this['vm_template_id'] = vmTemplateId;
    }
    public get vmTemplateId(): string | undefined {
        return this['vm_template_id'];
    }
    public withRegionId(regionId: string): TaskByServerSources {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withProjectName(projectName: string): TaskByServerSources {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withProjectId(projectId: string): TaskByServerSources {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTargetServer(targetServer: TargetServerById): TaskByServerSources {
        this['target_server'] = targetServer;
        return this;
    }
    public set targetServer(targetServer: TargetServerById  | undefined) {
        this['target_server'] = targetServer;
    }
    public get targetServer(): TargetServerById | undefined {
        return this['target_server'];
    }
    public withLogCollectStatus(logCollectStatus: string): TaskByServerSources {
        this['log_collect_status'] = logCollectStatus;
        return this;
    }
    public set logCollectStatus(logCollectStatus: string  | undefined) {
        this['log_collect_status'] = logCollectStatus;
    }
    public get logCollectStatus(): string | undefined {
        return this['log_collect_status'];
    }
    public withExistServer(existServer: boolean): TaskByServerSources {
        this['exist_server'] = existServer;
        return this;
    }
    public set existServer(existServer: boolean  | undefined) {
        this['exist_server'] = existServer;
    }
    public get existServer(): boolean | undefined {
        return this['exist_server'];
    }
    public withUsePublicIp(usePublicIp: boolean): TaskByServerSources {
        this['use_public_ip'] = usePublicIp;
        return this;
    }
    public set usePublicIp(usePublicIp: boolean  | undefined) {
        this['use_public_ip'] = usePublicIp;
    }
    public get usePublicIp(): boolean | undefined {
        return this['use_public_ip'];
    }
    public withCloneServer(cloneServer: CloneServer): TaskByServerSources {
        this['clone_server'] = cloneServer;
        return this;
    }
    public set cloneServer(cloneServer: CloneServer  | undefined) {
        this['clone_server'] = cloneServer;
    }
    public get cloneServer(): CloneServer | undefined {
        return this['clone_server'];
    }
    public withRemainSeconds(remainSeconds: number): TaskByServerSources {
        this['remain_seconds'] = remainSeconds;
        return this;
    }
    public set remainSeconds(remainSeconds: number  | undefined) {
        this['remain_seconds'] = remainSeconds;
    }
    public get remainSeconds(): number | undefined {
        return this['remain_seconds'];
    }
    public withLogBucket(logBucket: string): TaskByServerSources {
        this['log_bucket'] = logBucket;
        return this;
    }
    public set logBucket(logBucket: string  | undefined) {
        this['log_bucket'] = logBucket;
    }
    public get logBucket(): string | undefined {
        return this['log_bucket'];
    }
    public withLogExpire(logExpire: number): TaskByServerSources {
        this['log_expire'] = logExpire;
        return this;
    }
    public set logExpire(logExpire: number  | undefined) {
        this['log_expire'] = logExpire;
    }
    public get logExpire(): number | undefined {
        return this['log_expire'];
    }
    public withLogUploadTime(logUploadTime: number): TaskByServerSources {
        this['log_upload_time'] = logUploadTime;
        return this;
    }
    public set logUploadTime(logUploadTime: number  | undefined) {
        this['log_upload_time'] = logUploadTime;
    }
    public get logUploadTime(): number | undefined {
        return this['log_upload_time'];
    }
    public withLogShareUrl(logShareUrl: string): TaskByServerSources {
        this['log_share_url'] = logShareUrl;
        return this;
    }
    public set logShareUrl(logShareUrl: string  | undefined) {
        this['log_share_url'] = logShareUrl;
    }
    public get logShareUrl(): string | undefined {
        return this['log_share_url'];
    }
}