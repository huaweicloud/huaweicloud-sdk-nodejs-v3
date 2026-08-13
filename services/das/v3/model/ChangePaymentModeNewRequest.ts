import { ChangePaymentModeForConsoleBody } from './ChangePaymentModeForConsoleBody';


export class ChangePaymentModeNewRequest {
    public body?: ChangePaymentModeForConsoleBody;
    public constructor() { 
    }
    public withBody(body: ChangePaymentModeForConsoleBody): ChangePaymentModeNewRequest {
        this['body'] = body;
        return this;
    }
}