import { ExtentionReqDataByNameAndId } from './ExtentionReqDataByNameAndId';


export class IvsExtentionByNameAndIdRequestBodyData {
    private 'req_data'?: Array<ExtentionReqDataByNameAndId>;
    public constructor() { 
    }
    public withReqData(reqData: Array<ExtentionReqDataByNameAndId>): IvsExtentionByNameAndIdRequestBodyData {
        this['req_data'] = reqData;
        return this;
    }
    public set reqData(reqData: Array<ExtentionReqDataByNameAndId>  | undefined) {
        this['req_data'] = reqData;
    }
    public get reqData(): Array<ExtentionReqDataByNameAndId> | undefined {
        return this['req_data'];
    }
}