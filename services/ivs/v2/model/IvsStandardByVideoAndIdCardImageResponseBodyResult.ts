import { RespDataByVideoAndIdCardImage } from './RespDataByVideoAndIdCardImage';


export class IvsStandardByVideoAndIdCardImageResponseBodyResult {
    private 'service_name'?: string;
    public count?: number;
    private 'resp_data'?: Array<RespDataByVideoAndIdCardImage>;
    public constructor(serviceName?: string, count?: number, respData?: Array<RespDataByVideoAndIdCardImage>) { 
        this['service_name'] = serviceName;
        this['count'] = count;
        this['resp_data'] = respData;
    }
    public withServiceName(serviceName: string): IvsStandardByVideoAndIdCardImageResponseBodyResult {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withCount(count: number): IvsStandardByVideoAndIdCardImageResponseBodyResult {
        this['count'] = count;
        return this;
    }
    public withRespData(respData: Array<RespDataByVideoAndIdCardImage>): IvsStandardByVideoAndIdCardImageResponseBodyResult {
        this['resp_data'] = respData;
        return this;
    }
    public set respData(respData: Array<RespDataByVideoAndIdCardImage>  | undefined) {
        this['resp_data'] = respData;
    }
    public get respData(): Array<RespDataByVideoAndIdCardImage> | undefined {
        return this['resp_data'];
    }
}