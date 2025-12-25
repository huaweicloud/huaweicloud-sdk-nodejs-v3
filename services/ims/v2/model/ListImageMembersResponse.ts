import { GlancePageInfo } from './GlancePageInfo';
import { ImageMember } from './ImageMember';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImageMembersResponse extends SdkResponse {
    public members?: Array<ImageMember>;
    public schema?: string;
    private 'page_info'?: GlancePageInfo;
    public constructor() { 
        super();
    }
    public withMembers(members: Array<ImageMember>): ListImageMembersResponse {
        this['members'] = members;
        return this;
    }
    public withSchema(schema: string): ListImageMembersResponse {
        this['schema'] = schema;
        return this;
    }
    public withPageInfo(pageInfo: GlancePageInfo): ListImageMembersResponse {
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