import { CBHInstances } from './CBHInstances';


export class CreateInstanceBody {
    public server?: CBHInstances;
    public constructor() { 
    }
    public withServer(server: CBHInstances): CreateInstanceBody {
        this['server'] = server;
        return this;
    }
}