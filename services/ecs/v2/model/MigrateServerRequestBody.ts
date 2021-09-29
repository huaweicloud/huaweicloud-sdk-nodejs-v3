import { MigrateServerOption } from './MigrateServerOption';


export class MigrateServerRequestBody {
    public migrate: MigrateServerOption;
    public constructor(migrate?: any) { 
        this['migrate'] = migrate;
    }
    public withMigrate(migrate: MigrateServerOption): MigrateServerRequestBody {
        this['migrate'] = migrate;
        return this;
    }
}