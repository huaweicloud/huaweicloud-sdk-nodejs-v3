import { DataObjectRefInfo } from './DataObjectRefInfo';


export class PlaybookcontextRef {
    private 'data_object'?: DataObjectRefInfo;
    public constructor(dataObject?: DataObjectRefInfo) { 
        this['data_object'] = dataObject;
    }
    public withDataObject(dataObject: DataObjectRefInfo): PlaybookcontextRef {
        this['data_object'] = dataObject;
        return this;
    }
    public set dataObject(dataObject: DataObjectRefInfo  | undefined) {
        this['data_object'] = dataObject;
    }
    public get dataObject(): DataObjectRefInfo | undefined {
        return this['data_object'];
    }
}