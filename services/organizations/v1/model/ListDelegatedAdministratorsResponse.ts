import { DelegatedAdministratorDto } from './DelegatedAdministratorDto';
import { PageInfoDto } from './PageInfoDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDelegatedAdministratorsResponse extends SdkResponse {
    private 'delegated_administrators'?: Array<DelegatedAdministratorDto>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withDelegatedAdministrators(delegatedAdministrators: Array<DelegatedAdministratorDto>): ListDelegatedAdministratorsResponse {
        this['delegated_administrators'] = delegatedAdministrators;
        return this;
    }
    public set delegatedAdministrators(delegatedAdministrators: Array<DelegatedAdministratorDto>  | undefined) {
        this['delegated_administrators'] = delegatedAdministrators;
    }
    public get delegatedAdministrators(): Array<DelegatedAdministratorDto> | undefined {
        return this['delegated_administrators'];
    }
    public withPageInfo(pageInfo: PageInfoDto): ListDelegatedAdministratorsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDto  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDto | undefined {
        return this['page_info'];
    }
}