

export class StartNotebookRequest {
    public duration?: number;
    public id?: string;
    public type?: StartNotebookRequestTypeEnum | string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withDuration(duration: number): StartNotebookRequest {
        this['duration'] = duration;
        return this;
    }
    public withId(id: string): StartNotebookRequest {
        this['id'] = id;
        return this;
    }
    public withType(type: StartNotebookRequestTypeEnum | string): StartNotebookRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StartNotebookRequestTypeEnum {
    TIMING = 'timing',
    IDLE = 'idle'
}
