

export class CocTicketDetailInfoResponseDataSubTickets {
    private 'change_ticket_id'?: string;
    private 'change_ticket_id_sub'?: string;
    private 'whether_to_change'?: boolean;
    private 'is_deleted'?: boolean;
    public id?: string;
    private 'main_ticket_id'?: string;
    private 'parent_ticket_id'?: string;
    private 'ticket_id'?: string;
    private 'real_ticket_id'?: string;
    private 'ticket_path'?: string;
    private 'target_value'?: string;
    private 'target_type'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public creator?: string;
    public operator?: string;
    public constructor() { 
    }
    public withChangeTicketId(changeTicketId: string): CocTicketDetailInfoResponseDataSubTickets {
        this['change_ticket_id'] = changeTicketId;
        return this;
    }
    public set changeTicketId(changeTicketId: string  | undefined) {
        this['change_ticket_id'] = changeTicketId;
    }
    public get changeTicketId(): string | undefined {
        return this['change_ticket_id'];
    }
    public withChangeTicketIdSub(changeTicketIdSub: string): CocTicketDetailInfoResponseDataSubTickets {
        this['change_ticket_id_sub'] = changeTicketIdSub;
        return this;
    }
    public set changeTicketIdSub(changeTicketIdSub: string  | undefined) {
        this['change_ticket_id_sub'] = changeTicketIdSub;
    }
    public get changeTicketIdSub(): string | undefined {
        return this['change_ticket_id_sub'];
    }
    public withWhetherToChange(whetherToChange: boolean): CocTicketDetailInfoResponseDataSubTickets {
        this['whether_to_change'] = whetherToChange;
        return this;
    }
    public set whetherToChange(whetherToChange: boolean  | undefined) {
        this['whether_to_change'] = whetherToChange;
    }
    public get whetherToChange(): boolean | undefined {
        return this['whether_to_change'];
    }
    public withIsDeleted(isDeleted: boolean): CocTicketDetailInfoResponseDataSubTickets {
        this['is_deleted'] = isDeleted;
        return this;
    }
    public set isDeleted(isDeleted: boolean  | undefined) {
        this['is_deleted'] = isDeleted;
    }
    public get isDeleted(): boolean | undefined {
        return this['is_deleted'];
    }
    public withId(id: string): CocTicketDetailInfoResponseDataSubTickets {
        this['id'] = id;
        return this;
    }
    public withMainTicketId(mainTicketId: string): CocTicketDetailInfoResponseDataSubTickets {
        this['main_ticket_id'] = mainTicketId;
        return this;
    }
    public set mainTicketId(mainTicketId: string  | undefined) {
        this['main_ticket_id'] = mainTicketId;
    }
    public get mainTicketId(): string | undefined {
        return this['main_ticket_id'];
    }
    public withParentTicketId(parentTicketId: string): CocTicketDetailInfoResponseDataSubTickets {
        this['parent_ticket_id'] = parentTicketId;
        return this;
    }
    public set parentTicketId(parentTicketId: string  | undefined) {
        this['parent_ticket_id'] = parentTicketId;
    }
    public get parentTicketId(): string | undefined {
        return this['parent_ticket_id'];
    }
    public withTicketId(ticketId: string): CocTicketDetailInfoResponseDataSubTickets {
        this['ticket_id'] = ticketId;
        return this;
    }
    public set ticketId(ticketId: string  | undefined) {
        this['ticket_id'] = ticketId;
    }
    public get ticketId(): string | undefined {
        return this['ticket_id'];
    }
    public withRealTicketId(realTicketId: string): CocTicketDetailInfoResponseDataSubTickets {
        this['real_ticket_id'] = realTicketId;
        return this;
    }
    public set realTicketId(realTicketId: string  | undefined) {
        this['real_ticket_id'] = realTicketId;
    }
    public get realTicketId(): string | undefined {
        return this['real_ticket_id'];
    }
    public withTicketPath(ticketPath: string): CocTicketDetailInfoResponseDataSubTickets {
        this['ticket_path'] = ticketPath;
        return this;
    }
    public set ticketPath(ticketPath: string  | undefined) {
        this['ticket_path'] = ticketPath;
    }
    public get ticketPath(): string | undefined {
        return this['ticket_path'];
    }
    public withTargetValue(targetValue: string): CocTicketDetailInfoResponseDataSubTickets {
        this['target_value'] = targetValue;
        return this;
    }
    public set targetValue(targetValue: string  | undefined) {
        this['target_value'] = targetValue;
    }
    public get targetValue(): string | undefined {
        return this['target_value'];
    }
    public withTargetType(targetType: string): CocTicketDetailInfoResponseDataSubTickets {
        this['target_type'] = targetType;
        return this;
    }
    public set targetType(targetType: string  | undefined) {
        this['target_type'] = targetType;
    }
    public get targetType(): string | undefined {
        return this['target_type'];
    }
    public withCreateTime(createTime: number): CocTicketDetailInfoResponseDataSubTickets {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): CocTicketDetailInfoResponseDataSubTickets {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withCreator(creator: string): CocTicketDetailInfoResponseDataSubTickets {
        this['creator'] = creator;
        return this;
    }
    public withOperator(operator: string): CocTicketDetailInfoResponseDataSubTickets {
        this['operator'] = operator;
        return this;
    }
}