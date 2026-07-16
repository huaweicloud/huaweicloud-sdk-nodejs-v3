import { CompareColumns } from './CompareColumns';
import { StepExecutionResp } from './StepExecutionResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWorkflowStepExecutionResponse extends SdkResponse {
    public total?: number;
    public count?: number;
    public items?: Array<StepExecutionResp>;
    private 'default_order'?: string;
    private 'compare_columns'?: CompareColumns;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListWorkflowStepExecutionResponse {
        this['total'] = total;
        return this;
    }
    public withCount(count: number): ListWorkflowStepExecutionResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<StepExecutionResp>): ListWorkflowStepExecutionResponse {
        this['items'] = items;
        return this;
    }
    public withDefaultOrder(defaultOrder: string): ListWorkflowStepExecutionResponse {
        this['default_order'] = defaultOrder;
        return this;
    }
    public set defaultOrder(defaultOrder: string  | undefined) {
        this['default_order'] = defaultOrder;
    }
    public get defaultOrder(): string | undefined {
        return this['default_order'];
    }
    public withCompareColumns(compareColumns: CompareColumns): ListWorkflowStepExecutionResponse {
        this['compare_columns'] = compareColumns;
        return this;
    }
    public set compareColumns(compareColumns: CompareColumns  | undefined) {
        this['compare_columns'] = compareColumns;
    }
    public get compareColumns(): CompareColumns | undefined {
        return this['compare_columns'];
    }
}