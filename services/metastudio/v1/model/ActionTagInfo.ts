

export class ActionTagInfo {
    private 'action_name_zh'?: string;
    private 'action_name_en'?: string;
    public catalog?: string;
    private 'file_name'?: string;
    public tag?: string;
    public constructor(actionNameZh?: string, actionNameEn?: string) { 
        this['action_name_zh'] = actionNameZh;
        this['action_name_en'] = actionNameEn;
    }
    public withActionNameZh(actionNameZh: string): ActionTagInfo {
        this['action_name_zh'] = actionNameZh;
        return this;
    }
    public set actionNameZh(actionNameZh: string  | undefined) {
        this['action_name_zh'] = actionNameZh;
    }
    public get actionNameZh(): string | undefined {
        return this['action_name_zh'];
    }
    public withActionNameEn(actionNameEn: string): ActionTagInfo {
        this['action_name_en'] = actionNameEn;
        return this;
    }
    public set actionNameEn(actionNameEn: string  | undefined) {
        this['action_name_en'] = actionNameEn;
    }
    public get actionNameEn(): string | undefined {
        return this['action_name_en'];
    }
    public withCatalog(catalog: string): ActionTagInfo {
        this['catalog'] = catalog;
        return this;
    }
    public withFileName(fileName: string): ActionTagInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withTag(tag: string): ActionTagInfo {
        this['tag'] = tag;
        return this;
    }
}