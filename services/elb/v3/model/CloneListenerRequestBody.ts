import { CloneListenerOption } from './CloneListenerOption';


export class CloneListenerRequestBody {
    private 'target_listener_params'?: Array<CloneListenerOption>;
    public constructor(targetListenerParams?: Array<CloneListenerOption>) { 
        this['target_listener_params'] = targetListenerParams;
    }
    public withTargetListenerParams(targetListenerParams: Array<CloneListenerOption>): CloneListenerRequestBody {
        this['target_listener_params'] = targetListenerParams;
        return this;
    }
    public set targetListenerParams(targetListenerParams: Array<CloneListenerOption>  | undefined) {
        this['target_listener_params'] = targetListenerParams;
    }
    public get targetListenerParams(): Array<CloneListenerOption> | undefined {
        return this['target_listener_params'];
    }
}