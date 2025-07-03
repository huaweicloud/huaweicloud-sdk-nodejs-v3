import { CocTicketEnumDataV2 } from './CocTicketEnumDataV2';


export class CocTicketHistoryBaseInfoV2 {
    public action?: string;
    private 'action_name_zh'?: string;
    private 'action_name_en'?: string;
    public operator?: string;
    public status?: string;
    private 'start_time'?: string;
    private 'stop_time'?: string;
    public comment?: string;
    private 'enum_data_list'?: Array<CocTicketEnumDataV2>;
    public constructor() { 
    }
    public withAction(action: string): CocTicketHistoryBaseInfoV2 {
        this['action'] = action;
        return this;
    }
    public withActionNameZh(actionNameZh: string): CocTicketHistoryBaseInfoV2 {
        this['action_name_zh'] = actionNameZh;
        return this;
    }
    public set actionNameZh(actionNameZh: string  | undefined) {
        this['action_name_zh'] = actionNameZh;
    }
    public get actionNameZh(): string | undefined {
        return this['action_name_zh'];
    }
    public withActionNameEn(actionNameEn: string): CocTicketHistoryBaseInfoV2 {
        this['action_name_en'] = actionNameEn;
        return this;
    }
    public set actionNameEn(actionNameEn: string  | undefined) {
        this['action_name_en'] = actionNameEn;
    }
    public get actionNameEn(): string | undefined {
        return this['action_name_en'];
    }
    public withOperator(operator: string): CocTicketHistoryBaseInfoV2 {
        this['operator'] = operator;
        return this;
    }
    public withStatus(status: string): CocTicketHistoryBaseInfoV2 {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: string): CocTicketHistoryBaseInfoV2 {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withStopTime(stopTime: string): CocTicketHistoryBaseInfoV2 {
        this['stop_time'] = stopTime;
        return this;
    }
    public set stopTime(stopTime: string  | undefined) {
        this['stop_time'] = stopTime;
    }
    public get stopTime(): string | undefined {
        return this['stop_time'];
    }
    public withComment(comment: string): CocTicketHistoryBaseInfoV2 {
        this['comment'] = comment;
        return this;
    }
    public withEnumDataList(enumDataList: Array<CocTicketEnumDataV2>): CocTicketHistoryBaseInfoV2 {
        this['enum_data_list'] = enumDataList;
        return this;
    }
    public set enumDataList(enumDataList: Array<CocTicketEnumDataV2>  | undefined) {
        this['enum_data_list'] = enumDataList;
    }
    public get enumDataList(): Array<CocTicketEnumDataV2> | undefined {
        return this['enum_data_list'];
    }
}