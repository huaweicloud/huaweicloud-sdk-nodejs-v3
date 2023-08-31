

export class WidgetDisplayMode {
    private 'row_widget_num'?: number;
    public constructor() { 
    }
    public withRowWidgetNum(rowWidgetNum: number): WidgetDisplayMode {
        this['row_widget_num'] = rowWidgetNum;
        return this;
    }
    public set rowWidgetNum(rowWidgetNum: number  | undefined) {
        this['row_widget_num'] = rowWidgetNum;
    }
    public get rowWidgetNum(): number | undefined {
        return this['row_widget_num'];
    }
}