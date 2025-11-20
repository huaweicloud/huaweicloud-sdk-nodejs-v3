import { Vport } from './Vport';


export class BindVportRequestBody {
    public vport?: Vport;
    public constructor(vport?: Vport) { 
        this['vport'] = vport;
    }
    public withVport(vport: Vport): BindVportRequestBody {
        this['vport'] = vport;
        return this;
    }
}