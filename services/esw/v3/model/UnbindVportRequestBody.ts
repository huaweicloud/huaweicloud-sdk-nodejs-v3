import { Vport } from './Vport';


export class UnbindVportRequestBody {
    public vport?: Vport;
    public constructor(vport?: Vport) { 
        this['vport'] = vport;
    }
    public withVport(vport: Vport): UnbindVportRequestBody {
        this['vport'] = vport;
        return this;
    }
}