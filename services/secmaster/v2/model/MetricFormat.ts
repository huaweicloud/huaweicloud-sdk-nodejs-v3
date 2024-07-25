

export class MetricFormat {
    public data?: string;
    public display?: string;
    private 'display_param'?: { [key: string]: string; };
    private 'data_param'?: { [key: string]: string; };
    public constructor() { 
    }
    public withData(data: string): MetricFormat {
        this['data'] = data;
        return this;
    }
    public withDisplay(display: string): MetricFormat {
        this['display'] = display;
        return this;
    }
    public withDisplayParam(displayParam: { [key: string]: string; }): MetricFormat {
        this['display_param'] = displayParam;
        return this;
    }
    public set displayParam(displayParam: { [key: string]: string; }  | undefined) {
        this['display_param'] = displayParam;
    }
    public get displayParam(): { [key: string]: string; } | undefined {
        return this['display_param'];
    }
    public withDataParam(dataParam: { [key: string]: string; }): MetricFormat {
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