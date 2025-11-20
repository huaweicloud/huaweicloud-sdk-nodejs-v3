import { UpdateConnectionOption } from './UpdateConnectionOption';


export class UpdateConnectionRequestBody {
    public connection?: UpdateConnectionOption;
    public constructor(connection?: UpdateConnectionOption) { 
        this['connection'] = connection;
    }
    public withConnection(connection: UpdateConnectionOption): UpdateConnectionRequestBody {
        this['connection'] = connection;
        return this;
    }
}