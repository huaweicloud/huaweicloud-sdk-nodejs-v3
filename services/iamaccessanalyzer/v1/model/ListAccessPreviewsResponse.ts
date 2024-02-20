import { AccessPreviewSummary } from './AccessPreviewSummary';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAccessPreviewsResponse extends SdkResponse {
    private 'access_previews'?: Array<AccessPreviewSummary>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withAccessPreviews(accessPreviews: Array<AccessPreviewSummary>): ListAccessPreviewsResponse {
        this['access_previews'] = accessPreviews;
        return this;
    }
    public set accessPreviews(accessPreviews: Array<AccessPreviewSummary>  | undefined) {
        this['access_previews'] = accessPreviews;
    }
    public get accessPreviews(): Array<AccessPreviewSummary> | undefined {
        return this['access_previews'];
    }
    public withPageInfo(pageInfo: PageInfo): ListAccessPreviewsResponse {
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