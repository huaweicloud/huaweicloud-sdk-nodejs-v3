import { ExtentionReqDataByIdCardImage } from './ExtentionReqDataByIdCardImage';


export class IvsExtentionByIdCardImageRequestBodyData {
    private 'req_data'?: Array<ExtentionReqDataByIdCardImage> | undefined;
    public constructor() { 
    }
    public withReqData(reqData: Array<ExtentionReqDataByIdCardImage>): IvsExtentionByIdCardImageRequestBodyData {
        this['req_data'] = reqData;
        return this;
    }
    public set reqData(reqData: Array<ExtentionReqDataByIdCardImage> | undefined) {
        this['req_data'] = reqData;
    }
    public get reqData() {
        return this['req_data'];
    }
}