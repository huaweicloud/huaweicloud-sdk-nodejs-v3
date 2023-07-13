import { CreateCcRuleRequestBodyActionDetailResponse } from './CreateCcRuleRequestBodyActionDetailResponse';


export class CreateCcRuleRequestBodyActionDetail {
    public response?: CreateCcRuleRequestBodyActionDetailResponse;
    public constructor() { 
    }
    public withResponse(response: CreateCcRuleRequestBodyActionDetailResponse): CreateCcRuleRequestBodyActionDetail {
        this['response'] = response;
        return this;
    }
}