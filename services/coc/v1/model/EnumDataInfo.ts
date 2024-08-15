import { ExtraFieldInfo } from './ExtraFieldInfo';


export class EnumDataInfo {
    private 'current_cloud_service_id'?: string;
    public description?: string;
    private 'level_id'?: string;
    private 'mtm_region'?: string;
    private 'mtm_type'?: string;
    private 'source_id'?: string;
    public title?: string;
    private 'is_change_event'?: boolean;
    private 'is_service_interrupt'?: boolean;
    private 'is_deleted'?: boolean;
    private 'match_type'?: string;
    private 'ticket_id'?: string;
    private 'name_zh'?: string;
    private 'name_en'?: string;
    private 'user_name'?: string;
    private 'full_name_zh'?: string;
    private 'full_name_en'?: string;
    private 'name_zh_path'?: string;
    private 'name_en_path'?: string;
    public status?: string;
    private 'biz_id'?: string;
    private 'prop_id'?: string;
    private 'model_id'?: string;
    private 'enum_type_id'?: string;
    public constructor() { 
    }
    public withCurrentCloudServiceId(currentCloudServiceId: string): EnumDataInfo {
        this['current_cloud_service_id'] = currentCloudServiceId;
        return this;
    }
    public set currentCloudServiceId(currentCloudServiceId: string  | undefined) {
        this['current_cloud_service_id'] = currentCloudServiceId;
    }
    public get currentCloudServiceId(): string | undefined {
        return this['current_cloud_service_id'];
    }
    public withDescription(description: string): EnumDataInfo {
        this['description'] = description;
        return this;
    }
    public withLevelId(levelId: string): EnumDataInfo {
        this['level_id'] = levelId;
        return this;
    }
    public set levelId(levelId: string  | undefined) {
        this['level_id'] = levelId;
    }
    public get levelId(): string | undefined {
        return this['level_id'];
    }
    public withMtmRegion(mtmRegion: string): EnumDataInfo {
        this['mtm_region'] = mtmRegion;
        return this;
    }
    public set mtmRegion(mtmRegion: string  | undefined) {
        this['mtm_region'] = mtmRegion;
    }
    public get mtmRegion(): string | undefined {
        return this['mtm_region'];
    }
    public withMtmType(mtmType: string): EnumDataInfo {
        this['mtm_type'] = mtmType;
        return this;
    }
    public set mtmType(mtmType: string  | undefined) {
        this['mtm_type'] = mtmType;
    }
    public get mtmType(): string | undefined {
        return this['mtm_type'];
    }
    public withSourceId(sourceId: string): EnumDataInfo {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string  | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId(): string | undefined {
        return this['source_id'];
    }
    public withTitle(title: string): EnumDataInfo {
        this['title'] = title;
        return this;
    }
    public withIsChangeEvent(isChangeEvent: boolean): EnumDataInfo {
        this['is_change_event'] = isChangeEvent;
        return this;
    }
    public set isChangeEvent(isChangeEvent: boolean  | undefined) {
        this['is_change_event'] = isChangeEvent;
    }
    public get isChangeEvent(): boolean | undefined {
        return this['is_change_event'];
    }
    public withIsServiceInterrupt(isServiceInterrupt: boolean): EnumDataInfo {
        this['is_service_interrupt'] = isServiceInterrupt;
        return this;
    }
    public set isServiceInterrupt(isServiceInterrupt: boolean  | undefined) {
        this['is_service_interrupt'] = isServiceInterrupt;
    }
    public get isServiceInterrupt(): boolean | undefined {
        return this['is_service_interrupt'];
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
    public withFullNameZh(fullNameZh: string): EnumDataInfo {
        this['full_name_zh'] = fullNameZh;
        return this;
    }
    public set fullNameZh(fullNameZh: string  | undefined) {
        this['full_name_zh'] = fullNameZh;
    }
    public get fullNameZh(): string | undefined {
        return this['full_name_zh'];
    }
    public withFullNameEn(fullNameEn: string): EnumDataInfo {
        this['full_name_en'] = fullNameEn;
        return this;
    }
    public set fullNameEn(fullNameEn: string  | undefined) {
        this['full_name_en'] = fullNameEn;
    }
    public get fullNameEn(): string | undefined {
        return this['full_name_en'];
    }
    public withNameZhPath(nameZhPath: string): EnumDataInfo {
        this['name_zh_path'] = nameZhPath;
        return this;
    }
    public set nameZhPath(nameZhPath: string  | undefined) {
        this['name_zh_path'] = nameZhPath;
    }
    public get nameZhPath(): string | undefined {
        return this['name_zh_path'];
    }
    public withNameEnPath(nameEnPath: string): EnumDataInfo {
        this['name_en_path'] = nameEnPath;
        return this;
    }
    public set nameEnPath(nameEnPath: string  | undefined) {
        this['name_en_path'] = nameEnPath;
    }
    public get nameEnPath(): string | undefined {
        return this['name_en_path'];
    }
    public withStatus(status: string): EnumDataInfo {
        this['status'] = status;
        return this;
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
    public withEnumTypeId(enumTypeId: string): EnumDataInfo {
        this['enum_type_id'] = enumTypeId;
        return this;
    }
    public set enumTypeId(enumTypeId: string  | undefined) {
        this['enum_type_id'] = enumTypeId;
    }
    public get enumTypeId(): string | undefined {
        return this['enum_type_id'];
    }
}