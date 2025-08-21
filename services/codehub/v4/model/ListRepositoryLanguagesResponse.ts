import { LanguagesDto } from './LanguagesDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRepositoryLanguagesResponse extends SdkResponse {
    public languages?: Array<LanguagesDto>;
    public status?: string;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withLanguages(languages: Array<LanguagesDto>): ListRepositoryLanguagesResponse {
        this['languages'] = languages;
        return this;
    }
    public withStatus(status: string): ListRepositoryLanguagesResponse {
        this['status'] = status;
        return this;
    }
    public withXTotal(xTotal: string): ListRepositoryLanguagesResponse {
        this['X-Total'] = xTotal;
        return this;
    }
    public set xTotal(xTotal: string  | undefined) {
        this['X-Total'] = xTotal;
    }
    public get xTotal(): string | undefined {
        return this['X-Total'];
    }
}