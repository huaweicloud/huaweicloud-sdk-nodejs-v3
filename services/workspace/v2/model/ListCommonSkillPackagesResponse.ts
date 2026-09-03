import { ModelPageResp } from './ModelPageResp';
import { SkillPackageItemVO } from './SkillPackageItemVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCommonSkillPackagesResponse extends SdkResponse {
    public total?: number;
    public items?: Array<SkillPackageItemVO>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListCommonSkillPackagesResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<SkillPackageItemVO>): ListCommonSkillPackagesResponse {
        this['items'] = items;
        return this;
    }
    public withXRequestId(xRequestId: string): ListCommonSkillPackagesResponse {
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