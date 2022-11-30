import { GlanceImageMembers } from './GlanceImageMembers';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GlanceListImageMembersResponse extends SdkResponse {
    public members?: Array<GlanceImageMembers>;
    public schema?: string;
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
}