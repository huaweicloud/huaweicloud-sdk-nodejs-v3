

export class MigrateVolumeSpec {
    public cmkID?: string;
    public constructor() { 
    }
    public withCmkID(cmkID: string): MigrateVolumeSpec {
        this['cmkID'] = cmkID;
        return this;
    }
}