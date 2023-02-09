

export class Follow302StatusRequest {
    private 'follow302_status': Follow302StatusRequestFollow302StatusEnum | undefined;
    public constructor(follow302Status?: any) { 
        this['follow302_status'] = follow302Status;
    }
    public withFollow302Status(follow302Status: Follow302StatusRequestFollow302StatusEnum): Follow302StatusRequest {
        this['follow302_status'] = follow302Status;
        return this;
    }
    public set follow302Status(follow302Status: Follow302StatusRequestFollow302StatusEnum | undefined) {
        this['follow302_status'] = follow302Status;
    }
    public get follow302Status() {
        return this['follow302_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum Follow302StatusRequestFollow302StatusEnum {
    OFF = 'off',
    ON = 'on'
}
