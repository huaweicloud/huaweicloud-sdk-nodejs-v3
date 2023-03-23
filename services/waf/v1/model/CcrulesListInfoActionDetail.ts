import { CcrulesListInfoActionDetailResponse } from './CcrulesListInfoActionDetailResponse';


export class CcrulesListInfoActionDetail {
    public response?: CcrulesListInfoActionDetailResponse;
    public constructor() { 
    }
    public withResponse(response: CcrulesListInfoActionDetailResponse): CcrulesListInfoActionDetail {
        this['response'] = response;
        return this;
    }
}