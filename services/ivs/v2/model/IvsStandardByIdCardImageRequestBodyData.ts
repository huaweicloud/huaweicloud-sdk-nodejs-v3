import { ReqDataByIdCardImage } from './ReqDataByIdCardImage';


export class IvsStandardByIdCardImageRequestBodyData {
    private 'req_data'?: Array<ReqDataByIdCardImage> | undefined;
    public constructor() { 
    }
    public withReqData(reqData: Array<ReqDataByIdCardImage>): IvsStandardByIdCardImageRequestBodyData {
        this['req_data'] = reqData;
        return this;
    }
    public set reqData(reqData: Array<ReqDataByIdCardImage> | undefined) {
        this['req_data'] = reqData;
    }
    public get reqData() {
        return this['req_data'];
    }
}