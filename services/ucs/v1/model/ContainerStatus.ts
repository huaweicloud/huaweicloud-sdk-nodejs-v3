

export class ContainerStatus {
    public name?: string;
    public state?: object;
    public lastState?: string;
    public ready?: boolean;
    public restartCount?: number;
    public image?: string;
    public imageID?: string;
    public started?: string;
    public constructor() { 
    }
    public withName(name: string): ContainerStatus {
        this['name'] = name;
        return this;
    }
    public withState(state: object): ContainerStatus {
        this['state'] = state;
        return this;
    }
    public withLastState(lastState: string): ContainerStatus {
        this['lastState'] = lastState;
        return this;
    }
    public withReady(ready: boolean): ContainerStatus {
        this['ready'] = ready;
        return this;
    }
    public withRestartCount(restartCount: number): ContainerStatus {
        this['restartCount'] = restartCount;
        return this;
    }
    public withImage(image: string): ContainerStatus {
        this['image'] = image;
        return this;
    }
    public withImageID(imageID: string): ContainerStatus {
        this['imageID'] = imageID;
        return this;
    }
    public withStarted(started: string): ContainerStatus {
        this['started'] = started;
        return this;
    }
}