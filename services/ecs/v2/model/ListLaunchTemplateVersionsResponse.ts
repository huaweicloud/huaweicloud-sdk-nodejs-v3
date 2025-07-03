import { ResponsePageInfoV3 } from './ResponsePageInfoV3';
import { TemplateVersion } from './TemplateVersion';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLaunchTemplateVersionsResponse extends SdkResponse {
    private 'launch_template_versions'?: Array<TemplateVersion>;
    private 'page_info'?: ResponsePageInfoV3;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withLaunchTemplateVersions(launchTemplateVersions: Array<TemplateVersion>): ListLaunchTemplateVersionsResponse {
        this['launch_template_versions'] = launchTemplateVersions;
        return this;
    }
    public set launchTemplateVersions(launchTemplateVersions: Array<TemplateVersion>  | undefined) {
        this['launch_template_versions'] = launchTemplateVersions;
    }
    public get launchTemplateVersions(): Array<TemplateVersion> | undefined {
        return this['launch_template_versions'];
    }
    public withPageInfo(pageInfo: ResponsePageInfoV3): ListLaunchTemplateVersionsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: ResponsePageInfoV3  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): ResponsePageInfoV3 | undefined {
        return this['page_info'];
    }
    public withXRequestId(xRequestId: string): ListLaunchTemplateVersionsResponse {
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