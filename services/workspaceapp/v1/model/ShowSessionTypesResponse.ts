import { SessionTypeEntity } from './SessionTypeEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSessionTypesResponse extends SdkResponse {
    private 'session_types'?: Array<SessionTypeEntity>;
    public constructor() { 
        super();
    }
    public withSessionTypes(sessionTypes: Array<SessionTypeEntity>): ShowSessionTypesResponse {
        this['session_types'] = sessionTypes;
        return this;
    }
    public set sessionTypes(sessionTypes: Array<SessionTypeEntity>  | undefined) {
        this['session_types'] = sessionTypes;
    }
    public get sessionTypes(): Array<SessionTypeEntity> | undefined {
        return this['session_types'];
    }
}