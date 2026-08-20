import { ThirdPartyAssociatedResultData } from './ThirdPartyAssociatedResultData';


export class ThirdPartyAssociatedResult {
    public data?: ThirdPartyAssociatedResultData;
    public count?: string;
    public constructor() { 
    }
    public withData(data: ThirdPartyAssociatedResultData): ThirdPartyAssociatedResult {
        this['data'] = data;
        return this;
    }
    public withCount(count: string): ThirdPartyAssociatedResult {
        this['count'] = count;
        return this;
    }
}