import { CreateConnectionOption } from './CreateConnectionOption';


export class CreateConnectionRequestBody {
    public connection?: CreateConnectionOption;
    public constructor(connection?: CreateConnectionOption) { 
        this['connection'] = connection;
    }
    public withConnection(connection: CreateConnectionOption): CreateConnectionRequestBody {
        this['connection'] = connection;
        return this;
    }
}