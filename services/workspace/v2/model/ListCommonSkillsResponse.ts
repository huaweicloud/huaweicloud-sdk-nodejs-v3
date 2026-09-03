import { ModelPageResp } from './ModelPageResp';
import { SkillListItemVO } from './SkillListItemVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCommonSkillsResponse extends SdkResponse {
    public total?: number;
    public items?: Array<SkillListItemVO>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListCommonSkillsResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<SkillListItemVO>): ListCommonSkillsResponse {
        this['items'] = items;
        return this;
    }
    public withXRequestId(xRequestId: string): ListCommonSkillsResponse {
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