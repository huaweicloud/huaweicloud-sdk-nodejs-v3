import { ExtraFieldInfo } from './ExtraFieldInfo';


export class UpdateTicketHistoryInfo {
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
    public constructor() { 
    }
    public withCurrentCloudServiceId(currentCloudServiceId: string): UpdateTicketHistoryInfo {
        this['current_cloud_service_id'] = currentCloudServiceId;
        return this;
    }
    public set currentCloudServiceId(currentCloudServiceId: string  | undefined) {
        this['current_cloud_service_id'] = currentCloudServiceId;
    }
    public get currentCloudServiceId(): string | undefined {
        return this['current_cloud_service_id'];
    }
    public withDescription(description: string): UpdateTicketHistoryInfo {
        this['description'] = description;
        return this;
    }
    public withLevelId(levelId: string): UpdateTicketHistoryInfo {
        this['level_id'] = levelId;
        return this;
    }
    public set levelId(levelId: string  | undefined) {
        this['level_id'] = levelId;
    }
    public get levelId(): string | undefined {
        return this['level_id'];
    }
    public withMtmRegion(mtmRegion: string): UpdateTicketHistoryInfo {
        this['mtm_region'] = mtmRegion;
        return this;
    }
    public set mtmRegion(mtmRegion: string  | undefined) {
        this['mtm_region'] = mtmRegion;
    }
    public get mtmRegion(): string | undefined {
        return this['mtm_region'];
    }
    public withMtmType(mtmType: string): UpdateTicketHistoryInfo {
        this['mtm_type'] = mtmType;
        return this;
    }
    public set mtmType(mtmType: string  | undefined) {
        this['mtm_type'] = mtmType;
    }
    public get mtmType(): string | undefined {
        return this['mtm_type'];
    }
    public withSourceId(sourceId: string): UpdateTicketHistoryInfo {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string  | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId(): string | undefined {
        return this['source_id'];
    }
    public withTitle(title: string): UpdateTicketHistoryInfo {
        this['title'] = title;
        return this;
    }
    public withIsChangeEvent(isChangeEvent: boolean): UpdateTicketHistoryInfo {
        this['is_change_event'] = isChangeEvent;
        return this;
    }
    public set isChangeEvent(isChangeEvent: boolean  | undefined) {
        this['is_change_event'] = isChangeEvent;
    }
    public get isChangeEvent(): boolean | undefined {
        return this['is_change_event'];
    }
    public withIsServiceInterrupt(isServiceInterrupt: boolean): UpdateTicketHistoryInfo {
        this['is_service_interrupt'] = isServiceInterrupt;
        return this;
    }
    public set isServiceInterrupt(isServiceInterrupt: boolean  | undefined) {
        this['is_service_interrupt'] = isServiceInterrupt;
    }
    public get isServiceInterrupt(): boolean | undefined {
        return this['is_service_interrupt'];
    }
    public withActionId(actionId: string): UpdateTicketHistoryInfo {
        this['action_id'] = actionId;
        return this;
    }
    public set actionId(actionId: string  | undefined) {
        this['action_id'] = actionId;
    }
    public get actionId(): string | undefined {
        return this['action_id'];
    }
    public withAction(action: string): UpdateTicketHistoryInfo {
        this['action'] = action;
        return this;
    }
    public withSubAction(subAction: string): UpdateTicketHistoryInfo {
        this['sub_action'] = subAction;
        return this;
    }
    public set subAction(subAction: string  | undefined) {
        this['sub_action'] = subAction;
    }
    public get subAction(): string | undefined {
        return this['sub_action'];
    }
    public withOperator(operator: string): UpdateTicketHistoryInfo {
        this['operator'] = operator;
        return this;
    }
    public withComment(comment: string): UpdateTicketHistoryInfo {
        this['comment'] = comment;
        return this;
    }
}