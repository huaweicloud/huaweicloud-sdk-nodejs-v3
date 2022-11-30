

export class ReinstallVolumeSpec {
    public imageID?: string;
    public cmkID?: string;
    public constructor() { 
    }
    public withImageID(imageID: string): ReinstallVolumeSpec {
        this['imageID'] = imageID;
        return this;
    }
    public withCmkID(cmkID: string): ReinstallVolumeSpec {
        this['cmkID'] = cmkID;
        return this;
    }
}