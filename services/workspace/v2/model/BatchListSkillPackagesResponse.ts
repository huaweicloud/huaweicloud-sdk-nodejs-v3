import { BatchListSkillPackageItem } from './BatchListSkillPackageItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchListSkillPackagesResponse extends SdkResponse {
    public count?: number;
    public items?: Array<BatchListSkillPackageItem>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withCount(count: number): BatchListSkillPackagesResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<BatchListSkillPackageItem>): BatchListSkillPackagesResponse {
        this['items'] = items;
        return this;
    }
    public withXRequestId(xRequestId: string): BatchListSkillPackagesResponse {
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