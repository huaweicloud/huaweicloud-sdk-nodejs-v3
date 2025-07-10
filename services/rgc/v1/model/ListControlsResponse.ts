import { Control } from './Control';
import { PageInfoDto } from './PageInfoDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListControlsResponse extends SdkResponse {
    public controls?: Array<Control>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withControls(controls: Array<Control>): ListControlsResponse {
        this['controls'] = controls;
        return this;
    }
    public withPageInfo(pageInfo: PageInfoDto): ListControlsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDto  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDto | undefined {
        return this['page_info'];
    }
}