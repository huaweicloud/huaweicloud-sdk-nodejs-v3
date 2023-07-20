

export class ApplyConfigurationRequestBody {
    private 'entity_ids'?: Array<string>;
    public constructor(entityIds?: Array<string>) { 
        this['entity_ids'] = entityIds;
    }
    public withEntityIds(entityIds: Array<string>): ApplyConfigurationRequestBody {
        this['entity_ids'] = entityIds;
        return this;
    }
    public set entityIds(entityIds: Array<string>  | undefined) {
        this['entity_ids'] = entityIds;
    }
    public get entityIds(): Array<string> | undefined {
        return this['entity_ids'];
    }
}