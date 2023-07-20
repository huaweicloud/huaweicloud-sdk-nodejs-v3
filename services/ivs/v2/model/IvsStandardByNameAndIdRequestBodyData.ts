import { StandardReqDataByNameAndId } from './StandardReqDataByNameAndId';


export class IvsStandardByNameAndIdRequestBodyData {
    private 'req_data'?: Array<StandardReqDataByNameAndId>;
    public constructor() { 
    }
    public withReqData(reqData: Array<StandardReqDataByNameAndId>): IvsStandardByNameAndIdRequestBodyData {
        this['req_data'] = reqData;
        return this;
    }
    public set reqData(reqData: Array<StandardReqDataByNameAndId>  | undefined) {
        this['req_data'] = reqData;
    }
    public get reqData(): Array<StandardReqDataByNameAndId> | undefined {
        return this['req_data'];
    }
}