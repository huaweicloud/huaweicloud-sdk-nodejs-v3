

export class ModifyTemplateGroupCollection {
    public name?: string;
    private 'collection_id'?: string;
    public description?: string;
    private 'template_group_list'?: Array<string>;
    public constructor(collectionId?: string) { 
        this['collection_id'] = collectionId;
    }
    public withName(name: string): ModifyTemplateGroupCollection {
        this['name'] = name;
        return this;
    }
    public withCollectionId(collectionId: string): ModifyTemplateGroupCollection {
        this['collection_id'] = collectionId;
        return this;
    }
    public set collectionId(collectionId: string  | undefined) {
        this['collection_id'] = collectionId;
    }
    public get collectionId(): string | undefined {
        return this['collection_id'];
    }
    public withDescription(description: string): ModifyTemplateGroupCollection {
        this['description'] = description;
        return this;
    }
    public withTemplateGroupList(templateGroupList: Array<string>): ModifyTemplateGroupCollection {
        this['template_group_list'] = templateGroupList;
        return this;
    }
    public set templateGroupList(templateGroupList: Array<string>  | undefined) {
        this['template_group_list'] = templateGroupList;
    }
    public get templateGroupList(): Array<string> | undefined {
        return this['template_group_list'];
    }
}