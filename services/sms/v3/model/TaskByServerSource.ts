import { CloneServer } from './CloneServer';
import { TargetServerById } from './TargetServerById';


export class TaskByServerSource {
    public id?: string;
    public name?: string;
    public type?: string;
    public state?: string;
    private 'start_date'?: number | undefined;
    private 'speed_limit'?: number | undefined;
    private 'migrate_speed'?: number | undefined;
    private 'start_target_server'?: boolean | undefined;
    private 'vm_template_id'?: string | undefined;
    private 'region_id'?: string | undefined;
    private 'project_name'?: string | undefined;
    private 'project_id'?: string | undefined;
    private 'target_server'?: TargetServerById | undefined;
    private 'log_collect_status'?: string | undefined;
    private 'exist_server'?: boolean | undefined;
    private 'use_public_ip'?: boolean | undefined;
    private 'clone_server'?: CloneServer | undefined;
    public constructor() { 
    }
    public withId(id: string): TaskByServerSource {
        this['id'] = id;
        return this;
    }
    public withName(name: string): TaskByServerSource {
        this['name'] = name;
        return this;
    }
    public withType(type: string): TaskByServerSource {
        this['type'] = type;
        return this;
    }
    public withState(state: string): TaskByServerSource {
        this['state'] = state;
        return this;
    }
    public withStartDate(startDate: number): TaskByServerSource {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: number | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate() {
        return this['start_date'];
    }
    public withSpeedLimit(speedLimit: number): TaskByServerSource {
        this['speed_limit'] = speedLimit;
        return this;
    }
    public set speedLimit(speedLimit: number | undefined) {
        this['speed_limit'] = speedLimit;
    }
    public get speedLimit() {
        return this['speed_limit'];
    }
    public withMigrateSpeed(migrateSpeed: number): TaskByServerSource {
        this['migrate_speed'] = migrateSpeed;
        return this;
    }
    public set migrateSpeed(migrateSpeed: number | undefined) {
        this['migrate_speed'] = migrateSpeed;
    }
    public get migrateSpeed() {
        return this['migrate_speed'];
    }
    public withStartTargetServer(startTargetServer: boolean): TaskByServerSource {
        this['start_target_server'] = startTargetServer;
        return this;
    }
    public set startTargetServer(startTargetServer: boolean | undefined) {
        this['start_target_server'] = startTargetServer;
    }
    public get startTargetServer() {
        return this['start_target_server'];
    }
    public withVmTemplateId(vmTemplateId: string): TaskByServerSource {
        this['vm_template_id'] = vmTemplateId;
        return this;
    }
    public set vmTemplateId(vmTemplateId: string | undefined) {
        this['vm_template_id'] = vmTemplateId;
    }
    public get vmTemplateId() {
        return this['vm_template_id'];
    }
    public withRegionId(regionId: string): TaskByServerSource {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId() {
        return this['region_id'];
    }
    public withProjectName(projectName: string): TaskByServerSource {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName() {
        return this['project_name'];
    }
    public withProjectId(projectId: string): TaskByServerSource {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withTargetServer(targetServer: TargetServerById): TaskByServerSource {
        this['target_server'] = targetServer;
        return this;
    }
    public set targetServer(targetServer: TargetServerById | undefined) {
        this['target_server'] = targetServer;
    }
    public get targetServer() {
        return this['target_server'];
    }
    public withLogCollectStatus(logCollectStatus: string): TaskByServerSource {
        this['log_collect_status'] = logCollectStatus;
        return this;
    }
    public set logCollectStatus(logCollectStatus: string | undefined) {
        this['log_collect_status'] = logCollectStatus;
    }
    public get logCollectStatus() {
        return this['log_collect_status'];
    }
    public withExistServer(existServer: boolean): TaskByServerSource {
        this['exist_server'] = existServer;
        return this;
    }
    public set existServer(existServer: boolean | undefined) {
        this['exist_server'] = existServer;
    }
    public get existServer() {
        return this['exist_server'];
    }
    public withUsePublicIp(usePublicIp: boolean): TaskByServerSource {
        this['use_public_ip'] = usePublicIp;
        return this;
    }
    public set usePublicIp(usePublicIp: boolean | undefined) {
        this['use_public_ip'] = usePublicIp;
    }
    public get usePublicIp() {
        return this['use_public_ip'];
    }
    public withCloneServer(cloneServer: CloneServer): TaskByServerSource {
        this['clone_server'] = cloneServer;
        return this;
    }
    public set cloneServer(cloneServer: CloneServer | undefined) {
        this['clone_server'] = cloneServer;
    }
    public get cloneServer() {
        return this['clone_server'];
    }
}