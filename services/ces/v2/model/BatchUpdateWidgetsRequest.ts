import { UpdateWidgetInfo } from './UpdateWidgetInfo';


export class BatchUpdateWidgetsRequest {
    public body?: Array<UpdateWidgetInfo>;
    public constructor() { 
    }
    public withBody(body: Array<UpdateWidgetInfo>): BatchUpdateWidgetsRequest {
        this['body'] = body;
        return this;
    }
}