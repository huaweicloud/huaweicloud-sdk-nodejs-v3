import { EnumDataInfo } from './EnumDataInfo';
import { UpdateTicketHistoryInfo } from './UpdateTicketHistoryInfo';


export class TicketHistoryInfo {
    private 'current_cloud_service_id'?: string;
    public description?: string;
    private 'level_id'?: string;
    private 'mtm_region'?: string;
    private 'mtm_type'?: string;
    private 'source_id'?: string;
    public title?: string;
    private 'is_change_event'?: boolean;
    private 'is_service_interrupt'?: boolean;
    private 'action_id'?: string;
    public action?: string;
    private 'sub_action'?: string;
    public operator?: string;
    public comment?: string;
    public id?: string;
    private 'ticket_id'?: string;
    private 'start_time'?: number;
    private 'stop_time'?: number;
    private 'target_type'?: string;
    private 'target_value'?: string;
    private 'is_deteted'?: boolean;
    private 'update_time'?: number;
    private 'action_name_zh'?: string;
    private 'action_name_en'?: string;
    private 'action_template_zh'?: string;
    private 'action_template_en'?: string;
    public status?: string;
    private 'final_sub_action'?: string;
    private 'enum_data_list'?: Array<EnumDataInfo>;
    public constructor() { 
    }
    public withCurrentCloudServiceId(currentCloudServiceId: string): TicketHistoryInfo {
        this['current_cloud_service_id'] = currentCloudServiceId;
        return this;
    }
    public set currentCloudServiceId(currentCloudServiceId: string  | undefined) {
        this['current_cloud_service_id'] = currentCloudServiceId;
    }
    public get currentCloudServiceId(): string | undefined {
        return this['current_cloud_service_id'];
    }
    public withDescription(description: string): TicketHistoryInfo {
        this['description'] = description;
        return this;
    }
    public withLevelId(levelId: string): TicketHistoryInfo {
        this['level_id'] = levelId;
        return this;
    }
    public set levelId(levelId: string  | undefined) {
        this['level_id'] = levelId;
    }
    public get levelId(): string | undefined {
        return this['level_id'];
    }
    public withMtmRegion(mtmRegion: string): TicketHistoryInfo {
        this['mtm_region'] = mtmRegion;
        return this;
    }
    public set mtmRegion(mtmRegion: string  | undefined) {
        this['mtm_region'] = mtmRegion;
    }
    public get mtmRegion(): string | undefined {
        return this['mtm_region'];
    }
    public withMtmType(mtmType: string): TicketHistoryInfo {
        this['mtm_type'] = mtmType;
        return this;
    }
    public set mtmType(mtmType: string  | undefined) {
        this['mtm_type'] = mtmType;
    }
    public get mtmType(): string | undefined {
        return this['mtm_type'];
    }
    public withSourceId(sourceId: string): TicketHistoryInfo {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string  | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId(): string | undefined {
        return this['source_id'];
    }
    public withTitle(title: string): TicketHistoryInfo {
        this['title'] = title;
        return this;
    }
    public withIsChangeEvent(isChangeEvent: boolean): TicketHistoryInfo {
        this['is_change_event'] = isChangeEvent;
        return this;
    }
    public set isChangeEvent(isChangeEvent: boolean  | undefined) {
        this['is_change_event'] = isChangeEvent;
    }
    public get isChangeEvent(): boolean | undefined {
        return this['is_change_event'];
    }
    public withIsServiceInterrupt(isServiceInterrupt: boolean): TicketHistoryInfo {
        this['is_service_interrupt'] = isServiceInterrupt;
        return this;
    }
    public set isServiceInterrupt(isServiceInterrupt: boolean  | undefined) {
        this['is_service_interrupt'] = isServiceInterrupt;
    }
    public get isServiceInterrupt(): boolean | undefined {
        return this['is_service_interrupt'];
    }
    public withActionId(actionId: string): TicketHistoryInfo {
        this['action_id'] = actionId;
        return this;
    }
    public set actionId(actionId: string  | undefined) {
        this['action_id'] = actionId;
    }
    public get actionId(): string | undefined {
        return this['action_id'];
    }
    public withAction(action: string): TicketHistoryInfo {
        this['action'] = action;
        return this;
    }
    public withSubAction(subAction: string): TicketHistoryInfo {
        this['sub_action'] = subAction;
        return this;
    }
    public set subAction(subAction: string  | undefined) {
        this['sub_action'] = subAction;
    }
    public get subAction(): string | undefined {
        return this['sub_action'];
    }
    public withOperator(operator: string): TicketHistoryInfo {
        this['operator'] = operator;
        return this;
    }
    public withComment(comment: string): TicketHistoryInfo {
        this['comment'] = comment;
        return this;
    }
    public withId(id: string): TicketHistoryInfo {
        this['id'] = id;
        return this;
    }
    public withTicketId(ticketId: string): TicketHistoryInfo {
        this['ticket_id'] = ticketId;
        return this;
    }
    public set ticketId(ticketId: string  | undefined) {
        this['ticket_id'] = ticketId;
    }
    public get ticketId(): string | undefined {
        return this['ticket_id'];
    }
    public withStartTime(startTime: number): TicketHistoryInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withStopTime(stopTime: number): TicketHistoryInfo {
        this['stop_time'] = stopTime;
        return this;
    }
    public set stopTime(stopTime: number  | undefined) {
        this['stop_time'] = stopTime;
    }
    public get stopTime(): number | undefined {
        return this['stop_time'];
    }
    public withTargetType(targetType: string): TicketHistoryInfo {
        this['target_type'] = targetType;
        return this;
    }
    public set targetType(targetType: string  | undefined) {
        this['target_type'] = targetType;
    }
    public get targetType(): string | undefined {
        return this['target_type'];
    }
    public withTargetValue(targetValue: string): TicketHistoryInfo {
        this['target_value'] = targetValue;
        return this;
    }
    public set targetValue(targetValue: string  | undefined) {
        this['target_value'] = targetValue;
    }
    public get targetValue(): string | undefined {
        return this['target_value'];
    }
    public withIsDeteted(isDeteted: boolean): TicketHistoryInfo {
        this['is_deteted'] = isDeteted;
        return this;
    }
    public set isDeteted(isDeteted: boolean  | undefined) {
        this['is_deteted'] = isDeteted;
    }
    public get isDeteted(): boolean | undefined {
        return this['is_deteted'];
    }
    public withUpdateTime(updateTime: number): TicketHistoryInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withActionNameZh(actionNameZh: string): TicketHistoryInfo {
        this['action_name_zh'] = actionNameZh;
        return this;
    }
    public set actionNameZh(actionNameZh: string  | undefined) {
        this['action_name_zh'] = actionNameZh;
    }
    public get actionNameZh(): string | undefined {
        return this['action_name_zh'];
    }
    public withActionNameEn(actionNameEn: string): TicketHistoryInfo {
        this['action_name_en'] = actionNameEn;
        return this;
    }
    public set actionNameEn(actionNameEn: string  | undefined) {
        this['action_name_en'] = actionNameEn;
    }
    public get actionNameEn(): string | undefined {
        return this['action_name_en'];
    }
    public withActionTemplateZh(actionTemplateZh: string): TicketHistoryInfo {
        this['action_template_zh'] = actionTemplateZh;
        return this;
    }
    public set actionTemplateZh(actionTemplateZh: string  | undefined) {
        this['action_template_zh'] = actionTemplateZh;
    }
    public get actionTemplateZh(): string | undefined {
        return this['action_template_zh'];
    }
    public withActionTemplateEn(actionTemplateEn: string): TicketHistoryInfo {
        this['action_template_en'] = actionTemplateEn;
        return this;
    }
    public set actionTemplateEn(actionTemplateEn: string  | undefined) {
        this['action_template_en'] = actionTemplateEn;
    }
    public get actionTemplateEn(): string | undefined {
        return this['action_template_en'];
    }
    public withStatus(status: string): TicketHistoryInfo {
        this['status'] = status;
        return this;
    }
    public withFinalSubAction(finalSubAction: string): TicketHistoryInfo {
        this['final_sub_action'] = finalSubAction;
        return this;
    }
    public set finalSubAction(finalSubAction: string  | undefined) {
        this['final_sub_action'] = finalSubAction;
    }
    public get finalSubAction(): string | undefined {
        return this['final_sub_action'];
    }
    public withEnumDataList(enumDataList: Array<EnumDataInfo>): TicketHistoryInfo {
        this['enum_data_list'] = enumDataList;
        return this;
    }
    public set enumDataList(enumDataList: Array<EnumDataInfo>  | undefined) {
        this['enum_data_list'] = enumDataList;
    }
    public get enumDataList(): Array<EnumDataInfo> | undefined {
        return this['enum_data_list'];
    }
}