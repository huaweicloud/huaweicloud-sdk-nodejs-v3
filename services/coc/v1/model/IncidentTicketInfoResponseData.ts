import { TicketInfoEnumData } from './TicketInfoEnumData';


export class IncidentTicketInfoResponseData {
    private 'incident_num'?: string;
    public region?: Array<string>;
    private 'enterprise_project'?: Array<string>;
    private 'current_cloud_service'?: Array<string>;
    private 'incident_level'?: string;
    private 'is_service_interrupt'?: boolean;
    private 'start_time'?: number;
    private 'fault_recovery_time'?: number;
    private 'fault_delineation_time'?: number;
    private 'incident_ownership'?: string;
    private 'incident_type'?: string;
    private 'incident_title'?: string;
    private 'incident_description'?: string;
    private 'incident_source'?: string;
    private 'incident_assignee'?: Array<string>;
    private 'assignee_scene'?: string;
    private 'assignee_role'?: string;
    private 'warroom_id'?: string;
    private 'handle_time'?: number;
    public status?: string;
    private 'create_time'?: number;
    public creator?: string;
    private 'enum_data_list'?: Array<TicketInfoEnumData>;
    public constructor() { 
    }
    public withIncidentNum(incidentNum: string): IncidentTicketInfoResponseData {
        this['incident_num'] = incidentNum;
        return this;
    }
    public set incidentNum(incidentNum: string  | undefined) {
        this['incident_num'] = incidentNum;
    }
    public get incidentNum(): string | undefined {
        return this['incident_num'];
    }
    public withRegion(region: Array<string>): IncidentTicketInfoResponseData {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProject(enterpriseProject: Array<string>): IncidentTicketInfoResponseData {
        this['enterprise_project'] = enterpriseProject;
        return this;
    }
    public set enterpriseProject(enterpriseProject: Array<string>  | undefined) {
        this['enterprise_project'] = enterpriseProject;
    }
    public get enterpriseProject(): Array<string> | undefined {
        return this['enterprise_project'];
    }
    public withCurrentCloudService(currentCloudService: Array<string>): IncidentTicketInfoResponseData {
        this['current_cloud_service'] = currentCloudService;
        return this;
    }
    public set currentCloudService(currentCloudService: Array<string>  | undefined) {
        this['current_cloud_service'] = currentCloudService;
    }
    public get currentCloudService(): Array<string> | undefined {
        return this['current_cloud_service'];
    }
    public withIncidentLevel(incidentLevel: string): IncidentTicketInfoResponseData {
        this['incident_level'] = incidentLevel;
        return this;
    }
    public set incidentLevel(incidentLevel: string  | undefined) {
        this['incident_level'] = incidentLevel;
    }
    public get incidentLevel(): string | undefined {
        return this['incident_level'];
    }
    public withIsServiceInterrupt(isServiceInterrupt: boolean): IncidentTicketInfoResponseData {
        this['is_service_interrupt'] = isServiceInterrupt;
        return this;
    }
    public set isServiceInterrupt(isServiceInterrupt: boolean  | undefined) {
        this['is_service_interrupt'] = isServiceInterrupt;
    }
    public get isServiceInterrupt(): boolean | undefined {
        return this['is_service_interrupt'];
    }
    public withStartTime(startTime: number): IncidentTicketInfoResponseData {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withFaultRecoveryTime(faultRecoveryTime: number): IncidentTicketInfoResponseData {
        this['fault_recovery_time'] = faultRecoveryTime;
        return this;
    }
    public set faultRecoveryTime(faultRecoveryTime: number  | undefined) {
        this['fault_recovery_time'] = faultRecoveryTime;
    }
    public get faultRecoveryTime(): number | undefined {
        return this['fault_recovery_time'];
    }
    public withFaultDelineationTime(faultDelineationTime: number): IncidentTicketInfoResponseData {
        this['fault_delineation_time'] = faultDelineationTime;
        return this;
    }
    public set faultDelineationTime(faultDelineationTime: number  | undefined) {
        this['fault_delineation_time'] = faultDelineationTime;
    }
    public get faultDelineationTime(): number | undefined {
        return this['fault_delineation_time'];
    }
    public withIncidentOwnership(incidentOwnership: string): IncidentTicketInfoResponseData {
        this['incident_ownership'] = incidentOwnership;
        return this;
    }
    public set incidentOwnership(incidentOwnership: string  | undefined) {
        this['incident_ownership'] = incidentOwnership;
    }
    public get incidentOwnership(): string | undefined {
        return this['incident_ownership'];
    }
    public withIncidentType(incidentType: string): IncidentTicketInfoResponseData {
        this['incident_type'] = incidentType;
        return this;
    }
    public set incidentType(incidentType: string  | undefined) {
        this['incident_type'] = incidentType;
    }
    public get incidentType(): string | undefined {
        return this['incident_type'];
    }
    public withIncidentTitle(incidentTitle: string): IncidentTicketInfoResponseData {
        this['incident_title'] = incidentTitle;
        return this;
    }
    public set incidentTitle(incidentTitle: string  | undefined) {
        this['incident_title'] = incidentTitle;
    }
    public get incidentTitle(): string | undefined {
        return this['incident_title'];
    }
    public withIncidentDescription(incidentDescription: string): IncidentTicketInfoResponseData {
        this['incident_description'] = incidentDescription;
        return this;
    }
    public set incidentDescription(incidentDescription: string  | undefined) {
        this['incident_description'] = incidentDescription;
    }
    public get incidentDescription(): string | undefined {
        return this['incident_description'];
    }
    public withIncidentSource(incidentSource: string): IncidentTicketInfoResponseData {
        this['incident_source'] = incidentSource;
        return this;
    }
    public set incidentSource(incidentSource: string  | undefined) {
        this['incident_source'] = incidentSource;
    }
    public get incidentSource(): string | undefined {
        return this['incident_source'];
    }
    public withIncidentAssignee(incidentAssignee: Array<string>): IncidentTicketInfoResponseData {
        this['incident_assignee'] = incidentAssignee;
        return this;
    }
    public set incidentAssignee(incidentAssignee: Array<string>  | undefined) {
        this['incident_assignee'] = incidentAssignee;
    }
    public get incidentAssignee(): Array<string> | undefined {
        return this['incident_assignee'];
    }
    public withAssigneeScene(assigneeScene: string): IncidentTicketInfoResponseData {
        this['assignee_scene'] = assigneeScene;
        return this;
    }
    public set assigneeScene(assigneeScene: string  | undefined) {
        this['assignee_scene'] = assigneeScene;
    }
    public get assigneeScene(): string | undefined {
        return this['assignee_scene'];
    }
    public withAssigneeRole(assigneeRole: string): IncidentTicketInfoResponseData {
        this['assignee_role'] = assigneeRole;
        return this;
    }
    public set assigneeRole(assigneeRole: string  | undefined) {
        this['assignee_role'] = assigneeRole;
    }
    public get assigneeRole(): string | undefined {
        return this['assignee_role'];
    }
    public withWarroomId(warroomId: string): IncidentTicketInfoResponseData {
        this['warroom_id'] = warroomId;
        return this;
    }
    public set warroomId(warroomId: string  | undefined) {
        this['warroom_id'] = warroomId;
    }
    public get warroomId(): string | undefined {
        return this['warroom_id'];
    }
    public withHandleTime(handleTime: number): IncidentTicketInfoResponseData {
        this['handle_time'] = handleTime;
        return this;
    }
    public set handleTime(handleTime: number  | undefined) {
        this['handle_time'] = handleTime;
    }
    public get handleTime(): number | undefined {
        return this['handle_time'];
    }
    public withStatus(status: string): IncidentTicketInfoResponseData {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: number): IncidentTicketInfoResponseData {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withCreator(creator: string): IncidentTicketInfoResponseData {
        this['creator'] = creator;
        return this;
    }
    public withEnumDataList(enumDataList: Array<TicketInfoEnumData>): IncidentTicketInfoResponseData {
        this['enum_data_list'] = enumDataList;
        return this;
    }
    public set enumDataList(enumDataList: Array<TicketInfoEnumData>  | undefined) {
        this['enum_data_list'] = enumDataList;
    }
    public get enumDataList(): Array<TicketInfoEnumData> | undefined {
        return this['enum_data_list'];
    }
}