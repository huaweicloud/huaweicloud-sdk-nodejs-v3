import { AssociatedResourceSetting } from './AssociatedResourceSetting';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAssociatedResourceSettingsResponse extends SdkResponse {
    public settings?: Array<AssociatedResourceSetting>;
    private 'total_count'?: number;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withSettings(settings: Array<AssociatedResourceSetting>): ListAssociatedResourceSettingsResponse {
        this['settings'] = settings;
        return this;
    }
    public withTotalCount(totalCount: number): ListAssociatedResourceSettingsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withPageInfo(pageInfo: PageInfo): ListAssociatedResourceSettingsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}