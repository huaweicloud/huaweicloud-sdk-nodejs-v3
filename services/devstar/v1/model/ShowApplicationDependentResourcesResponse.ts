import { ResouceInfo } from './ResouceInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowApplicationDependentResourcesResponse extends SdkResponse {
    private 'dependent_services'?: Array<ResouceInfo>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withDependentServices(dependentServices: Array<ResouceInfo>): ShowApplicationDependentResourcesResponse {
        this['dependent_services'] = dependentServices;
        return this;
    }
    public set dependentServices(dependentServices: Array<ResouceInfo>  | undefined) {
        this['dependent_services'] = dependentServices;
    }
    public get dependentServices(): Array<ResouceInfo> | undefined {
        return this['dependent_services'];
    }
    public withCount(count: number): ShowApplicationDependentResourcesResponse {
        this['count'] = count;
        return this;
    }
}