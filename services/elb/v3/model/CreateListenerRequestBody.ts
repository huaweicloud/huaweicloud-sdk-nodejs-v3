import { CreateListenerOption } from './CreateListenerOption';


export class CreateListenerRequestBody {
    public listener: CreateListenerOption;
    public constructor(listener?: any) { 
        this['listener'] = listener;
    }
    public withListener(listener: CreateListenerOption): CreateListenerRequestBody {
        this['listener'] = listener;
        return this;
    }
}