import { Registry } from './Registry';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceRegistriesResponse extends SdkResponse {
    public registries?: Array<Registry>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withRegistries(registries: Array<Registry>): ListInstanceRegistriesResponse {
        this['registries'] = registries;
        return this;
    }
    public withTotal(total: number): ListInstanceRegistriesResponse {
        this['total'] = total;
        return this;
    }
}