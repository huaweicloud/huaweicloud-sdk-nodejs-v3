import { CreateRetryPolicyRequestBodyDataObject } from './CreateRetryPolicyRequestBodyDataObject';


export class CreateRetryPolicyRequestBody {
    private 'data_object'?: CreateRetryPolicyRequestBodyDataObject;
    public constructor() { 
    }
    public withDataObject(dataObject: CreateRetryPolicyRequestBodyDataObject): CreateRetryPolicyRequestBody {
        this['data_object'] = dataObject;
        return this;
    }
    public set dataObject(dataObject: CreateRetryPolicyRequestBodyDataObject  | undefined) {
        this['data_object'] = dataObject;
    }
    public get dataObject(): CreateRetryPolicyRequestBodyDataObject | undefined {
        return this['data_object'];
    }
}