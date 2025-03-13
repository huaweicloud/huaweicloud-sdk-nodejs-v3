import { ImportBuiltinCategoryParam } from './ImportBuiltinCategoryParam';


export class ImportSecurityBuiltinCategoryGroupsRequest {
    public workspace?: string;
    private 'X-Language'?: ImportSecurityBuiltinCategoryGroupsRequestXLanguageEnum | string;
    public body?: ImportBuiltinCategoryParam;
    public constructor(workspace?: string, xLanguage?: string) { 
        this['workspace'] = workspace;
        this['X-Language'] = xLanguage;
    }
    public withWorkspace(workspace: string): ImportSecurityBuiltinCategoryGroupsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXLanguage(xLanguage: ImportSecurityBuiltinCategoryGroupsRequestXLanguageEnum | string): ImportSecurityBuiltinCategoryGroupsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ImportSecurityBuiltinCategoryGroupsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ImportSecurityBuiltinCategoryGroupsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ImportBuiltinCategoryParam): ImportSecurityBuiltinCategoryGroupsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ImportSecurityBuiltinCategoryGroupsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
