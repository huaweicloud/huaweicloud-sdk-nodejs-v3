

export class TemplateSimpleInfo {
    public id?: string;
    public title?: string;
    public description?: string;
    public constructor() { 
    }
    public withId(id?: string): TemplateSimpleInfo {
        this.id = id;
        return this;
    }
    public withTitle(title?: string): TemplateSimpleInfo {
        this.title = title;
        return this;
    }
    public withDescription(description?: string): TemplateSimpleInfo {
        this.description = description;
        return this;
    }
    public getParseParam() {
        const parseParam = new TemplateSimpleInfoParse();
        if(this.id !== null && this.id !== undefined) { 
            parseParam.setId(this.id);
        }
        if(this.title !== null && this.title !== undefined) { 
            parseParam.setTitle(this.title);
        }
        if(this.description !== null && this.description !== undefined) { 
            parseParam.setDescription(this.description);
        }
        return parseParam;
    }
}

export class TemplateSimpleInfoParse {
    private 'id'?: any;
    private 'title'?: any;
    private 'description'?: any;

    public setId(id?: any) {
        this['id'] = id;
    }
    public setTitle(title?: any) {
        this['title'] = title;
    }
    public setDescription(description?: any) {
        this['description'] = description;
    }
}