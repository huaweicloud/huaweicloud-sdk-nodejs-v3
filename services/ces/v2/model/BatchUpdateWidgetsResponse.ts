import { BatchUpdateWidgetInfo } from './BatchUpdateWidgetInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchUpdateWidgetsResponse extends SdkResponse {
    public widgets?: Array<BatchUpdateWidgetInfo>;
    public constructor() { 
        super();
    }
    public withWidgets(widgets: Array<BatchUpdateWidgetInfo>): BatchUpdateWidgetsResponse {
        this['widgets'] = widgets;
        return this;
    }
}