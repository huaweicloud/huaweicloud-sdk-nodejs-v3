import { UpdateCgwRequestBodyContent } from './UpdateCgwRequestBodyContent';


export class UpdateCgwRequestBody {
    private 'customer_gateway'?: UpdateCgwRequestBodyContent;
    public constructor(customerGateway?: UpdateCgwRequestBodyContent) { 
        this['customer_gateway'] = customerGateway;
    }
    public withCustomerGateway(customerGateway: UpdateCgwRequestBodyContent): UpdateCgwRequestBody {
        this['customer_gateway'] = customerGateway;
        return this;
    }
    public set customerGateway(customerGateway: UpdateCgwRequestBodyContent  | undefined) {
        this['customer_gateway'] = customerGateway;
    }
    public get customerGateway(): UpdateCgwRequestBodyContent | undefined {
        return this['customer_gateway'];
    }
}