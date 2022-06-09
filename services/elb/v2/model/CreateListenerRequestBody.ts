import { CreateListenerReq } from './CreateListenerReq';


export class CreateListenerRequestBody {
    public listener: CreateListenerReq;
    public constructor(listener?: any) { 
        this['listener'] = listener;
    }
    public withListener(listener: CreateListenerReq): CreateListenerRequestBody {
        this['listener'] = listener;
        return this;
    }
}