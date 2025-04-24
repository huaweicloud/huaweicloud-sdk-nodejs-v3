import { ImageMember } from './ImageMember';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImageMembersResponse extends SdkResponse {
    public members?: Array<ImageMember>;
    public schema?: string;
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
}