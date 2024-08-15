import { ScheduleGroupInfo } from './ScheduleGroupInfo';


export class CreateWarRoomRequestBody {
    private 'war_room_name'?: string;
    public description?: string;
    private 'region_code_list'?: Array<string>;
    private 'application_id_list'?: Array<string>;
    private 'incident_number'?: string;
    private 'schedule_group'?: Array<ScheduleGroupInfo>;
    public participant?: Array<string>;
    private 'war_room_admin'?: string;
    private 'application_names'?: Array<string>;
    private 'region_names'?: Array<string>;
    private 'enterprise_project_id'?: string;
    private 'notification_type'?: string;
    public constructor(warRoomName?: string, applicationIdList?: Array<string>, incidentNumber?: string, scheduleGroup?: Array<ScheduleGroupInfo>, warRoomAdmin?: string, enterpriseProjectId?: string) { 
        this['war_room_name'] = warRoomName;
        this['application_id_list'] = applicationIdList;
        this['incident_number'] = incidentNumber;
        this['schedule_group'] = scheduleGroup;
        this['war_room_admin'] = warRoomAdmin;
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public withWarRoomName(warRoomName: string): CreateWarRoomRequestBody {
        this['war_room_name'] = warRoomName;
        return this;
    }
    public set warRoomName(warRoomName: string  | undefined) {
        this['war_room_name'] = warRoomName;
    }
    public get warRoomName(): string | undefined {
        return this['war_room_name'];
    }
    public withDescription(description: string): CreateWarRoomRequestBody {
        this['description'] = description;
        return this;
    }
    public withRegionCodeList(regionCodeList: Array<string>): CreateWarRoomRequestBody {
        this['region_code_list'] = regionCodeList;
        return this;
    }
    public set regionCodeList(regionCodeList: Array<string>  | undefined) {
        this['region_code_list'] = regionCodeList;
    }
    public get regionCodeList(): Array<string> | undefined {
        return this['region_code_list'];
    }
    public withApplicationIdList(applicationIdList: Array<string>): CreateWarRoomRequestBody {
        this['application_id_list'] = applicationIdList;
        return this;
    }
    public set applicationIdList(applicationIdList: Array<string>  | undefined) {
        this['application_id_list'] = applicationIdList;
    }
    public get applicationIdList(): Array<string> | undefined {
        return this['application_id_list'];
    }
    public withIncidentNumber(incidentNumber: string): CreateWarRoomRequestBody {
        this['incident_number'] = incidentNumber;
        return this;
    }
    public set incidentNumber(incidentNumber: string  | undefined) {
        this['incident_number'] = incidentNumber;
    }
    public get incidentNumber(): string | undefined {
        return this['incident_number'];
    }
    public withScheduleGroup(scheduleGroup: Array<ScheduleGroupInfo>): CreateWarRoomRequestBody {
        this['schedule_group'] = scheduleGroup;
        return this;
    }
    public set scheduleGroup(scheduleGroup: Array<ScheduleGroupInfo>  | undefined) {
        this['schedule_group'] = scheduleGroup;
    }
    public get scheduleGroup(): Array<ScheduleGroupInfo> | undefined {
        return this['schedule_group'];
    }
    public withParticipant(participant: Array<string>): CreateWarRoomRequestBody {
        this['participant'] = participant;
        return this;
    }
    public withWarRoomAdmin(warRoomAdmin: string): CreateWarRoomRequestBody {
        this['war_room_admin'] = warRoomAdmin;
        return this;
    }
    public set warRoomAdmin(warRoomAdmin: string  | undefined) {
        this['war_room_admin'] = warRoomAdmin;
    }
    public get warRoomAdmin(): string | undefined {
        return this['war_room_admin'];
    }
    public withApplicationNames(applicationNames: Array<string>): CreateWarRoomRequestBody {
        this['application_names'] = applicationNames;
        return this;
    }
    public set applicationNames(applicationNames: Array<string>  | undefined) {
        this['application_names'] = applicationNames;
    }
    public get applicationNames(): Array<string> | undefined {
        return this['application_names'];
    }
    public withRegionNames(regionNames: Array<string>): CreateWarRoomRequestBody {
        this['region_names'] = regionNames;
        return this;
    }
    public set regionNames(regionNames: Array<string>  | undefined) {
        this['region_names'] = regionNames;
    }
    public get regionNames(): Array<string> | undefined {
        return this['region_names'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateWarRoomRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withNotificationType(notificationType: string): CreateWarRoomRequestBody {
        this['notification_type'] = notificationType;
        return this;
    }
    public set notificationType(notificationType: string  | undefined) {
        this['notification_type'] = notificationType;
    }
    public get notificationType(): string | undefined {
        return this['notification_type'];
    }
}