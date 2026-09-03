import { ModelPageResp } from './ModelPageResp';
import { SkillResourceItemVO } from './SkillResourceItemVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCommonSkillResourcesResponse extends SdkResponse {
    public total?: number;
    public items?: Array<SkillResourceItemVO>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListCommonSkillResourcesResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<SkillResourceItemVO>): ListCommonSkillResourcesResponse {
        this['items'] = items;
        return this;
    }
    public withXRequestId(xRequestId: string): ListCommonSkillResourcesResponse {
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