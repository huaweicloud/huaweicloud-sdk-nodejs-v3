import { HourPackage } from './HourPackage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHourPackagesTypeResponse extends SdkResponse {
    private 'hour_packages'?: Array<HourPackage>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withHourPackages(hourPackages: Array<HourPackage>): ListHourPackagesTypeResponse {
        this['hour_packages'] = hourPackages;
        return this;
    }
    public set hourPackages(hourPackages: Array<HourPackage>  | undefined) {
        this['hour_packages'] = hourPackages;
    }
    public get hourPackages(): Array<HourPackage> | undefined {
        return this['hour_packages'];
    }
    public withTotalCount(totalCount: number): ListHourPackagesTypeResponse {
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