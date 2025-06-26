import { PageResp } from './PageResp';
import { PublishableApp } from './PublishableApp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPublishableAppResponse extends SdkResponse {
    public count?: number;
    private 'group_images'?: Array<string>;
    public items?: Array<PublishableApp>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ShowPublishableAppResponse {
        this['count'] = count;
        return this;
    }
    public withGroupImages(groupImages: Array<string>): ShowPublishableAppResponse {
        this['group_images'] = groupImages;
        return this;
    }
    public set groupImages(groupImages: Array<string>  | undefined) {
        this['group_images'] = groupImages;
    }
    public get groupImages(): Array<string> | undefined {
        return this['group_images'];
    }
    public withItems(items: Array<PublishableApp>): ShowPublishableAppResponse {
        this['items'] = items;
        return this;
    }
}