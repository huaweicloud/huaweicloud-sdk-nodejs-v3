import { EsListenerRequest } from './EsListenerRequest';


export class UpdateEsListenerRequestBody {
    public listener?: EsListenerRequest;
    public constructor(listener?: EsListenerRequest) { 
        this['listener'] = listener;
    }
    public withListener(listener: EsListenerRequest): UpdateEsListenerRequestBody {
        this['listener'] = listener;
        return this;
    }
}