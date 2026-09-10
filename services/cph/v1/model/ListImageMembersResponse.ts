import { ListCloudPhoneImagesResponseBodyPageInfo } from './ListCloudPhoneImagesResponseBodyPageInfo';
import { ListImageMembersView } from './ListImageMembersView';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImageMembersResponse extends SdkResponse {
    public members?: Array<ListImageMembersView>;
    private 'page_info'?: ListCloudPhoneImagesResponseBodyPageInfo;
    public constructor() { 
        super();
    }
    public withMembers(members: Array<ListImageMembersView>): ListImageMembersResponse {
        this['members'] = members;
        return this;
    }
    public withPageInfo(pageInfo: ListCloudPhoneImagesResponseBodyPageInfo): ListImageMembersResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: ListCloudPhoneImagesResponseBodyPageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): ListCloudPhoneImagesResponseBodyPageInfo | undefined {
        return this['page_info'];
    }
}