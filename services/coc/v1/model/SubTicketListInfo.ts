

export class SubTicketListInfo {
    private 'ep_id'?: string;
    private 'resource_id'?: string;
    public type?: string;
    public name?: string;
    public provider?: string;
    private 'domain_id'?: string;
    private 'region_id'?: string;
    private 'hosting_id'?: string;
    private 'properties_json'?: string;
    private 'tags_json'?: string;
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
    public withEpId(epId: string): SubTicketListInfo {
        this['ep_id'] = epId;
        return this;
    }
    public set epId(epId: string  | undefined) {
        this['ep_id'] = epId;
    }
    public get epId(): string | undefined {
        return this['ep_id'];
    }
    public withResourceId(resourceId: string): SubTicketListInfo {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withType(type: string): SubTicketListInfo {
        this['type'] = type;
        return this;
    }
    public withName(name: string): SubTicketListInfo {
        this['name'] = name;
        return this;
    }
    public withProvider(provider: string): SubTicketListInfo {
        this['provider'] = provider;
        return this;
    }
    public withDomainId(domainId: string): SubTicketListInfo {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withRegionId(regionId: string): SubTicketListInfo {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withHostingId(hostingId: string): SubTicketListInfo {
        this['hosting_id'] = hostingId;
        return this;
    }
    public set hostingId(hostingId: string  | undefined) {
        this['hosting_id'] = hostingId;
    }
    public get hostingId(): string | undefined {
        return this['hosting_id'];
    }
    public withPropertiesJson(propertiesJson: string): SubTicketListInfo {
        this['properties_json'] = propertiesJson;
        return this;
    }
    public set propertiesJson(propertiesJson: string  | undefined) {
        this['properties_json'] = propertiesJson;
    }
    public get propertiesJson(): string | undefined {
        return this['properties_json'];
    }
    public withTagsJson(tagsJson: string): SubTicketListInfo {
        this['tags_json'] = tagsJson;
        return this;
    }
    public set tagsJson(tagsJson: string  | undefined) {
        this['tags_json'] = tagsJson;
    }
    public get tagsJson(): string | undefined {
        return this['tags_json'];
    }
    public withIsDeleted(isDeleted: boolean): SubTicketListInfo {
        this['is_deleted'] = isDeleted;
        return this;
    }
    public set isDeleted(isDeleted: boolean  | undefined) {
        this['is_deleted'] = isDeleted;
    }
    public get isDeleted(): boolean | undefined {
        return this['is_deleted'];
    }
    public withId(id: string): SubTicketListInfo {
        this['id'] = id;
        return this;
    }
    public withMainTicketId(mainTicketId: string): SubTicketListInfo {
        this['main_ticket_id'] = mainTicketId;
        return this;
    }
    public set mainTicketId(mainTicketId: string  | undefined) {
        this['main_ticket_id'] = mainTicketId;
    }
    public get mainTicketId(): string | undefined {
        return this['main_ticket_id'];
    }
    public withParentTicketId(parentTicketId: string): SubTicketListInfo {
        this['parent_ticket_id'] = parentTicketId;
        return this;
    }
    public set parentTicketId(parentTicketId: string  | undefined) {
        this['parent_ticket_id'] = parentTicketId;
    }
    public get parentTicketId(): string | undefined {
        return this['parent_ticket_id'];
    }
    public withTicketId(ticketId: string): SubTicketListInfo {
        this['ticket_id'] = ticketId;
        return this;
    }
    public set ticketId(ticketId: string  | undefined) {
        this['ticket_id'] = ticketId;
    }
    public get ticketId(): string | undefined {
        return this['ticket_id'];
    }
    public withRealTicketId(realTicketId: string): SubTicketListInfo {
        this['real_ticket_id'] = realTicketId;
        return this;
    }
    public set realTicketId(realTicketId: string  | undefined) {
        this['real_ticket_id'] = realTicketId;
    }
    public get realTicketId(): string | undefined {
        return this['real_ticket_id'];
    }
    public withTicketPath(ticketPath: string): SubTicketListInfo {
        this['ticket_path'] = ticketPath;
        return this;
    }
    public set ticketPath(ticketPath: string  | undefined) {
        this['ticket_path'] = ticketPath;
    }
    public get ticketPath(): string | undefined {
        return this['ticket_path'];
    }
    public withTargetValue(targetValue: string): SubTicketListInfo {
        this['target_value'] = targetValue;
        return this;
    }
    public set targetValue(targetValue: string  | undefined) {
        this['target_value'] = targetValue;
    }
    public get targetValue(): string | undefined {
        return this['target_value'];
    }
    public withTargetType(targetType: string): SubTicketListInfo {
        this['target_type'] = targetType;
        return this;
    }
    public set targetType(targetType: string  | undefined) {
        this['target_type'] = targetType;
    }
    public get targetType(): string | undefined {
        return this['target_type'];
    }
    public withCreateTime(createTime: number): SubTicketListInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): SubTicketListInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withCreator(creator: string): SubTicketListInfo {
        this['creator'] = creator;
        return this;
    }
    public withOperator(operator: string): SubTicketListInfo {
        this['operator'] = operator;
        return this;
    }
}