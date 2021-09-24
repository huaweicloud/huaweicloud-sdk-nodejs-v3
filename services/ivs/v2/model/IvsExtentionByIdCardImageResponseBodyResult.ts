import { ExtentionRespDataByIdCardImage } from './ExtentionRespDataByIdCardImage';


export class IvsExtentionByIdCardImageResponseBodyResult {
    private 'service_name'?: string | undefined;
    public count?: number;
    private 'resp_data'?: Array<ExtentionRespDataByIdCardImage> | undefined;
    public constructor() { 
    }
    public withServiceName(serviceName: string): IvsExtentionByIdCardImageResponseBodyResult {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName() {
        return this['service_name'];
    }
    public withCount(count: number): IvsExtentionByIdCardImageResponseBodyResult {
        this['count'] = count;
        return this;
    }
    public withRespData(respData: Array<ExtentionRespDataByIdCardImage>): IvsExtentionByIdCardImageResponseBodyResult {
        this['resp_data'] = respData;
        return this;
    }
    public set respData(respData: Array<ExtentionRespDataByIdCardImage> | undefined) {
        this['resp_data'] = respData;
    }
    public get respData() {
        return this['resp_data'];
    }
}