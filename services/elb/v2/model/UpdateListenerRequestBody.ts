import { UpdateListenerReq } from './UpdateListenerReq';


export class UpdateListenerRequestBody {
    public listener?: UpdateListenerReq;
    public constructor(listener?: UpdateListenerReq) { 
        this['listener'] = listener;
    }
    public withListener(listener: UpdateListenerReq): UpdateListenerRequestBody {
        this['listener'] = listener;
        return this;
    }
}