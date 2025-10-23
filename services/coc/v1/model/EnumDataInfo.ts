

export class EnumDataInfo {
    private 'is_deleted'?: boolean;
    private 'match_type'?: string;
    private 'ticket_id'?: string;
    private 'real_ticket_id'?: string;
    private 'name_zh'?: string;
    private 'name_en'?: string;
    private 'user_name'?: string;
    private 'biz_id'?: string;
    private 'prop_id'?: string;
    private 'model_id'?: string;
    public constructor() { 
    }
    public withIsDeleted(isDeleted: boolean): EnumDataInfo {
        this['is_deleted'] = isDeleted;
        return this;
    }
    public set isDeleted(isDeleted: boolean  | undefined) {
        this['is_deleted'] = isDeleted;
    }
    public get isDeleted(): boolean | undefined {
        return this['is_deleted'];
    }
    public withMatchType(matchType: string): EnumDataInfo {
        this['match_type'] = matchType;
        return this;
    }
    public set matchType(matchType: string  | undefined) {
        this['match_type'] = matchType;
    }
    public get matchType(): string | undefined {
        return this['match_type'];
    }
    public withTicketId(ticketId: string): EnumDataInfo {
        this['ticket_id'] = ticketId;
        return this;
    }
    public set ticketId(ticketId: string  | undefined) {
        this['ticket_id'] = ticketId;
    }
    public get ticketId(): string | undefined {
        return this['ticket_id'];
    }
    public withRealTicketId(realTicketId: string): EnumDataInfo {
        this['real_ticket_id'] = realTicketId;
        return this;
    }
    public set realTicketId(realTicketId: string  | undefined) {
        this['real_ticket_id'] = realTicketId;
    }
    public get realTicketId(): string | undefined {
        return this['real_ticket_id'];
    }
    public withNameZh(nameZh: string): EnumDataInfo {
        this['name_zh'] = nameZh;
        return this;
    }
    public set nameZh(nameZh: string  | undefined) {
        this['name_zh'] = nameZh;
    }
    public get nameZh(): string | undefined {
        return this['name_zh'];
    }
    public withNameEn(nameEn: string): EnumDataInfo {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
        return this['name_en'];
    }
    public withUserName(userName: string): EnumDataInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withBizId(bizId: string): EnumDataInfo {
        this['biz_id'] = bizId;
        return this;
    }
    public set bizId(bizId: string  | undefined) {
        this['biz_id'] = bizId;
    }
    public get bizId(): string | undefined {
        return this['biz_id'];
    }
    public withPropId(propId: string): EnumDataInfo {
        this['prop_id'] = propId;
        return this;
    }
    public set propId(propId: string  | undefined) {
        this['prop_id'] = propId;
    }
    public get propId(): string | undefined {
        return this['prop_id'];
    }
    public withModelId(modelId: string): EnumDataInfo {
        this['model_id'] = modelId;
        return this;
    }
    public set modelId(modelId: string  | undefined) {
        this['model_id'] = modelId;
    }
    public get modelId(): string | undefined {
        return this['model_id'];
    }
}