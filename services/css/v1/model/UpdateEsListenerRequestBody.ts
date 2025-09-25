import { EsListenerRequest } from './EsListenerRequest';


export class UpdateEsListenerRequestBody {
    public listener?: EsListenerRequest;
    public type?: string;
    public constructor(listener?: EsListenerRequest) { 
        this['listener'] = listener;
    }
    public withListener(listener: EsListenerRequest): UpdateEsListenerRequestBody {
        this['listener'] = listener;
        return this;
    }
    public withType(type: string): UpdateEsListenerRequestBody {
        this['type'] = type;
        return this;
    }
}