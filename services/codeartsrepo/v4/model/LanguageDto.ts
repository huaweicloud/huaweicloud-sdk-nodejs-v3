

export class LanguageDto {
    public name?: string;
    private 'extension_list'?: Array<string>;
    public constructor() { 
    }
    public withName(name: string): LanguageDto {
        this['name'] = name;
        return this;
    }
    public withExtensionList(extensionList: Array<string>): LanguageDto {
        this['extension_list'] = extensionList;
        return this;
    }
    public set extensionList(extensionList: Array<string>  | undefined) {
        this['extension_list'] = extensionList;
    }
    public get extensionList(): Array<string> | undefined {
        return this['extension_list'];
    }
}