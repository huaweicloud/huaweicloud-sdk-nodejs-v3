import { StandardRespDataByNameAndId } from './StandardRespDataByNameAndId';


export class IvsStandardByNameAndIdResponseBodyResult {
    private 'service_name'?: string;
    public count?: number;
    private 'resp_data'?: Array<StandardRespDataByNameAndId>;
    public constructor(serviceName?: string, count?: number, respData?: Array<StandardRespDataByNameAndId>) { 
        this['service_name'] = serviceName;
        this['count'] = count;
        this['resp_data'] = respData;
    }
    public withServiceName(serviceName: string): IvsStandardByNameAndIdResponseBodyResult {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
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
    public set respData(respData: Array<StandardRespDataByNameAndId>  | undefined) {
        this['resp_data'] = respData;
    }
    public get respData(): Array<StandardRespDataByNameAndId> | undefined {
        return this['resp_data'];
    }
}