
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResourceMappingResponse extends SdkResponse {
    private 'resource_mapping'?: { [key: string]: string; };
    public constructor() { 
        super();
    }
    public withResourceMapping(resourceMapping: { [key: string]: string; }): ListResourceMappingResponse {
        this['resource_mapping'] = resourceMapping;
        return this;
    }
    public set resourceMapping(resourceMapping: { [key: string]: string; }  | undefined) {
        this['resource_mapping'] = resourceMapping;
    }
    public get resourceMapping(): { [key: string]: string; } | undefined {
        return this['resource_mapping'];
    }
}