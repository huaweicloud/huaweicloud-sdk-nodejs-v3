import { WidgetInfoWithId } from './WidgetInfoWithId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDashboardWidgetsResponse extends SdkResponse {
    public widgets?: Array<WidgetInfoWithId>;
    public constructor() { 
        super();
    }
    public withWidgets(widgets: Array<WidgetInfoWithId>): ListDashboardWidgetsResponse {
        this['widgets'] = widgets;
        return this;
    }
}