

export class ListDisasterRecoveryRecordRequest {
    private 'X-Language'?: ListDisasterRecoveryRecordRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    private 'entity_id'?: string;
    private 'entity_type'?: ListDisasterRecoveryRecordRequestEntityTypeEnum | string;
    public limit?: number;
    public offset?: number;
    public constructor(instanceId?: string, entityId?: string, entityType?: string) { 
        this['instance_id'] = instanceId;
        this['entity_id'] = entityId;
        this['entity_type'] = entityType;
    }
    public withXLanguage(xLanguage: ListDisasterRecoveryRecordRequestXLanguageEnum | string): ListDisasterRecoveryRecordRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListDisasterRecoveryRecordRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListDisasterRecoveryRecordRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListDisasterRecoveryRecordRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withEntityId(entityId: string): ListDisasterRecoveryRecordRequest {
        this['entity_id'] = entityId;
        return this;
    }
    public set entityId(entityId: string  | undefined) {
        this['entity_id'] = entityId;
    }
    public get entityId(): string | undefined {
        return this['entity_id'];
    }
    public withEntityType(entityType: ListDisasterRecoveryRecordRequestEntityTypeEnum | string): ListDisasterRecoveryRecordRequest {
        this['entity_type'] = entityType;
        return this;
    }
    public set entityType(entityType: ListDisasterRecoveryRecordRequestEntityTypeEnum | string  | undefined) {
        this['entity_type'] = entityType;
    }
    public get entityType(): ListDisasterRecoveryRecordRequestEntityTypeEnum | string | undefined {
        return this['entity_type'];
    }
    public withLimit(limit: number): ListDisasterRecoveryRecordRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListDisasterRecoveryRecordRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDisasterRecoveryRecordRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
/**
    * @export
    * @enum {string}
    */
export enum ListDisasterRecoveryRecordRequestEntityTypeEnum {
    DR = 'dr'
}
