import { UpdateListenerOption } from './UpdateListenerOption';


export class UpdateListenerRequestBody {
    public listener?: UpdateListenerOption;
    public constructor(listener?: UpdateListenerOption) { 
        this['listener'] = listener;
    }
    public withListener(listener: UpdateListenerOption): UpdateListenerRequestBody {
        this['listener'] = listener;
        return this;
    }
}