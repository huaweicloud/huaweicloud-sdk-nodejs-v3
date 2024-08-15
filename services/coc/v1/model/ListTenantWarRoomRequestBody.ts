import { ListBaseRequest } from './ListBaseRequest';


export class ListTenantWarRoomRequestBody {
    public limit?: number;
    public offset?: number;
    private 'current_users'?: Array<string>;
    private 'war_room_nums'?: Array<string>;
    private 'incident_num'?: string;
    public title?: string;
    private 'region_code_list'?: Array<string>;
    private 'incident_levels'?: Array<string>;
    private 'impacted_application_ids'?: Array<string>;
    public admin?: Array<string>;
    public status?: Array<string>;
    private 'triggered_start_time'?: number;
    private 'triggered_end_time'?: number;
    private 'occur_start_time'?: number;
    private 'occur_end_time'?: number;
    private 'recover_start_time'?: number;
    private 'recover_end_time'?: number;
    private 'notification_level'?: Array<string>;
    private 'enterprise_project_ids'?: Array<string>;
    private 'war_room_num'?: string;
    private 'statistic_flag'?: boolean;
    public constructor() { 
    }
    public withLimit(limit: number): ListTenantWarRoomRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListTenantWarRoomRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withCurrentUsers(currentUsers: Array<string>): ListTenantWarRoomRequestBody {
        this['current_users'] = currentUsers;
        return this;
    }
    public set currentUsers(currentUsers: Array<string>  | undefined) {
        this['current_users'] = currentUsers;
    }
    public get currentUsers(): Array<string> | undefined {
        return this['current_users'];
    }
    public withWarRoomNums(warRoomNums: Array<string>): ListTenantWarRoomRequestBody {
        this['war_room_nums'] = warRoomNums;
        return this;
    }
    public set warRoomNums(warRoomNums: Array<string>  | undefined) {
        this['war_room_nums'] = warRoomNums;
    }
    public get warRoomNums(): Array<string> | undefined {
        return this['war_room_nums'];
    }
    public withIncidentNum(incidentNum: string): ListTenantWarRoomRequestBody {
        this['incident_num'] = incidentNum;
        return this;
    }
    public set incidentNum(incidentNum: string  | undefined) {
        this['incident_num'] = incidentNum;
    }
    public get incidentNum(): string | undefined {
        return this['incident_num'];
    }
    public withTitle(title: string): ListTenantWarRoomRequestBody {
        this['title'] = title;
        return this;
    }
    public withRegionCodeList(regionCodeList: Array<string>): ListTenantWarRoomRequestBody {
        this['region_code_list'] = regionCodeList;
        return this;
    }
    public set regionCodeList(regionCodeList: Array<string>  | undefined) {
        this['region_code_list'] = regionCodeList;
    }
    public get regionCodeList(): Array<string> | undefined {
        return this['region_code_list'];
    }
    public withIncidentLevels(incidentLevels: Array<string>): ListTenantWarRoomRequestBody {
        this['incident_levels'] = incidentLevels;
        return this;
    }
    public set incidentLevels(incidentLevels: Array<string>  | undefined) {
        this['incident_levels'] = incidentLevels;
    }
    public get incidentLevels(): Array<string> | undefined {
        return this['incident_levels'];
    }
    public withImpactedApplicationIds(impactedApplicationIds: Array<string>): ListTenantWarRoomRequestBody {
        this['impacted_application_ids'] = impactedApplicationIds;
        return this;
    }
    public set impactedApplicationIds(impactedApplicationIds: Array<string>  | undefined) {
        this['impacted_application_ids'] = impactedApplicationIds;
    }
    public get impactedApplicationIds(): Array<string> | undefined {
        return this['impacted_application_ids'];
    }
    public withAdmin(admin: Array<string>): ListTenantWarRoomRequestBody {
        this['admin'] = admin;
        return this;
    }
    public withStatus(status: Array<string>): ListTenantWarRoomRequestBody {
        this['status'] = status;
        return this;
    }
    public withTriggeredStartTime(triggeredStartTime: number): ListTenantWarRoomRequestBody {
        this['triggered_start_time'] = triggeredStartTime;
        return this;
    }
    public set triggeredStartTime(triggeredStartTime: number  | undefined) {
        this['triggered_start_time'] = triggeredStartTime;
    }
    public get triggeredStartTime(): number | undefined {
        return this['triggered_start_time'];
    }
    public withTriggeredEndTime(triggeredEndTime: number): ListTenantWarRoomRequestBody {
        this['triggered_end_time'] = triggeredEndTime;
        return this;
    }
    public set triggeredEndTime(triggeredEndTime: number  | undefined) {
        this['triggered_end_time'] = triggeredEndTime;
    }
    public get triggeredEndTime(): number | undefined {
        return this['triggered_end_time'];
    }
    public withOccurStartTime(occurStartTime: number): ListTenantWarRoomRequestBody {
        this['occur_start_time'] = occurStartTime;
        return this;
    }
    public set occurStartTime(occurStartTime: number  | undefined) {
        this['occur_start_time'] = occurStartTime;
    }
    public get occurStartTime(): number | undefined {
        return this['occur_start_time'];
    }
    public withOccurEndTime(occurEndTime: number): ListTenantWarRoomRequestBody {
        this['occur_end_time'] = occurEndTime;
        return this;
    }
    public set occurEndTime(occurEndTime: number  | undefined) {
        this['occur_end_time'] = occurEndTime;
    }
    public get occurEndTime(): number | undefined {
        return this['occur_end_time'];
    }
    public withRecoverStartTime(recoverStartTime: number): ListTenantWarRoomRequestBody {
        this['recover_start_time'] = recoverStartTime;
        return this;
    }
    public set recoverStartTime(recoverStartTime: number  | undefined) {
        this['recover_start_time'] = recoverStartTime;
    }
    public get recoverStartTime(): number | undefined {
        return this['recover_start_time'];
    }
    public withRecoverEndTime(recoverEndTime: number): ListTenantWarRoomRequestBody {
        this['recover_end_time'] = recoverEndTime;
        return this;
    }
    public set recoverEndTime(recoverEndTime: number  | undefined) {
        this['recover_end_time'] = recoverEndTime;
    }
    public get recoverEndTime(): number | undefined {
        return this['recover_end_time'];
    }
    public withNotificationLevel(notificationLevel: Array<string>): ListTenantWarRoomRequestBody {
        this['notification_level'] = notificationLevel;
        return this;
    }
    public set notificationLevel(notificationLevel: Array<string>  | undefined) {
        this['notification_level'] = notificationLevel;
    }
    public get notificationLevel(): Array<string> | undefined {
        return this['notification_level'];
    }
    public withEnterpriseProjectIds(enterpriseProjectIds: Array<string>): ListTenantWarRoomRequestBody {
        this['enterprise_project_ids'] = enterpriseProjectIds;
        return this;
    }
    public set enterpriseProjectIds(enterpriseProjectIds: Array<string>  | undefined) {
        this['enterprise_project_ids'] = enterpriseProjectIds;
    }
    public get enterpriseProjectIds(): Array<string> | undefined {
        return this['enterprise_project_ids'];
    }
    public withWarRoomNum(warRoomNum: string): ListTenantWarRoomRequestBody {
        this['war_room_num'] = warRoomNum;
        return this;
    }
    public set warRoomNum(warRoomNum: string  | undefined) {
        this['war_room_num'] = warRoomNum;
    }
    public get warRoomNum(): string | undefined {
        return this['war_room_num'];
    }
    public withStatisticFlag(statisticFlag: boolean): ListTenantWarRoomRequestBody {
        this['statistic_flag'] = statisticFlag;
        return this;
    }
    public set statisticFlag(statisticFlag: boolean  | undefined) {
        this['statistic_flag'] = statisticFlag;
    }
    public get statisticFlag(): boolean | undefined {
        return this['statistic_flag'];
    }
}