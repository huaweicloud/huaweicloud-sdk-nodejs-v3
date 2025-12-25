

export class LayoutMetricFormat {
    public data?: string;
    public display?: string;
    private 'display_param'?: { [key: string]: string; };
    private 'data_param'?: { [key: string]: string; };
    public constructor() { 
    }
    public withData(data: string): LayoutMetricFormat {
        this['data'] = data;
        return this;
    }
    public withDisplay(display: string): LayoutMetricFormat {
        this['display'] = display;
        return this;
    }
    public withDisplayParam(displayParam: { [key: string]: string; }): LayoutMetricFormat {
        this['display_param'] = displayParam;
        return this;
    }
    public set displayParam(displayParam: { [key: string]: string; }  | undefined) {
        this['display_param'] = displayParam;
    }
    public get displayParam(): { [key: string]: string; } | undefined {
        return this['display_param'];
    }
    public withDataParam(dataParam: { [key: string]: string; }): LayoutMetricFormat {
        this['data_param'] = dataParam;
        return this;
    }
    public set dataParam(dataParam: { [key: string]: string; }  | undefined) {
        this['data_param'] = dataParam;
    }
    public get dataParam(): { [key: string]: string; } | undefined {
        return this['data_param'];
    }
}