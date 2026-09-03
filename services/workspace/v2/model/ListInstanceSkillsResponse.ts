import { InstanceSkillItemVO } from './InstanceSkillItemVO';
import { ModelPageResp } from './ModelPageResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceSkillsResponse extends SdkResponse {
    public total?: number;
    public items?: Array<InstanceSkillItemVO>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListInstanceSkillsResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<InstanceSkillItemVO>): ListInstanceSkillsResponse {
        this['items'] = items;
        return this;
    }
    public withXRequestId(xRequestId: string): ListInstanceSkillsResponse {
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