import { WarRoomEnumeration } from './WarRoomEnumeration';
import { WarRoomIncident } from './WarRoomIncident';
import { WarRoomTenantInfoImpactedApplication } from './WarRoomTenantInfoImpactedApplication';
import { WarRoomTenantInfoRegions } from './WarRoomTenantInfoRegions';


export class WarRoomTenantInfo {
    public id?: string;
    public title?: string;
    public admin?: string;
    private 'recover_member'?: Array<string>;
    private 'recover_leader'?: Array<string>;
    public incident?: WarRoomIncident;
    public source?: string;
    public regions?: Array<WarRoomTenantInfoRegions>;
    private 'change_num'?: string;
    private 'occur_time'?: number;
    private 'recover_time'?: number;
    private 'fault_cause'?: string;
    private 'create_time'?: number;
    private 'first_report_time'?: number;
    private 'recovery_notification_time'?: number;
    private 'fault_impact'?: string;
    public description?: string;
    private 'circular_level'?: string;
    private 'war_room_status'?: WarRoomEnumeration;
    private 'impacted_application'?: Array<WarRoomTenantInfoImpactedApplication>;
    private 'processing_duration'?: number;
    private 'restoration_duration'?: number;
    private 'war_room_num'?: string;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withId(id: string): WarRoomTenantInfo {
        this['id'] = id;
        return this;
    }
    public withTitle(title: string): WarRoomTenantInfo {
        this['title'] = title;
        return this;
    }
    public withAdmin(admin: string): WarRoomTenantInfo {
        this['admin'] = admin;
        return this;
    }
    public withRecoverMember(recoverMember: Array<string>): WarRoomTenantInfo {
        this['recover_member'] = recoverMember;
        return this;
    }
    public set recoverMember(recoverMember: Array<string>  | undefined) {
        this['recover_member'] = recoverMember;
    }
    public get recoverMember(): Array<string> | undefined {
        return this['recover_member'];
    }
    public withRecoverLeader(recoverLeader: Array<string>): WarRoomTenantInfo {
        this['recover_leader'] = recoverLeader;
        return this;
    }
    public set recoverLeader(recoverLeader: Array<string>  | undefined) {
        this['recover_leader'] = recoverLeader;
    }
    public get recoverLeader(): Array<string> | undefined {
        return this['recover_leader'];
    }
    public withIncident(incident: WarRoomIncident): WarRoomTenantInfo {
        this['incident'] = incident;
        return this;
    }
    public withSource(source: string): WarRoomTenantInfo {
        this['source'] = source;
        return this;
    }
    public withRegions(regions: Array<WarRoomTenantInfoRegions>): WarRoomTenantInfo {
        this['regions'] = regions;
        return this;
    }
    public withChangeNum(changeNum: string): WarRoomTenantInfo {
        this['change_num'] = changeNum;
        return this;
    }
    public set changeNum(changeNum: string  | undefined) {
        this['change_num'] = changeNum;
    }
    public get changeNum(): string | undefined {
        return this['change_num'];
    }
    public withOccurTime(occurTime: number): WarRoomTenantInfo {
        this['occur_time'] = occurTime;
        return this;
    }
    public set occurTime(occurTime: number  | undefined) {
        this['occur_time'] = occurTime;
    }
    public get occurTime(): number | undefined {
        return this['occur_time'];
    }
    public withRecoverTime(recoverTime: number): WarRoomTenantInfo {
        this['recover_time'] = recoverTime;
        return this;
    }
    public set recoverTime(recoverTime: number  | undefined) {
        this['recover_time'] = recoverTime;
    }
    public get recoverTime(): number | undefined {
        return this['recover_time'];
    }
    public withFaultCause(faultCause: string): WarRoomTenantInfo {
        this['fault_cause'] = faultCause;
        return this;
    }
    public set faultCause(faultCause: string  | undefined) {
        this['fault_cause'] = faultCause;
    }
    public get faultCause(): string | undefined {
        return this['fault_cause'];
    }
    public withCreateTime(createTime: number): WarRoomTenantInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withFirstReportTime(firstReportTime: number): WarRoomTenantInfo {
        this['first_report_time'] = firstReportTime;
        return this;
    }
    public set firstReportTime(firstReportTime: number  | undefined) {
        this['first_report_time'] = firstReportTime;
    }
    public get firstReportTime(): number | undefined {
        return this['first_report_time'];
    }
    public withRecoveryNotificationTime(recoveryNotificationTime: number): WarRoomTenantInfo {
        this['recovery_notification_time'] = recoveryNotificationTime;
        return this;
    }
    public set recoveryNotificationTime(recoveryNotificationTime: number  | undefined) {
        this['recovery_notification_time'] = recoveryNotificationTime;
    }
    public get recoveryNotificationTime(): number | undefined {
        return this['recovery_notification_time'];
    }
    public withFaultImpact(faultImpact: string): WarRoomTenantInfo {
        this['fault_impact'] = faultImpact;
        return this;
    }
    public set faultImpact(faultImpact: string  | undefined) {
        this['fault_impact'] = faultImpact;
    }
    public get faultImpact(): string | undefined {
        return this['fault_impact'];
    }
    public withDescription(description: string): WarRoomTenantInfo {
        this['description'] = description;
        return this;
    }
    public withCircularLevel(circularLevel: string): WarRoomTenantInfo {
        this['circular_level'] = circularLevel;
        return this;
    }
    public set circularLevel(circularLevel: string  | undefined) {
        this['circular_level'] = circularLevel;
    }
    public get circularLevel(): string | undefined {
        return this['circular_level'];
    }
    public withWarRoomStatus(warRoomStatus: WarRoomEnumeration): WarRoomTenantInfo {
        this['war_room_status'] = warRoomStatus;
        return this;
    }
    public set warRoomStatus(warRoomStatus: WarRoomEnumeration  | undefined) {
        this['war_room_status'] = warRoomStatus;
    }
    public get warRoomStatus(): WarRoomEnumeration | undefined {
        return this['war_room_status'];
    }
    public withImpactedApplication(impactedApplication: Array<WarRoomTenantInfoImpactedApplication>): WarRoomTenantInfo {
        this['impacted_application'] = impactedApplication;
        return this;
    }
    public set impactedApplication(impactedApplication: Array<WarRoomTenantInfoImpactedApplication>  | undefined) {
        this['impacted_application'] = impactedApplication;
    }
    public get impactedApplication(): Array<WarRoomTenantInfoImpactedApplication> | undefined {
        return this['impacted_application'];
    }
    public withProcessingDuration(processingDuration: number): WarRoomTenantInfo {
        this['processing_duration'] = processingDuration;
        return this;
    }
    public set processingDuration(processingDuration: number  | undefined) {
        this['processing_duration'] = processingDuration;
    }
    public get processingDuration(): number | undefined {
        return this['processing_duration'];
    }
    public withRestorationDuration(restorationDuration: number): WarRoomTenantInfo {
        this['restoration_duration'] = restorationDuration;
        return this;
    }
    public set restorationDuration(restorationDuration: number  | undefined) {
        this['restoration_duration'] = restorationDuration;
    }
    public get restorationDuration(): number | undefined {
        return this['restoration_duration'];
    }
    public withWarRoomNum(warRoomNum: string): WarRoomTenantInfo {
        this['war_room_num'] = warRoomNum;
        return this;
    }
    public set warRoomNum(warRoomNum: string  | undefined) {
        this['war_room_num'] = warRoomNum;
    }
    public get warRoomNum(): string | undefined {
        return this['war_room_num'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): WarRoomTenantInfo {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}