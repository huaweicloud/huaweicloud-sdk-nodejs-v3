import { Role } from './Role';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServiceAgencyResponse extends SdkResponse {
    private 'create_agency'?: boolean;
    private 'role_descriptions'?: Array<Role>;
    public constructor() { 
        super();
    }
    public withCreateAgency(createAgency: boolean): ListServiceAgencyResponse {
        this['create_agency'] = createAgency;
        return this;
    }
    public set createAgency(createAgency: boolean  | undefined) {
        this['create_agency'] = createAgency;
    }
    public get createAgency(): boolean | undefined {
        return this['create_agency'];
    }
    public withRoleDescriptions(roleDescriptions: Array<Role>): ListServiceAgencyResponse {
        this['role_descriptions'] = roleDescriptions;
        return this;
    }
    public set roleDescriptions(roleDescriptions: Array<Role>  | undefined) {
        this['role_descriptions'] = roleDescriptions;
    }
    public get roleDescriptions(): Array<Role> | undefined {
        return this['role_descriptions'];
    }
}