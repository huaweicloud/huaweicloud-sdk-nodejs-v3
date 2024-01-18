import { CreateCgwRequestBodyContent } from './CreateCgwRequestBodyContent';


export class CreateCgwRequestBody {
    private 'customer_gateway'?: CreateCgwRequestBodyContent;
    public constructor(customerGateway?: CreateCgwRequestBodyContent) { 
        this['customer_gateway'] = customerGateway;
    }
    public withCustomerGateway(customerGateway: CreateCgwRequestBodyContent): CreateCgwRequestBody {
        this['customer_gateway'] = customerGateway;
        return this;
    }
    public set customerGateway(customerGateway: CreateCgwRequestBodyContent  | undefined) {
        this['customer_gateway'] = customerGateway;
    }
    public get customerGateway(): CreateCgwRequestBodyContent | undefined {
        return this['customer_gateway'];
    }
}