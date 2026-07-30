import { TemplateApplyHistory } from './TemplateApplyHistory';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListParamsTemplateApplyHistoryResponse extends SdkResponse {
    private 'total_count'?: number;
    public histories?: Array<TemplateApplyHistory>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListParamsTemplateApplyHistoryResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withHistories(histories: Array<TemplateApplyHistory>): ListParamsTemplateApplyHistoryResponse {
        this['histories'] = histories;
        return this;
    }
}