import { WaybillElectronicRequestBody } from './WaybillElectronicRequestBody';


export class RecognizeWaybillElectronicRequest {
    public body?: WaybillElectronicRequestBody;
    public constructor() { 
    }
    public withBody(body: WaybillElectronicRequestBody): RecognizeWaybillElectronicRequest {
        this['body'] = body;
        return this;
    }
}