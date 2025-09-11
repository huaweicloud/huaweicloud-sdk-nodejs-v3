

export class DatapointResult {
    private 'datapoint_name'?: string;
    private 'datapoint_values'?: Array<string>;
    public constructor(datapointName?: string, datapointValues?: Array<string>) { 
        this['datapoint_name'] = datapointName;
        this['datapoint_values'] = datapointValues;
    }
    public withDatapointName(datapointName: string): DatapointResult {
        this['datapoint_name'] = datapointName;
        return this;
    }
    public set datapointName(datapointName: string  | undefined) {
        this['datapoint_name'] = datapointName;
    }
    public get datapointName(): string | undefined {
        return this['datapoint_name'];
    }
    public withDatapointValues(datapointValues: Array<string>): DatapointResult {
        this['datapoint_values'] = datapointValues;
        return this;
    }
    public set datapointValues(datapointValues: Array<string>  | undefined) {
        this['datapoint_values'] = datapointValues;
    }
    public get datapointValues(): Array<string> | undefined {
        return this['datapoint_values'];
    }
}