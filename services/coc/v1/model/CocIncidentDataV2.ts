import { CocTicketInfoEnumDataV2 } from './CocTicketInfoEnumDataV2';


export class CocIncidentDataV2 {
    private 'current_cloud_service_id'?: string;
    private 'level_id'?: string;
    private 'mtm_region'?: string;
    private 'source_id'?: string;
    private 'forward_rule_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'mtm_type'?: string;
    public title?: string;
    public description?: string;
    private 'ticket_id'?: string;
    private 'is_service_interrupt'?: string;
    private 'work_flow_status'?: string;
    public phase?: string;
    public assignee?: string;
    public creator?: string;
    public operator?: string;
    private 'update_time'?: string;
    private 'create_time'?: string;
    private 'start_time'?: string;
    private 'handle_time'?: string;
    private 'incident_ownership'?: string;
    private 'enum_data_list'?: Array<CocTicketInfoEnumDataV2>;
    public constructor() { 
    }
    public withCurrentCloudServiceId(currentCloudServiceId: string): CocIncidentDataV2 {
        this['current_cloud_service_id'] = currentCloudServiceId;
        return this;
    }
    public set currentCloudServiceId(currentCloudServiceId: string  | undefined) {
        this['current_cloud_service_id'] = currentCloudServiceId;
    }
    public get currentCloudServiceId(): string | undefined {
        return this['current_cloud_service_id'];
    }
    public withLevelId(levelId: string): CocIncidentDataV2 {
        this['level_id'] = levelId;
        return this;
    }
    public set levelId(levelId: string  | undefined) {
        this['level_id'] = levelId;
    }
    public get levelId(): string | undefined {
        return this['level_id'];
    }
    public withMtmRegion(mtmRegion: string): CocIncidentDataV2 {
        this['mtm_region'] = mtmRegion;
        return this;
    }
    public set mtmRegion(mtmRegion: string  | undefined) {
        this['mtm_region'] = mtmRegion;
    }
    public get mtmRegion(): string | undefined {
        return this['mtm_region'];
    }
    public withSourceId(sourceId: string): CocIncidentDataV2 {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string  | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId(): string | undefined {
        return this['source_id'];
    }
    public withForwardRuleId(forwardRuleId: string): CocIncidentDataV2 {
        this['forward_rule_id'] = forwardRuleId;
        return this;
    }
    public set forwardRuleId(forwardRuleId: string  | undefined) {
        this['forward_rule_id'] = forwardRuleId;
    }
    public get forwardRuleId(): string | undefined {
        return this['forward_rule_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CocIncidentDataV2 {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withMtmType(mtmType: string): CocIncidentDataV2 {
        this['mtm_type'] = mtmType;
        return this;
    }
    public set mtmType(mtmType: string  | undefined) {
        this['mtm_type'] = mtmType;
    }
    public get mtmType(): string | undefined {
        return this['mtm_type'];
    }
    public withTitle(title: string): CocIncidentDataV2 {
        this['title'] = title;
        return this;
    }
    public withDescription(description: string): CocIncidentDataV2 {
        this['description'] = description;
        return this;
    }
    public withTicketId(ticketId: string): CocIncidentDataV2 {
        this['ticket_id'] = ticketId;
        return this;
    }
    public set ticketId(ticketId: string  | undefined) {
        this['ticket_id'] = ticketId;
    }
    public get ticketId(): string | undefined {
        return this['ticket_id'];
    }
    public withIsServiceInterrupt(isServiceInterrupt: string): CocIncidentDataV2 {
        this['is_service_interrupt'] = isServiceInterrupt;
        return this;
    }
    public set isServiceInterrupt(isServiceInterrupt: string  | undefined) {
        this['is_service_interrupt'] = isServiceInterrupt;
    }
    public get isServiceInterrupt(): string | undefined {
        return this['is_service_interrupt'];
    }
    public withWorkFlowStatus(workFlowStatus: string): CocIncidentDataV2 {
        this['work_flow_status'] = workFlowStatus;
        return this;
    }
    public set workFlowStatus(workFlowStatus: string  | undefined) {
        this['work_flow_status'] = workFlowStatus;
    }
    public get workFlowStatus(): string | undefined {
        return this['work_flow_status'];
    }
    public withPhase(phase: string): CocIncidentDataV2 {
        this['phase'] = phase;
        return this;
    }
    public withAssignee(assignee: string): CocIncidentDataV2 {
        this['assignee'] = assignee;
        return this;
    }
    public withCreator(creator: string): CocIncidentDataV2 {
        this['creator'] = creator;
        return this;
    }
    public withOperator(operator: string): CocIncidentDataV2 {
        this['operator'] = operator;
        return this;
    }
    public withUpdateTime(updateTime: string): CocIncidentDataV2 {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withCreateTime(createTime: string): CocIncidentDataV2 {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withStartTime(startTime: string): CocIncidentDataV2 {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withHandleTime(handleTime: string): CocIncidentDataV2 {
        this['handle_time'] = handleTime;
        return this;
    }
    public set handleTime(handleTime: string  | undefined) {
        this['handle_time'] = handleTime;
    }
    public get handleTime(): string | undefined {
        return this['handle_time'];
    }
    public withIncidentOwnership(incidentOwnership: string): CocIncidentDataV2 {
        this['incident_ownership'] = incidentOwnership;
        return this;
    }
    public set incidentOwnership(incidentOwnership: string  | undefined) {
        this['incident_ownership'] = incidentOwnership;
    }
    public get incidentOwnership(): string | undefined {
        return this['incident_ownership'];
    }
    public withEnumDataList(enumDataList: Array<CocTicketInfoEnumDataV2>): CocIncidentDataV2 {
        this['enum_data_list'] = enumDataList;
        return this;
    }
    public set enumDataList(enumDataList: Array<CocTicketInfoEnumDataV2>  | undefined) {
        this['enum_data_list'] = enumDataList;
    }
    public get enumDataList(): Array<CocTicketInfoEnumDataV2> | undefined {
        return this['enum_data_list'];
    }
}