import { DesktopResourcePackage } from './DesktopResourcePackage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResourcePackagesResponse extends SdkResponse {
    private 'desktop_resource_packages'?: Array<DesktopResourcePackage>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withDesktopResourcePackages(desktopResourcePackages: Array<DesktopResourcePackage>): ListResourcePackagesResponse {
        this['desktop_resource_packages'] = desktopResourcePackages;
        return this;
    }
    public set desktopResourcePackages(desktopResourcePackages: Array<DesktopResourcePackage>  | undefined) {
        this['desktop_resource_packages'] = desktopResourcePackages;
    }
    public get desktopResourcePackages(): Array<DesktopResourcePackage> | undefined {
        return this['desktop_resource_packages'];
    }
    public withTotalCount(totalCount: number): ListResourcePackagesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}