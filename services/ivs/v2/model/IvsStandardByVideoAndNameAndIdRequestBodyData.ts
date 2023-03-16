import { StandardReqDataByVideoAndNameAndId } from './StandardReqDataByVideoAndNameAndId';


export class IvsStandardByVideoAndNameAndIdRequestBodyData {
    private 'req_data'?: Array<StandardReqDataByVideoAndNameAndId> | undefined;
    public constructor() { 
    }
    public withReqData(reqData: Array<StandardReqDataByVideoAndNameAndId>): IvsStandardByVideoAndNameAndIdRequestBodyData {
        this['req_data'] = reqData;
        return this;
    }
    public set reqData(reqData: Array<StandardReqDataByVideoAndNameAndId> | undefined) {
        this['req_data'] = reqData;
    }
    public get reqData() {
        return this['req_data'];
    }
}