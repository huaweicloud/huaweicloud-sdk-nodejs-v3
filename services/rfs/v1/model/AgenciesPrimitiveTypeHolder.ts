import { Agency } from './Agency';


export class AgenciesPrimitiveTypeHolder {
    public agencies?: Array<Agency>;
    public constructor() { 
    }
    public withAgencies(agencies: Array<Agency>): AgenciesPrimitiveTypeHolder {
        this['agencies'] = agencies;
        return this;
    }
}