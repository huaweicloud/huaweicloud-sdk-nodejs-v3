import { TemplateGroup } from './TemplateGroup';


export class TemplateGroupCollection {
    private 'group_collection_id'?: string;
    public name?: string;
    public description?: string;
    private 'template_group_list'?: Array<TemplateGroup>;
    public constructor() { 
    }
    public withGroupCollectionId(groupCollectionId: string): TemplateGroupCollection {
        this['group_collection_id'] = groupCollectionId;
        return this;
    }
    public set groupCollectionId(groupCollectionId: string  | undefined) {
        this['group_collection_id'] = groupCollectionId;
    }
    public get groupCollectionId(): string | undefined {
        return this['group_collection_id'];
    }
    public withName(name: string): TemplateGroupCollection {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): TemplateGroupCollection {
        this['description'] = description;
        return this;
    }
    public withTemplateGroupList(templateGroupList: Array<TemplateGroup>): TemplateGroupCollection {
        this['template_group_list'] = templateGroupList;
        return this;
    }
    public set templateGroupList(templateGroupList: Array<TemplateGroup>  | undefined) {
        this['template_group_list'] = templateGroupList;
    }
    public get templateGroupList(): Array<TemplateGroup> | undefined {
        return this['template_group_list'];
    }
}