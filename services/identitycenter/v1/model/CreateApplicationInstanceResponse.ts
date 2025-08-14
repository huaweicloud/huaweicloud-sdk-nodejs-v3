import { ApplicationInstanceDto } from './ApplicationInstanceDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateApplicationInstanceResponse extends SdkResponse {
    private 'application_instance'?: ApplicationInstanceDto;
    public constructor() { 
        super();
    }
    public withApplicationInstance(applicationInstance: ApplicationInstanceDto): CreateApplicationInstanceResponse {
        this['application_instance'] = applicationInstance;
        return this;
    }
    public set applicationInstance(applicationInstance: ApplicationInstanceDto  | undefined) {
        this['application_instance'] = applicationInstance;
    }
    public get applicationInstance(): ApplicationInstanceDto | undefined {
        return this['application_instance'];
    }
}