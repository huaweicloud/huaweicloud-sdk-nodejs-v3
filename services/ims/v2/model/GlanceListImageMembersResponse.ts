import { GlanceImageMembers } from './GlanceImageMembers';
import { GlancePageInfo } from './GlancePageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GlanceListImageMembersResponse extends SdkResponse {
    public members?: Array<GlanceImageMembers>;
    public schema?: string;
    private 'page_info'?: GlancePageInfo;
    public constructor() { 
        super();
    }
    public withMembers(members: Array<GlanceImageMembers>): GlanceListImageMembersResponse {
        this['members'] = members;
        return this;
    }
    public withSchema(schema: string): GlanceListImageMembersResponse {
        this['schema'] = schema;
        return this;
    }
    public withPageInfo(pageInfo: GlancePageInfo): GlanceListImageMembersResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: GlancePageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): GlancePageInfo | undefined {
        return this['page_info'];
    }
}