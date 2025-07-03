import { LaunchTemplate } from './LaunchTemplate';
import { ResponsePageInfoV3 } from './ResponsePageInfoV3';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTemplatesResponse extends SdkResponse {
    private 'launch_templates'?: Array<LaunchTemplate>;
    private 'page_info'?: ResponsePageInfoV3;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withLaunchTemplates(launchTemplates: Array<LaunchTemplate>): ListTemplatesResponse {
        this['launch_templates'] = launchTemplates;
        return this;
    }
    public set launchTemplates(launchTemplates: Array<LaunchTemplate>  | undefined) {
        this['launch_templates'] = launchTemplates;
    }
    public get launchTemplates(): Array<LaunchTemplate> | undefined {
        return this['launch_templates'];
    }
    public withPageInfo(pageInfo: ResponsePageInfoV3): ListTemplatesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: ResponsePageInfoV3  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): ResponsePageInfoV3 | undefined {
        return this['page_info'];
    }
    public withXRequestId(xRequestId: string): ListTemplatesResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}