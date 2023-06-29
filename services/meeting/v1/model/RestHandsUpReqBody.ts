

export class RestHandsUpReqBody {
    public handsState: number;
    public constructor(handsState?: any) { 
        this['handsState'] = handsState;
    }
    public withHandsState(handsState: number): RestHandsUpReqBody {
        this['handsState'] = handsState;
        return this;
    }
}