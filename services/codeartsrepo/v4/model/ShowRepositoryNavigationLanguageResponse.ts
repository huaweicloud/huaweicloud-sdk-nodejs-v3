import { LanguageDto } from './LanguageDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRepositoryNavigationLanguageResponse extends SdkResponse {
    public result?: string;
    public message?: string;
    private 'language_list'?: Array<LanguageDto>;
    public constructor() { 
        super();
    }
    public withResult(result: string): ShowRepositoryNavigationLanguageResponse {
        this['result'] = result;
        return this;
    }
    public withMessage(message: string): ShowRepositoryNavigationLanguageResponse {
        this['message'] = message;
        return this;
    }
    public withLanguageList(languageList: Array<LanguageDto>): ShowRepositoryNavigationLanguageResponse {
        this['language_list'] = languageList;
        return this;
    }
    public set languageList(languageList: Array<LanguageDto>  | undefined) {
        this['language_list'] = languageList;
    }
    public get languageList(): Array<LanguageDto> | undefined {
        return this['language_list'];
    }
}