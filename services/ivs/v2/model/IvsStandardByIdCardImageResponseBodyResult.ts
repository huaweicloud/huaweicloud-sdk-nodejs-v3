import { RespDataByIdCardImage } from './RespDataByIdCardImage';


export class IvsStandardByIdCardImageResponseBodyResult {
    private 'service_name'?: string;
    public count?: number;
    private 'resp_data'?: Array<RespDataByIdCardImage>;
    public constructor(serviceName?: string, count?: number, respData?: Array<RespDataByIdCardImage>) { 
        this['service_name'] = serviceName;
        this['count'] = count;
        this['resp_data'] = respData;
    }
    public withServiceName(serviceName: string): IvsStandardByIdCardImageResponseBodyResult {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withCount(count: number): IvsStandardByIdCardImageResponseBodyResult {
        this['count'] = count;
        return this;
    }
    public withRespData(respData: Array<RespDataByIdCardImage>): IvsStandardByIdCardImageResponseBodyResult {
        this['resp_data'] = respData;
        return this;
    }
    public set respData(respData: Array<RespDataByIdCardImage>  | undefined) {
        this['resp_data'] = respData;
    }
    public get respData(): Array<RespDataByIdCardImage> | undefined {
        return this['resp_data'];
    }
}