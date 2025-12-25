

export class ShowShipperAuthorizeResponseBodyDataData {
    private 'authorize_status'?: number;
    private 'data_source_query'?: string;
    private 'data_type'?: number;
    public dataspace?: string;
    public id?: number;
    public pipe?: string;
    public region?: string;
    private 'request_time'?: number;
    private 'handler_time'?: number;
    private 'run_status'?: number;
    private 'shipper_id'?: string;
    private 'shipper_name'?: string;
    public workspace?: string;
    public constructor() { 
    }
    public withAuthorizeStatus(authorizeStatus: number): ShowShipperAuthorizeResponseBodyDataData {
        this['authorize_status'] = authorizeStatus;
        return this;
    }
    public set authorizeStatus(authorizeStatus: number  | undefined) {
        this['authorize_status'] = authorizeStatus;
    }
    public get authorizeStatus(): number | undefined {
        return this['authorize_status'];
    }
    public withDataSourceQuery(dataSourceQuery: string): ShowShipperAuthorizeResponseBodyDataData {
        this['data_source_query'] = dataSourceQuery;
        return this;
    }
    public set dataSourceQuery(dataSourceQuery: string  | undefined) {
        this['data_source_query'] = dataSourceQuery;
    }
    public get dataSourceQuery(): string | undefined {
        return this['data_source_query'];
    }
    public withDataType(dataType: number): ShowShipperAuthorizeResponseBodyDataData {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: number  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): number | undefined {
        return this['data_type'];
    }
    public withDataspace(dataspace: string): ShowShipperAuthorizeResponseBodyDataData {
        this['dataspace'] = dataspace;
        return this;
    }
    public withId(id: number): ShowShipperAuthorizeResponseBodyDataData {
        this['id'] = id;
        return this;
    }
    public withPipe(pipe: string): ShowShipperAuthorizeResponseBodyDataData {
        this['pipe'] = pipe;
        return this;
    }
    public withRegion(region: string): ShowShipperAuthorizeResponseBodyDataData {
        this['region'] = region;
        return this;
    }
    public withRequestTime(requestTime: number): ShowShipperAuthorizeResponseBodyDataData {
        this['request_time'] = requestTime;
        return this;
    }
    public set requestTime(requestTime: number  | undefined) {
        this['request_time'] = requestTime;
    }
    public get requestTime(): number | undefined {
        return this['request_time'];
    }
    public withHandlerTime(handlerTime: number): ShowShipperAuthorizeResponseBodyDataData {
        this['handler_time'] = handlerTime;
        return this;
    }
    public set handlerTime(handlerTime: number  | undefined) {
        this['handler_time'] = handlerTime;
    }
    public get handlerTime(): number | undefined {
        return this['handler_time'];
    }
    public withRunStatus(runStatus: number): ShowShipperAuthorizeResponseBodyDataData {
        this['run_status'] = runStatus;
        return this;
    }
    public set runStatus(runStatus: number  | undefined) {
        this['run_status'] = runStatus;
    }
    public get runStatus(): number | undefined {
        return this['run_status'];
    }
    public withShipperId(shipperId: string): ShowShipperAuthorizeResponseBodyDataData {
        this['shipper_id'] = shipperId;
        return this;
    }
    public set shipperId(shipperId: string  | undefined) {
        this['shipper_id'] = shipperId;
    }
    public get shipperId(): string | undefined {
        return this['shipper_id'];
    }
    public withShipperName(shipperName: string): ShowShipperAuthorizeResponseBodyDataData {
        this['shipper_name'] = shipperName;
        return this;
    }
    public set shipperName(shipperName: string  | undefined) {
        this['shipper_name'] = shipperName;
    }
    public get shipperName(): string | undefined {
        return this['shipper_name'];
    }
    public withWorkspace(workspace: string): ShowShipperAuthorizeResponseBodyDataData {
        this['workspace'] = workspace;
        return this;
    }
}