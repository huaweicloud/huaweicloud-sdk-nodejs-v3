import { DataConnector } from './DataConnector';


export class DataConnectorReq {
    private 'data_connector'?: DataConnector;
    public constructor(dataConnector?: DataConnector) { 
        this['data_connector'] = dataConnector;
    }
    public withDataConnector(dataConnector: DataConnector): DataConnectorReq {
        this['data_connector'] = dataConnector;
        return this;
    }
    public set dataConnector(dataConnector: DataConnector  | undefined) {
        this['data_connector'] = dataConnector;
    }
    public get dataConnector(): DataConnector | undefined {
        return this['data_connector'];
    }
}