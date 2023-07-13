

export class TransTemplateGroupCollection {
    public name: string;
    public description?: string;
    private 'template_group_list': Array<string> | undefined;
    public constructor(name?: any, templateGroupList?: any) { 
        this['name'] = name;
        this['template_group_list'] = templateGroupList;
    }
    public withName(name: string): TransTemplateGroupCollection {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): TransTemplateGroupCollection {
        this['description'] = description;
        return this;
    }
    public withTemplateGroupList(templateGroupList: Array<string>): TransTemplateGroupCollection {
        this['template_group_list'] = templateGroupList;
        return this;
    }
    public set templateGroupList(templateGroupList: Array<string> | undefined) {
        this['template_group_list'] = templateGroupList;
    }
    public get templateGroupList() {
        return this['template_group_list'];
    }
}