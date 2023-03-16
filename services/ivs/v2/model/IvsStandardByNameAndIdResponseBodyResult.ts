import { StandardRespDataByNameAndId } from './StandardRespDataByNameAndId';


export class IvsStandardByNameAndIdResponseBodyResult {
    private 'service_name': string | undefined;
    public count: number;
    private 'resp_data': Array<StandardRespDataByNameAndId> | undefined;
    public constructor(serviceName?: any, count?: any, respData?: any) { 
        this['service_name'] = serviceName;
        this['count'] = count;
        this['resp_data'] = respData;
    }
    public withServiceName(serviceName: string): IvsStandardByNameAndIdResponseBodyResult {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName() {
        return this['service_name'];
    }
    public withCount(count: number): IvsStandardByNameAndIdResponseBodyResult {
        this['count'] = count;
        return this;
    }
    public withRespData(respData: Array<StandardRespDataByNameAndId>): IvsStandardByNameAndIdResponseBodyResult {
        this['resp_data'] = respData;
        return this;
    }
    public set respData(respData: Array<StandardRespDataByNameAndId> | undefined) {
        this['resp_data'] = respData;
    }
    public get respData() {
        return this['resp_data'];
    }
}