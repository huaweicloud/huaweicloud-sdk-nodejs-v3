

export class PopUpInfo {
    public popup?: boolean;
    private 'time_limit'?: object;
    public constructor() { 
    }
    public withPopup(popup: boolean): PopUpInfo {
        this['popup'] = popup;
        return this;
    }
    public withTimeLimit(timeLimit: object): PopUpInfo {
        this['time_limit'] = timeLimit;
        return this;
    }
    public set timeLimit(timeLimit: object  | undefined) {
        this['time_limit'] = timeLimit;
    }
    public get timeLimit(): object | undefined {
        return this['time_limit'];
    }
}