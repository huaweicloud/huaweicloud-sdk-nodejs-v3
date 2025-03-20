import { PersonnelResponse } from './PersonnelResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPersonnelResponse extends SdkResponse {
    public personnel?: Array<PersonnelResponse>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withPersonnel(personnel: Array<PersonnelResponse>): ListPersonnelResponse {
        this['personnel'] = personnel;
        return this;
    }
    public withCount(count: number): ListPersonnelResponse {
        this['count'] = count;
        return this;
    }
}