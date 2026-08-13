import { FlavorInfoResponse } from './FlavorInfoResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTargetFlavorsResponse extends SdkResponse {
    public count?: number;
    public flavors?: Array<FlavorInfoResponse>;
    private 'change_mode'?: string;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListTargetFlavorsResponse {
        this['count'] = count;
        return this;
    }
    public withFlavors(flavors: Array<FlavorInfoResponse>): ListTargetFlavorsResponse {
        this['flavors'] = flavors;
        return this;
    }
    public withChangeMode(changeMode: string): ListTargetFlavorsResponse {
        this['change_mode'] = changeMode;
        return this;
    }
    public set changeMode(changeMode: string  | undefined) {
        this['change_mode'] = changeMode;
    }
    public get changeMode(): string | undefined {
        return this['change_mode'];
    }
}