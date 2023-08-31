
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDashboardWidgetsResponse extends SdkResponse {
    private 'widget_ids'?: Array<string>;
    public constructor() { 
        super();
    }
    public withWidgetIds(widgetIds: Array<string>): CreateDashboardWidgetsResponse {
        this['widget_ids'] = widgetIds;
        return this;
    }
    public set widgetIds(widgetIds: Array<string>  | undefined) {
        this['widget_ids'] = widgetIds;
    }
    public get widgetIds(): Array<string> | undefined {
        return this['widget_ids'];
    }
}