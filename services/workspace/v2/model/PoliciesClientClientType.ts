import { PoliciesClientClientTypeOptions } from './PoliciesClientClientTypeOptions';


export class PoliciesClientClientType {
    private 'client_type_limit'?: boolean;
    public options?: PoliciesClientClientTypeOptions;
    public constructor() { 
    }
    public withClientTypeLimit(clientTypeLimit: boolean): PoliciesClientClientType {
        this['client_type_limit'] = clientTypeLimit;
        return this;
    }
    public set clientTypeLimit(clientTypeLimit: boolean  | undefined) {
        this['client_type_limit'] = clientTypeLimit;
    }
    public get clientTypeLimit(): boolean | undefined {
        return this['client_type_limit'];
    }
    public withOptions(options: PoliciesClientClientTypeOptions): PoliciesClientClientType {
        this['options'] = options;
        return this;
    }
}